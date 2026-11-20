import Btn from "../components/Btn";
import Reveal from "../components/Reveal";
import Split from "../components/Split";
import { app, features, specs } from "../content/site";
import { img } from "../utils/img";

export default function OurApp() {
  return (
    <>
      <section className="hero hero--page">
        <div className="glow" aria-hidden="true" />
        <div className="container hero__grid">
          <div className="hero__copy">
            <Reveal as="span" className="eyebrow">The app</Reveal>
            <Split as="h1" parts={[["One prompt field,"], ["\n"], ["many ways to make.", true]]} />
            <Reveal as="p" className="lead" delay={300}>
              Write what you want to see, add a reference if you have one, and generate an image or a short video.
            </Reveal>
            <Reveal className="hero__cta" delay={420}>
              <Btn href={app.url}>Download on the App Store</Btn>
            </Reveal>
          </div>
          <Reveal className="hero__visual" delay={200}>
            <div className="phone">
              <img src={img("/images/phone-preview.webp")} alt="The app's generation preview screen" width={647} height={1400} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal as="span" className="eyebrow">Features</Reveal>
          <ol className="rows">
            {features.map((f, i) => (
              <Reveal as="li" className="row" key={f.title} delay={(i % 3) * 80}>
                <span className="row__n">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="h3">{f.title}</h3>
                <p className="muted">{f.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container split-two split-two--narrow">
          <div>
            <Reveal as="span" className="eyebrow">Details</Reveal>
            <Reveal as="h2" className="h2">The essentials.</Reveal>
          </div>
          <Reveal as="dl" className="specs">
            {specs.map(([k, v]) => (
              <div className="specs__row" key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--cta">
        <div className="container">
          <Reveal className="cta-block">
            <h2 className="h2">Open it and write the first line.</h2>
            <Btn href={app.url}>Download on the App Store</Btn>
          </Reveal>
        </div>
      </section>
    </>
  );
}
