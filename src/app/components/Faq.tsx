import { useState } from "react";
import { faq, faqGroups } from "../content/site";

/** Native <details> accordion. `grouped` adds the side tabs used on the home page. */
export function FaqList({ items }: { items: { q: string; a: string }[] }) {
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

/** Full FAQ list, no tabs. Used on the Support page. */
export default function Faq() {
  return <FaqList items={faq} />;
}

/** Home page version: group tabs on the left, the matching questions on the right. */
export function FaqTabs() {
  const [group, setGroup] = useState(faqGroups[0]);
  const items = faq.filter((f) => f.group === group);
  return (
    <div className="faq-tabs">
      <div className="faq-tabs__list" role="tablist" aria-label="Question groups">
        {faqGroups.map((g) => (
          <button
            key={g}
            role="tab"
            aria-selected={group === g}
            className={`faq-tabs__btn${group === g ? " is-on" : ""}`}
            onClick={() => setGroup(g)}
          >
            {g}
          </button>
        ))}
      </div>
      <FaqList items={items} />
    </div>
  );
}
