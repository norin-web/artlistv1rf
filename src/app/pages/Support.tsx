import Faq from "../components/Faq";
import Reveal from "../components/Reveal";
import Split from "../components/Split";
import { site } from "../content/site";

export default function Support() {
  return (
    <>
      <section className="hero hero--page">
        <div className="container">
          <Split as="h1" parts={[["Support"]]} />
          <Reveal as="p" className="lead" delay={300}>
            Answers to common questions. For anything else, write to us.
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container split-two split-two--narrow">
          <h2 className="h2">Common questions.</h2>
          <Faq />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta">
            <h2 className="h2">Still stuck? Email us.</h2>
            <a className="mail-big" href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
      </section>
    </>
  );
}
