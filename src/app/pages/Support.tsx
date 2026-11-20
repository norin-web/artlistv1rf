import Faq from "../components/Faq";
import Reveal from "../components/Reveal";
import Split from "../components/Split";
import { site } from "../content/site";

export default function Support() {
  return (
    <>
      <section className="hero hero--page">
        <div className="glow" aria-hidden="true" />
        <div className="container">
          <Reveal as="span" className="eyebrow">Support</Reveal>
          <Split as="h1" parts={[["Help, when you need it."]]} />
          <Reveal as="p" className="lead" delay={300}>
            Answers to the questions we hear most. For anything else, write to us.
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container split-two split-two--narrow">
          <div>
            <Reveal as="span" className="eyebrow">Common questions</Reveal>
          </div>
          <Faq />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="cta-block">
            <h2 className="h2">Still stuck?</h2>
            <p className="lead">Email us and we'll reply by mail.</p>
            <a className="mail-big" href={`mailto:${site.email}`}>{site.email}</a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
