import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, pageTitle }) {
  return (
    <>
      <Head />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
