import React, { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Toolbar from "@/components/Toolbar";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <Toolbar />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
