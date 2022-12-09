##E-Commerce Store

**Welcome to the Open Store!**
Your one-stop shop for all your favorite products! We have a wide selection of items in categories such as electronics, home and garden, clothing and accessories, and much more.

[Live Site](https://e-commerce-store-phi.vercel.app/)

![ScreenShot](/public/Screenshot%202022-12-09%20at%2017-30-41%20E-Commerce%20Store.png)

This website is built using: 

 - Next.js
 - NextAuth
 - Tailwind
 - Webhooks
 - Redux
- Firestore
- Stripe

###NextAuth 
Used for authentication and user management. This allows us to securely manage user accounts and ensure that only authorized users can access certain features of the website.
###Tailwind 
CSS framework that provides a wide range of utility classes for quickly styling elements of the website. This allows us to create a consistent and professional-looking design with minimal effort.
###Webhooks 
Used to trigger certain events when certain actions are performed on the website. For example, a webhook could be used to send a confirmation email to a customer when they make a purchase.
###Redux 
State management library that allows us to manage the state of the website in a predictable and efficient way. This makes it easier to develop and maintain the website, and helps to ensure that the website remains fast and responsive.

---
```javascript
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.payload.id}) as its not in basket!`
        );
      }

      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
```
This code is using Redux Toolkit to create a Redux store slice for managing a basket of items. The slice has initial state with an empty items array. The slice defines two reducers: addToBasket and removeFromBasket. These reducers allow items to be added to or removed from the basket, by modifying the items array in the store state.

The code also exports two action creators for the reducers: addToBasket and removeFromBasket. These can be used in other parts of the application to dispatch actions that will trigger the corresponding reducer.

The code also defines two selectors: selectItems and selectTotal. These are functions that can be used to extract data from the store state. selectItems returns the items array, while selectTotal calculates the total price of all items in the basket by summing the price of each item in the items array.

Finally, the basketSlice.reducer is exported as the default export. This can be passed to the Redux combineReducers function to create a root reducer for the application.

###Stripe
```javascript
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;

  const transformedItems = items.map((item) => ({
    quantity: 1,
    price_data: {
      currency: "usd",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [item.image],
        description: item.description,
      },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["US", "CA", "GB", "AU"],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: { amount: 0, currency: "usd" },
          display_name: "Free shipping",
          delivery_estimate: {
            minimum: { unit: "business_day", value: 5 },
            maximum: { unit: "business_day", value: 7 },
          },
        },
      },
    ],
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });
  res.status(200).json({ id: session.id });
};

```
Node.js module that exports an async function that creates a checkout session in the Stripe payment platform. The function takes in a request and response object as arguments and uses the body property of the request object to get the items and email of the user who is making the purchase.

The items array is transformed into an array of Stripe line items using the map() method, where each item is given a quantity of 1, a price in US dollars, and some metadata about the product such as its name, image, and description.

Next, the function uses the stripe object to create a checkout session using the checkout.sessions.create() method. This session is configured to accept card payments, allows shipping to a few specific countries, offers free shipping, and specifies the line items that were previously created. The function also sets the mode of the session to payment, which means that the user will be redirected to a Stripe-hosted page where they can enter their payment details and complete the purchase. Finally, the function returns the ID of the checkout session in the response object.

###Firestore 
Cloud-based NoSQL database that is used to store the data for the website. This allows us to store and retrieve data quickly and easily, and ensures that the data is always available, even if the website experiences a high volume of traffic.



---
We hope you enjoy using the E-Commerce Store! If you have any questions or feedback, please don't hesitate to contact us.