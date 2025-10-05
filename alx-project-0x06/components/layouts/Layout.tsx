import Header from "./Header";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-24 container mx-auto px-4">{children}</main>
    </>
  );
}
