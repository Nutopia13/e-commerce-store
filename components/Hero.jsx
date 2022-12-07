import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Wear1 from "../assets/slideshow/pexels-lumn-322207.jpg";
import Wear2 from "../assets/slideshow/pexels-moose-photos-1038000.jpg";
import Wear3 from "../assets/slideshow/pexels-andrea-piacquadio-842811.jpg";
import Cosm1 from "../assets/slideshow/pexels-cottonbro-studio-4812645.jpg";
import Cosm2 from "../assets/slideshow/pexels-karolina-grabowska-5632345.jpg";
import Cosm3 from "../assets/slideshow/pexels-da-capture-8981523.jpg";
import Travel from "../assets/slideshow/pexels-mearth-technology-3803868.jpg";
import Tech from "../assets/slideshow/pexels-athena-2983213.jpg";
import Sale from '../assets/slideshow/Untitled design.png'
import Cook from '../assets/slideshow/pexels-katerina-holmes-5907819.jpg'
const Hero = () => {
  return (
    <section className="text-gray-400 body-font">
      <div className="container flex flex-wrap px-6 pt-24 pb-12 mx-auto md:px-10 lg:px-20">
        <div className="flex flex-wrap w-full mb-20">
          <h1 className="mb-4 text-2xl font-medium text-white sm:text-3xl title-font lg:w-1/3 lg:mb-0">
            Shop with <span className="text-accent_yellow">Confidence</span> at
            Open Store
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:pl-6 lg:w-2/3">
            Welcome to Open Store, your one-stop shop for all your favorite
            products! We have a wide selection of items in categories such as
            electronics, home and garden, clothing and accessories, and much
            more.
          </p>
        </div>
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/2">
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block object-cover object-center w-full h-full"
                src={Tech}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block object-cover object-center w-full h-full"
                src={Travel}
              />
            </div>

            <Carousel
              autoPlay
              infiniteLoop
              showIndicators={false}
              showArrows={false}
              showThumbs={false}
              selectedItem={false}
              stopOnHover={true}
              showStatus={false}
              interval={3000}
            >
              <div className="w-full p-1 md:p-2">
                <Image
                  placeholder="blur"
                  loading="lazy"
                  className="block object-cover object-center w-full h-full"
                  src={Cosm1}
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <Image
                  placeholder="blur"
                  loading="lazy"
                  className="block object-cover object-center w-full h-full"
                  src={Cosm2}
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <Image
                  placeholder="blur"
                  loading="lazy"
                  className="block object-cover object-center w-full h-full"
                  src={Cosm3}
                />
              </div>
            </Carousel>
          </div>
          <div className="flex flex-wrap w-1/2">
            <Carousel
              showIndicators={false}
              autoPlay
              infiniteLoop
              showArrows={false}
              showThumbs={false}
              selectedItem={false}
              stopOnHover={true}
              showStatus={false}
              interval={5000}
            >
              <div className="w-full p-1 md:p-2">
                <Image
                  placeholder="blur"
                  loading="lazy"
                  className="block object-cover object-center w-full h-full"
                  src={Wear1}
                />
              </div>

              <div className="w-full p-1 md:p-2">
                <Image
                  placeholder="blur"
                  loading="lazy"
                  className="block object-cover object-center w-full h-full"
                  src={Wear2}
                />
              </div>

              <div className="w-full p-1 md:p-2">
                <Image
                  placeholder="blur"
                  loading="lazy"
                  className="block object-cover object-center w-full h-full"
                  src={Wear3}
                />
              </div>
            </Carousel>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block object-cover object-center w-full h-full"
                src={Sale}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                className="block object-cover object-center w-full h-full"
                src={Cook}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
