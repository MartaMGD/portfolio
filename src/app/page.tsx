import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Highlights } from "@/components/Highlights";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-6 sm:px-8">
        <Hero />
        <About />
        <Highlights />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
