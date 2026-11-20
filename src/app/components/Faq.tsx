import { faq } from "../content/site";

/** Native <details> accordion: keyboard and screen-reader friendly without JS. */
export default function Faq({ limit }: { limit?: number }) {
  const items = limit ? faq.slice(0, limit) : faq;
  return (
    <div className="faq">
      {items.map((f) => (
        <details className="faq__item" key={f.q}>
          <summary>
            <span>{f.q}</span>
            <i aria-hidden="true" className="faq__icon" />
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
