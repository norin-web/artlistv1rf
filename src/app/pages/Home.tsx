import { useState } from "react";
import Btn from "../components/Btn";
import Faq from "../components/Faq";
import Reveal from "../components/Reveal";
import Split from "../components/Split";
import { app, features, scene, steps } from "../content/site";
import { img } from "../utils/img";
import { useScrollIndex } from "../utils/motion";

function SecHead({ num, label }: { num: string; label: string }) {
  return (
    <Reveal className="sechead">
      <span className="sechead__n">{num}</span>
      <span className="sechead__l">/ {label}</span>
    </Reveal>
  );
}

export default function Home() {
  const { ref: sceneRef, index } = useScrollIndex<HTMLDivElement>(scene.length);
  const [tab, setTab] = useState(0);

  return (
    <>
      <section className="hero">
        <div className="glow" aria-hidden="true" />
        <div className="container hero__grid">
          <div className="hero__copy">
            <Reveal as="span" className="eyebrow">AI video and image generator for iPhone</Reveal>
            <Split
              as="h1"
              parts={[["Describe it."], ["\n"], ["Generate it."], ["\n"], ["Make it move.", true]]}
            />
            <Reveal as="p" className="lead" delay={300}>
              Create images and short videos from a prompt, a reference photo or a starting frame, and bring
              your own pictures to life.
            </Reveal>
            <Reveal className="hero__cta" delay={420}>
              <Btn href={app.url}>Download on the App Store</Btn>
              <Btn to="/app" variant="dark">See the app</Btn>
            </Reveal>
            <Reveal as="p" className="small muted" delay={480}>
              Available on the App Store · iOS {app.minIOS}+
            </Reveal>
          </div>
          <Reveal className="hero__visual" delay={200}>
            <div className="phone">
              <img src={img("/images/phone-create.webp")} alt="The app's prompt screen" width={647} height={1400} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SecHead num="01" label="The app" />
          <Reveal as="h2" className="h2">Three screens, one flow.</Reveal>
        </div>
        <div className="scene" ref={sceneRef}>
          <div className="scene__sticky">
            <div className="container scene__grid">
              <div className="scene__text">
                {scene.map((s, i) => (
                  <div key={s.title} className={`scene__item${index === i ? " is-on" : ""}`}>
                    <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="h3">{s.title}</h3>
                    <p className="lead">{s.text}</p>
                  </div>
                ))}
              </div>
              <div className="scene__phones">
                {scene.map((s, i) => (
                  <img
                    key={s.shot}
                    className={`scene__shot${index === i ? " is-on" : ""}`}
                    src={img(s.shot)}
                    alt={s.title}
                    width={647}
                    height={1400}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SecHead num="02" label="What you can make" />
          <Reveal as="h2" className="h2">Seven ways to start a generation.</Reveal>
          <div className="grid3">
            {features.map((f, i) => (
              <Reveal className="tile" key={f.title} delay={(i % 3) * 80}>
                <span className="tile__n">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="h3">{f.title}</h3>
                <p className="muted">{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SecHead num="03" label="How it works" />
          <Reveal as="h2" className="h2">Three steps from idea to clip.</Reveal>
          <div className="steps">
            {steps.map((s, i) => (
              <Reveal className="line step" key={s.title} delay={i * 120}>
                <span className="step__n">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="h3">{s.title}</h3>
                <p className="muted">{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-two">
          <div>
            <SecHead num="04" label="Styles" />
            <Reveal as="h2" className="h2">Start from a look you already like.</Reveal>
            <Reveal as="p" className="lead">
              Browse the style library, pick a look, and apply it to any prompt. Prompt presets give you a
              starting point when you have none.
            </Reveal>
            <div className="tabs" role="tablist" aria-label="Start points">
              {features.slice(0, 3).map((f, i) => (
                <button
                  key={f.title}
                  role="tab"
                  aria-selected={tab === i}
                  className={`tabs__btn${tab === i ? " is-on" : ""}`}
                  onClick={() => setTab(i)}
                >
                  {f.title}
                </button>
              ))}
            </div>
            <p className="lead tabs__text">{features[tab].text}</p>
          </div>
          <Reveal className="phone phone--side">
            <img src={img("/images/phone-styles.webp")} alt="The style library screen" width={647} height={1400} loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container split-two split-two--narrow">
          <div>
            <SecHead num="05" label="Questions" />
            <Reveal as="h2" className="h2">Answers to what people ask first.</Reveal>
          </div>
          <Faq limit={5} />
        </div>
      </section>

      <section className="section section--cta">
        <div className="container">
          <Reveal className="cta-block">
            <img className="cta-block__icon" src={img("/images/app-icon.png")} alt="" width={96} height={96} loading="lazy" />
            <h2 className="h2">Make your first clip today.</h2>
            <Btn href={app.url}>Download on the App Store</Btn>
          </Reveal>
        </div>
      </section>
    </>
  );
}
