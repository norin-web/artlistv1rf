// Privacy and Terms are the operator's texts, pasted here VERBATIM (only markup changes:
// "## " headings, "- " lists). Until they arrive, the bodies below are placeholders.

import { PLACEHOLDER } from "./site";

export type LegalDoc = {
  title: string;
  current: string;
  updated?: string;
  body: string | null;
  glance?: [string, string][];
  other: { to: string; label: string };
};

export const legalUpdated = PLACEHOLDER;

export const privacy: LegalDoc = {
  title: "Privacy Policy",
  current: "privacy",
  body: `PLACEHOLDER — paste the operator's Privacy Policy here, verbatim.

## Placeholder section
PLACEHOLDER — section text from the operator's document.`,
  other: { to: "/terms", label: "Terms of Use" },
};

export const terms: LegalDoc = {
  title: "Terms of Use",
  current: "terms",
  body: `PLACEHOLDER — paste the operator's Terms of Use here, verbatim.

## Placeholder section
PLACEHOLDER — section text from the operator's document.`,
  other: { to: "/privacy", label: "Privacy Policy" },
};
