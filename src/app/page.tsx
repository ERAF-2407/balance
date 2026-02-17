import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Profile } from "@/components/sections/Profile";
import { Services } from "@/components/sections/Services";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Manifesto />
      <Profile />
      <Services />
      <Footer />
    </main>
  );
}
