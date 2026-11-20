import MailForm from "../components/MailForm";
import Reveal from "../components/Reveal";
import Split from "../components/Split";
import { site } from "../content/site";

export default function Contact() {
  return (
    <>
      <section className="hero hero--page">
        <div className="glow" aria-hidden="true" />
        <div className="container">
          <Reveal as="span" className="eyebrow">Contact</Reveal>
          <Split as="h1" parts={[["Say hello."]]} />
          <Reveal as="p" className="lead" delay={300}>
            Send a message and we'll reply by email. Or write directly to{" "}
            <a className="link" href={`mailto:${site.email}`}>{site.email}</a>.
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container split-two split-two--narrow">
          <div>
            <Reveal as="span" className="eyebrow">Message</Reveal>
            <Reveal as="p" className="lead">
              The form opens your mail app with the message filled in. Nothing is stored on this site.
            </Reveal>
          </div>
          <Reveal className="form-card">
            <MailForm
              subject={`${site.brand} — contact`}
              submit="Send message"
              fields={[
                { name: "name", label: "Name", required: true, auto: "name" },
                { name: "email", label: "Email", type: "email", required: true, auto: "email" },
                { name: "topic", label: "Topic", options: ["General question", "Bug report", "Feature idea", "Privacy request"] },
                { name: "message", label: "Message", textarea: true, required: true },
              ]}
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
