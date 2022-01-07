import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            {children}
        </main>
      <Footer />
    </>
  );
}
