import Btn from "../components/Btn";
import { FaqTabs } from "../components/Faq";
import Reveal from "../components/Reveal";
import Split from "../components/Split";
import {
  app, blog, blogIndex, closing, features, hero, platform, showcase,
} from "../content/site";
import { img } from "../utils/img";

export default function Home() {
  return (
    <>
      {/* Hero: two overlapping phones, the back one more transparent */}
      <section className="hero">
        <div className="container hero__center">
          <p className="eyebrow">{hero.eyebrow}</p>
          <Split as="h1" parts={[["Images and short videos"], ["\n"], ["from a prompt."]]} />
          <Reveal as="p" className="lead lead--center" delay={300}>{hero.lead}</Reveal>
          <Reveal className="hero__cta" delay={420}>
            <Btn href={app.url}>Download on the App Store</Btn>
            <Btn to="/app" variant="dark">See the app</Btn>
          </Reveal>
          <div className="hero__stage">
            <img className="device device--back" src={img("/images/device-image.webp")} alt="" width={800} height={1635} />
            <img className="device device--front" src={img("/images/device-video.webp")} alt="The app's home screen" width={800} height={1635} />
          </div>
        </div>
      </section>

      {/* Ways to start, next to the style library screen */}
      <section className="section" id="platform">
        <div className="container split-two">
          <div>
            <h2 className="h2">{platform.title}</h2>
            <dl className="specs">
              {platform.points.map((p) => (
                <div className="specs__row" key={p.title}>
                  <dt>{p.title}</dt>
                  <dd>{p.text}</dd>
                </div>
              ))}
            </dl>
          </div>
          <img className="device" src={img("/images/device-library.webp")} alt="The style library screen" width={800} height={1635} loading="lazy" />
        </div>
      </section>

      {/* What the app makes: the store's own feature names */}
      <section className="section" id="start">
        <div className="container split-two split-two--narrow">
          <h2 className="h2">What you can make.</h2>
          <ul className="rows">
            {features.map((f) => (
              <li className="row" key={f.title}>
                <h3 className="h3">{f.title}</h3>
                <p className="muted">{f.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* One real example from the preview screen */}
      <section className="section" id="prompts">
        <div className="container split-two">
          <div>
            <h2 className="h2">{showcase.title}</h2>
            <p className="showcase__prompt">{showcase.prompt}</p>
            <dl className="specs">
              {showcase.settings.map(([k, v]) => (
                <div className="specs__row" key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <img className="device" src={img("/images/device-image.webp")} alt="The generation preview screen" width={800} height={1635} loading="lazy" />
        </div>
      </section>

      {/* Blog: plain links to the original articles */}
      <section className="section" id="blog">
        <div className="container split-two split-two--narrow">
          <h2 className="h2">From the Artlist blog.</h2>
          <div>
            <ul className="rows">
              {blog.map((b) => (
                <li key={b.title}>
                  <a className="row row--link" href={b.href} target="_blank" rel="noopener noreferrer">
                    <span className="h3">{b.title}</span>
                    <span className="muted">{b.rubric} ↗</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="small muted blog-more">
              All articles: <a className="link" href={blogIndex} target="_blank" rel="noopener noreferrer">artlist.io/blog</a>
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container">
          <h2 className="h2">Questions.</h2>
          <FaqTabs />
        </div>
      </section>

      <section className="section section--cta">
        <div className="container cta">
          <h2 className="h2">{closing.title}</h2>
          <Btn href={app.url}>Download on the App Store</Btn>
        </div>
      </section>
    </>
  );
}
