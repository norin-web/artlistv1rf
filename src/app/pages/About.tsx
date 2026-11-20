import Btn from "../components/Btn";
import Reveal from "../components/Reveal";
import Split from "../components/Split";
import { site } from "../content/site";

export default function About() {
  return (
    <>
      <section className="hero hero--page">
        <div className="container">
          <Split as="h1" parts={[["About Artlist"]]} />
          <Reveal as="p" className="lead" delay={300}>{site.about}</Reveal>
        </div>
      </section>

      <section className="section section--cta">
        <div className="container cta">
          <h2 className="h2">Questions or ideas?</h2>
          <Btn to="/contact" variant="dark">Contact us</Btn>
        </div>
      </section>
    </>
  );
}
