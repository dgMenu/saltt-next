import Head from "next/head";
import Header from "./Header";
// import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/lettermark.svg" type="image/x-icon" />
        <title> Archie Restaurant, Loutolim - Goa</title>
      </Head>
      <section className="flex flex-col w-screen min-h-screen overflow-x-hidden ">
        <Header />
        <main className="flex-1">{children}</main>
        {/* <Footer /> */}
      </section>
    </>
  );
}
