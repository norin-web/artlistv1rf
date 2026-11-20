import { Film, Image as ImageIcon, Music, Palette } from "lucide-react";
import Btn from "../components/Btn";
import { FaqTabs } from "../components/Faq";
import Reveal from "../components/Reveal";
import Split from "../components/Split";
import {
  app, betterWay, closing, flows, hero, modes, platform, plans, showcase, stack,
} from "../content/site";
import { img } from "../utils/img";

/** Section label in the reference style: "01 / THE PLATFORM". */
function SecLabel({ num, label }: { num: string; label: string }) {
  return (
    <Reveal className="sechead">
      <span className="sechead__n">{num}</span>
      <span className="sechead__l">/ {label}</span>
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero: centred headline, two overlapping phones (back one more transparent) */}
      <section className="hero">
        <div className="glow" aria-hidden="true" />
        <div className="container hero__center">
          <Reveal as="span" className="eyebrow">{hero.eyebrow}</Reveal>
          <Split as="h1" parts={[["Less blank page."], ["\n"], ["More motion in every frame.", true]]} />
          <Reveal as="p" className="lead lead--center" delay={300}>{hero.lead}</Reveal>
          <Reveal className="hero__cta" delay={420}>
            <Btn href={app.url}>Download on the App Store</Btn>
            <Btn to="/app" variant="dark">See the app</Btn>
          </Reveal>
          <Reveal className="hero__stage" delay={200}>
            <div className="phone phone--back">
              <img src={img("/images/phone-preview.webp")} alt="" width={647} height={1400} />
            </div>
            <div className="phone phone--front">
              <img src={img("/images/phone-create.webp")} alt="The app's prompt screen" width={647} height={1400} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 01 / The platform */}
      <section className="section" id="platform">
        <div className="container">
          <SecLabel num="01" label="The platform" />
          <Reveal as="h2" className="h2 h2--wide">{platform.title}</Reveal>
          <div className="grid3">
            {platform.points.map((p, i) => (
              <Reveal className="tile" key={p.title} delay={i * 80}>
                <span className="tile__n">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="h3">{p.title}</h3>
                <p className="muted">{p.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="panel">
            <div className="phone">
              <img src={img("/images/phone-styles.webp")} alt="The style library screen" width={647} height={1400} loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 02 / A better way to work */}
      <section className="section">
        <div className="container">
          <SecLabel num="02" label="A better way to work" />
          <Reveal as="h2" className="h2 h2--wide">{betterWay.title}</Reveal>
          <ol className="rows">
            {betterWay.rows.map((r, i) => (
              <Reveal as="li" className="row" key={r.title} delay={(i % 2) * 100}>
                <span className="row__n">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="h3">{r.title}</h3>
                <p className="muted">{r.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 03 / Your stack, in sync — centred headline, a dark card with a prompt exchange */}
      <section className="section section--center">
        <div className="container">
          <SecLabel num="03" label="Your stack, in sync" />
          <Reveal as="h2" className="h2 h2--center">{stack.title}</Reveal>
          <Reveal as="p" className="lead lead--center">{stack.lead}</Reveal>
          <Reveal className="stack-card">
            <div className="stack-card__chat">
              {stack.chat.map((m) => (
                <div key={m.text} className={`bubble bubble--${m.who}`}>
                  <span className="bubble__who">{m.who === "you" ? "You" : "Artlist"}</span>
                  <p>{m.text}</p>
                </div>
              ))}
            </div>
            <div className="stack-card__icons">
              <span><ImageIcon size={22} aria-hidden="true" />Image</span>
              <span><Film size={22} aria-hidden="true" />Video</span>
              <span><Music size={22} aria-hidden="true" />Dance</span>
              <span><Palette size={22} aria-hidden="true" />Styles</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 04 / Meet the creative modes */}
      <section className="section">
        <div className="container">
          <SecLabel num="04" label="Meet the creative modes" />
          <Reveal as="h2" className="h2 h2--center">Four modes. One prompt field.</Reveal>
          <div className="grid2">
            {modes.map((m, i) => (
              <Reveal className="mode" key={m.title} delay={(i % 2) * 100}>
                <span className="eyebrow">{m.label}</span>
                <h3 className="h3">{m.title}</h3>
                <p className="muted">{m.text}</p>
                <div className="mode__ui">
                  <span className="mode__field">{m.field}</span>
                  <p>{m.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 / Small starts — the flows */}
      <section className="section" id="start">
        <div className="container">
          <SecLabel num="05" label="Small starts. Big possibilities." />
          <Reveal as="h2" className="h2 h2--wide">Start with the clip you have in mind.</Reveal>
          <div className="grid3">
            {flows.map((f, i) => (
              <Reveal className="flow" key={f.title} delay={(i % 3) * 80}>
                <span className="eyebrow">Flow / {String(i + 1).padStart(2, "0")}</span>
                <h3 className="h3">{f.title}</h3>
                <p className="muted">{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 06 / Room to grow — plans come from the App Store, placeholders until then */}
      <section className="section" id="pricing">
        <div className="container">
          <SecLabel num="06" label="Room to grow" />
          <Reveal as="h2" className="h2 h2--wide">Plans, as listed on the App Store.</Reveal>
          <Reveal as="p" className="lead">Prices and billing are shown on the App Store listing.</Reveal>
          <div className="grid3 grid3--plans">
            {plans.map((p, i) => (
              <Reveal className="plan" key={i} delay={i * 80}>
                <span className="eyebrow">{p.name}</span>
                <div className="plan__price">{p.price}</div>
                <p className="muted">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 07 / Prompts in motion — one real example from the app */}
      <section className="section" id="prompts">
        <div className="container">
          <SecLabel num="07" label="Prompts in motion" />
          <Reveal as="h2" className="h2 h2--wide">{showcase.title}</Reveal>
          <Reveal className="showcase">
            <div className="showcase__copy">
              <span className="eyebrow">Prompt</span>
              <p className="showcase__prompt">{showcase.prompt}</p>
              <dl className="specs specs--compact">
                {showcase.settings.map(([k, v]) => (
                  <div className="specs__row" key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="phone phone--side">
              <img src={img("/images/phone-preview.webp")} alt="The generation preview screen" width={647} height={1400} loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 08 / A little more clarity */}
      <section className="section" id="faq">
        <div className="container">
          <SecLabel num="08" label="A little more clarity" />
          <Reveal as="h2" className="h2 h2--wide">Answers to the questions that come up most.</Reveal>
          <FaqTabs />
        </div>
      </section>

      {/* Closing */}
      <section className="section section--cta">
        <div className="container">
          <Reveal className="cta-block">
            <span className="eyebrow">Less friction. More forward.</span>
            <h2 className="h2 h2--center">{closing.title}</h2>
            <p className="lead">{closing.lead}</p>
            <Btn href={app.url}>Download on the App Store</Btn>
          </Reveal>
        </div>
      </section>
    </>
  );
}
