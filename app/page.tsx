import Company from "@/components/company";
import ContactForm from "@/components/contact-form";
import Hero from "@/components/hero";
import Technologies from "@/components/technologies";

export default function Home() {
  return (
    <section className="relative">
      <Hero />
      <Company />
      <Technologies />
      <ContactForm />
    </section>
  );
}
