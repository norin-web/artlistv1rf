import Btn from "../components/Btn";
import Reveal from "../components/Reveal";
import Split from "../components/Split";
import { app, specs } from "../content/site";
import { img } from "../utils/img";

export default function OurApp() {
  return (
    <>
      <section className="hero hero--page">
        <div className="container hero__grid">
          <div className="hero__copy">
            <Split as="h1" parts={[["Artlist for iPhone"]]} />
            <Reveal as="p" className="lead" delay={300}>
              Create images and short videos from a prompt, a reference photo or a starting frame.
            </Reveal>
            <Reveal className="hero__cta" delay={420}>
              <Btn href={app.url}>Download on the App Store</Btn>
            </Reveal>
          </div>
          <Reveal className="hero__visual" delay={200}>
            <img className="device" src={img("/images/device-video.webp")} alt="The app's home screen" width={800} height={1635} />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container split-two split-two--narrow">
          <div>
            <h2 className="h2">Details.</h2>
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
          <div className="cta">
            <h2 className="h2">Download Artlist.</h2>
            <Btn href={app.url}>Download on the App Store</Btn>
          </div>
        </div>
      </section>
    </>
  );
}
