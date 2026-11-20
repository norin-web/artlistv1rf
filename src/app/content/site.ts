// Every fact about the operator, the app and the copy lives in this file.
// Values marked PLACEHOLDER are not confirmed yet — replace them before launch.

export const PLACEHOLDER = "PLACEHOLDER";

export const site = {
  brand: "Artist",
  email: PLACEHOLDER,
  operator: PLACEHOLDER,
  disclaimer: "PLACEHOLDER — trademark and partner notice from the operator's documents.",
  about: "PLACEHOLDER — two or three sentences about the operator.",
  year: 2026,
};

export const app = {
  id: PLACEHOLDER,
  url: `https://apps.apple.com/app/id${PLACEHOLDER}`,
  minIOS: PLACEHOLDER,
  category: PLACEHOLDER,
  languages: PLACEHOLDER,
  ageRating: PLACEHOLDER,
};

export const nav = [
  { to: "/app", label: "App" },
  { to: "/about", label: "About" },
  { to: "/support", label: "Support" },
  { to: "/contact", label: "Contact" },
];

// Feature names match the App Store listing and the in-app screens.
export const features = [
  { title: "AI Video Generator", text: "Turn a written idea into a short clip, from a prompt alone." },
  { title: "Text to Video", text: "Describe a scene, choose a look and generate the motion." },
  { title: "Image to Video", text: "Start from one of your pictures and bring it into motion." },
  { title: "AI Dance", text: "Put a person from a photo into a short dance clip." },
  { title: "Generative Media Studio", text: "Make images and videos in one place, with the settings you need." },
  { title: "Bring Memories Back to Life", text: "Animate an old photo into a short moving scene." },
];

// Three screens of the app, shown in the sticky scene on the home page.
export const scene = [
  { title: "Write the prompt", text: "Describe the scene in plain words, or start from a preset.", shot: "/images/phone-create.webp" },
  { title: "Add a reference", text: "Use a photo as a reference, a start frame or an end frame.", shot: "/images/phone-preview.webp" },
  { title: "Pick a style", text: "Browse the style library and apply a look to any prompt.", shot: "/images/phone-styles.webp" },
];

export const steps = [
  { title: "Write a prompt", text: "Describe what you want to see, or pick a preset to begin." },
  { title: "Add references", text: "Attach a photo, a start frame or an end frame if you have one." },
  { title: "Generate and keep", text: "Review the result, then save it or share it." },
];

export const principles = [
  { title: "Start from a sentence", text: "A short description is enough to begin. Refine from there." },
  { title: "Shape it with references", text: "Photos and frames steer the result more than words alone." },
  { title: "Keep the final say", text: "Every result is yours to review, keep or discard." },
];

export const faq = [
  { q: "What is the app?", a: "An AI generator for images and short videos, made from a prompt, a reference or a starting frame." },
  { q: "Where do I start?", a: "Open the app, write a prompt or pick a preset, then tap Generate." },
  { q: "Do I need technical knowledge?", a: "No. Everything is set up with prompts, presets and simple controls." },
  { q: "Do I need an account?", a: "PLACEHOLDER — confirm whether an account is required." },
  { q: "How do I cancel a subscription?", a: "Subscriptions are managed through your Apple ID: open Settings on your iPhone, tap your name, then Subscriptions, and choose the app." },
  { q: "How do I restore a purchase?", a: "PLACEHOLDER — describe the restore path inside the app." },
];

export const specs: [string, string][] = [
  ["Category", PLACEHOLDER],
  ["Compatibility", `iPhone, iOS ${PLACEHOLDER} or later`],
  ["Languages", PLACEHOLDER],
  ["Developer", PLACEHOLDER],
  ["Age rating", PLACEHOLDER],
];
