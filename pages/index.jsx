import Head from "next/head";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>Home &bull; Saltt Kitchen &apos;n Bar</title>
      </Head>

      <main className="bg-[url('/display.jpg')] bg-no-repeat bg-cover bg-left-bottom lg:bg-right-bottom relative">
        <div className="w-full h-full bg-black/70 text-white">
          <div className="box min-h-[80vh] flex flex-col items-center gap-4 justify-center overflow-x-hidden">
            <h1 className="uppercase font-black text-5xl md:text-6xl lg:text-7xl w-[15ch] text-center">
              Taste the difference
            </h1>
            <p className="uppercase tracking-wider text-xl">only at</p>
            <img
              src="/wordmark.png"
              alt="Saltt Kitchen 'n Bar"
              className="h-16 lg:h-20"
            />

            <div className="flex gap-5 mt-16 flex-col md:flex-row w-full justify-center">
              <a
                href="#meet"
                className="btn font-bold uppercase bg-saltt border-saltt pt-3 hover:opacity-80 transition-all duration-300 text-center w-full md:w-fit"
              >
                Take me there
              </a>
              <a
                href="/menu"
                className="btn font-bold uppercase border-saltt pt-3 hover:bg-saltt transition-all duration-300 text-center w-full md:w-fit"
              >
                What&apos;s cookin&apos; ?
              </a>
            </div>
          </div>
          <a
            href="#feature"
            className="absolute bottom-0 right-1/2 p-5 translate-x-1/2"
          >
            <i className="fas fa-chevron-down text-center animate-bounce"></i>
          </a>
        </div>
      </main>

      <section id="feature">
        <div className="box grid lg:grid-cols-2 gap-16 pb-8 pt-28">
          <div className="flex gap-8 items-start max-w-2xl">
            <img
              src="/icons/undraw_outdoor_party.svg"
              alt=""
              className="h-32 w-5/12"
            />
            <div>
              <h3 className="font-bold text-3xl">
                Not just a restaurant, but also a party place.
              </h3>
              <p className="mt-2 text-lg">
                Pellentesque facilisis ante vel dolor posuere, id sagittis eros
                laoreet. Sed a lacinia justo. Vestibulum convallis pulvinar.
              </p>
            </div>
          </div>
          <div className="flex gap-8 items-start max-w-2xl">
            <img
              src="/icons/undraw_fishing.svg"
              alt=""
              className="h-32 w-5/12"
            />
            <div>
              <h3 className="font-bold text-3xl">
                Always the freshest seafood.
              </h3>
              <p className="mt-2 text-lg">
                Pellentesque facilisis ante vel dolor posuere, id sagittis eros
                laoreet. Vestibulum convallis pulvinar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="box py-28 flex flex-col items-center">
          <h2 className="text-center font-black text-5xl relative w-fit px-4 half-underline">
            From the &apos;Gram
          </h2>
          <div className="grid lg:grid-cols-3 gap-3 mt-12 w-full justify-items-center">
            <img src="/gallery/image1.jpg" alt="" />
            <img src="/gallery/image2.jpg" alt="" />
            <img src="/gallery/image3.jpg" alt="" />
          </div>
        </div>
      </section>

      <section
        className="bg-[url('/banner.jpg')] bg-no-repeat bg-cover bg-center"
        id="meet"
      >
        <div className="h-full w-full bg-black/60 text-white">
          <div className="box py-20 pt-28">
            <h2 className="font-black text-5xl drop-shadow-lg text-center leading-[4rem]">
              Let&apos;s मीट at SALTŤ
            </h2>
          </div>
        </div>
      </section>

      <section>
        <div className="box py-28 flex flex-col items-center">
          {/* <h2 className="text-center font-black text-4xl lg:text-5xl relative w-fit px-4">
    Come
    <span className="block absolute w-full bg-saltt-light h-6 bottom-0 right-1/2 translate-x-1/2 -z-10"></span>
</h2>  */}
          <div className="grid gap-3 mt-12 w-full">
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
