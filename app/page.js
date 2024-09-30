import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { Separator } from "@radix-ui/react-context-menu";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}
