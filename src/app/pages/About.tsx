import Btn from "../components/Btn";
import Reveal from "../components/Reveal";
import Split from "../components/Split";
import { principles, site } from "../content/site";

export default function About() {
  return (
    <>
      <section className="hero hero--page">
        <div className="glow" aria-hidden="true" />
        <div className="container">
          <Reveal as="span" className="eyebrow">About</Reveal>
          <Split as="h1" parts={[["Made for people"], ["\n"], ["who make things.", true]]} />
          <Reveal as="p" className="lead" delay={300}>{site.about}</Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal as="span" className="eyebrow">Approach</Reveal>
          <Reveal as="h2" className="h2">Three principles.</Reveal>
          <div className="grid3">
            {principles.map((p, i) => (
              <Reveal className="tile" key={p.title} delay={i * 80}>
                <span className="tile__n">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="h3">{p.title}</h3>
                <p className="muted">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cta">
        <div className="container">
          <Reveal className="cta-block">
            <h2 className="h2">Questions or ideas? Write to us.</h2>
            <Btn to="/contact" variant="dark">Contact us</Btn>
          </Reveal>
        </div>
      </section>
    </>
  );
}
