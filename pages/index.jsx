import Head from "next/head";
import Footer from "../components/Footer";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home &bull; Archie Restaurant</title>
      </Head>

      <main className="bg-[url('/display.jpg')] bg-no-repeat bg-cover bg-left-bottom lg:bg-right-bottom relative">
        <div className="w-full h-full text-white bg-black/70">
          <div className="box min-h-[80vh] flex flex-col items-center gap-4 justify-center overflow-x-hidden">
            <h1
              className="uppercase font-black text-5xl md:text-6xl lg:text-7xl w-[15ch] text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Taste the difference
            </h1>
            <p
              className="text-xl tracking-wider uppercase"
              data-aos="fade-up"
              data-aos-delay="1200"
            >
              only at
            </p>
            <img
              data-aos="fade-up"
              data-aos-delay="1800"
              src="/archie-sports-bar-white.png"
              alt="Archie Restaurant"
              className="h-16 lg:h-28"
            />

            <div
              className="flex flex-col justify-center w-full gap-5 mt-16 md:flex-row"
              data-aos="fade-up"
              data-aos-delay="2500"
            >
              <a
                href="#meet"
                className="w-full pt-3 font-bold text-center uppercase transition-all duration-300 btn bg-saltt border-saltt hover:opacity-80 md:w-fit"
              >
                Take me there
              </a>
              <Link href="/menu">
                <a className="w-full pt-3 font-bold text-center uppercase transition-all duration-300 btn border-saltt hover:bg-saltt md:w-fit">
                  What&apos;s cookin&apos; ?
                </a>
              </Link>
            </div>
          </div>
          <a
            href="#feature"
            className="absolute bottom-0 p-5 translate-x-1/2 right-1/2"
          >
            <i className="text-center fas fa-chevron-down animate-bounce"></i>
          </a>
        </div>
      </main>

      <section id="feature">
        <div className="grid gap-16 pb-8 box lg:grid-cols-2 pt-28">
          <div className="flex items-start max-w-2xl gap-8">
            <img
              src="/icons/undraw_outdoor_party.svg"
              alt=""
              className="w-5/12 h-32"
            />
            <div className="w-7/12">
              <h3 className="text-2xl font-bold">
                Not just a restaurant, but also a party place.
              </h3>
              <p className="mt-2 text-lg"></p>
            </div>
          </div>
          <div className="flex items-start max-w-2xl gap-8">
            <img
              src="/icons/undraw_fishing.svg"
              alt=""
              className="w-5/12 h-32"
            />
            <div className="w-7/12">
              <h3 className="text-2xl font-bold">
                Always the freshest seafood.
              </h3>
              <p className="mt-2 text-lg"></p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center box py-28">
          <h2 className="relative px-4 text-5xl font-black text-center w-fit half-underline">
            From the &apos;Gram
          </h2>
          <div className="grid w-full gap-3 mt-12 lg:grid-cols-3 justify-items-center">
            <img
              className="h-[400px] w-auto object-contain"
              src="/gallery/image1.jpg"
              alt=""
            />
            <img
              className="h-[400px] w-auto object-contain"
              src="/gallery/image2.jpg"
              alt=""
            />
            <img
              className="h-[400px] w-auto object-contain"
              src="/gallery/image3.jpg"
              alt=""
            />
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center box py-28">
          <h2 className="relative px-4 text-5xl font-black text-center w-fit half-underline">
            A little About us
          </h2>
          <div className="flex flex-col w-full max-w-3xl gap-5 mx-auto mt-12">
            <p>
              Simplicity is the ultimate sophistication at Saltt. We believe in
              being simple, caring and very much loving to everyone who enters
              our home and it reflects in our food and service.
            </p>
            <p>
              We take pleasure in serving beautiful people like you. We love to
              see you enjoy every bit of our hospitality we have to offer, which
              indeed makes us happy, wanting to do more. We feel proud that we
              could deliver not only our service but also a smile on your face.
              It&apos;s more about you, our wonderful people and a little about
              us. We want to serve you the best we can. With you we grow.
            </p>
            <p>Thanking you all, for your loyalty and trust in us.</p>
            {/* <span className="font-bold"> ~ SALTŤ Familia </span> */}
          </div>
        </div>
      </section>

      <section
        className="bg-[url('/board.jpg')] bg-no-repeat bg-cover bg-center"
        id="meet"
      >
        <div className="w-full h-full text-white bg-black/70">
          <div className="py-20 box pt-28">
            <h2 className="font-black text-4xl sm:text-5xl drop-shadow-lg text-center leading-[4rem]">
              <div className="flex items-center justify-center gap-1">
                <span>We l</span>
                <img src="/heart.png" alt="o" className="h-8" />
                <span>ve you</span>
              </div>
            </h2>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center box py-28">
          {/* <h2 className="relative px-4 text-4xl font-black text-center lg:text-5xl w-fit">
    Come
    <span className="absolute bottom-0 block w-full h-6 translate-x-1/2 bg-saltt-light right-1/2 -z-10"></span>
</h2>  */}
          <div className="grid w-full gap-3 mt-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1923.8804993250792!2d73.99616924965169!3d15.335218300901882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb1db9fcaac97%3A0xe14bb739b4c8c375!2sSALTT%20Kitchen%20n%20Bar!5e0!3m2!1sen!2sin!4v1655573776465!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              height="400"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
