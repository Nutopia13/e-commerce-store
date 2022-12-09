import { buffer } from "micro";
import * as admin from "firebase-admin";

//Secure a connection to Firebase from the backend
const serviceAccount = require("../../permissions.json");
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

//Establish a connection to Stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_SIGNING_SECRET;
const fullFillOrder = async (session) => {
  return app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("orders")
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(`SUCCESS: Order ${session.id} has been added to the DB`);
    })
    .catch((error) => console.log(error));
};

export default async (req, res) => {
  if (req.method === "POST") {
    const requestBuffer = await buffer(req); //converts the request to a buffer
    const payload = requestBuffer.toString(); // converts the buffer to a string
    const sig = req.headers["stripe-signature"]; // gets the signature from the request headers
    let event;
    //Verify that the event posted came from Stripe
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }
    // Handle the checkout.session.completed event
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      //Fulfill the purchase...
      return fullFillOrder(session)
        .then(() => res.status(200))
        .catch((error) =>
          res.status(400).send(`Webhook Error: ${error.message}`)
        );
    }
  }
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
