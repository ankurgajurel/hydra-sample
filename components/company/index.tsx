import About from "./about";
import Introduction from "./introduction";
import WhyHydra from "./why-hydra";

export default function Company() {
  return (
    <section className="relative py-10">
      <Introduction />
      <About />
      <WhyHydra />
    </section>
  );
}
