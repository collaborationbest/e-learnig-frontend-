"use client"
import { SessionProvider } from "next-auth/react";
import Homepage from "./(public)/homepage/page";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <SessionProvider>
      <Header />
      <Homepage />
      <Footer />
    </SessionProvider>
  );
}