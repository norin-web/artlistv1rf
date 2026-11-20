// Every fact about the operator, the app and the copy lives in this file.
// Values marked PLACEHOLDER are not confirmed yet — replace them before launch.

export const PLACEHOLDER = "PLACEHOLDER";

export const site = {
  brand: "Artlist",
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

// Header and footer links. Anchors point at blocks on the home page.
export const nav = [
  { to: "/#platform", label: "Platform" },
  { to: "/#start", label: "Start" },
  { to: "/#pricing", label: "Pricing" },
  { to: "/#prompts", label: "Prompts" },
  { to: "/#faq", label: "FAQ" },
];

export const pages = [
  { to: "/app", label: "The App" },
  { to: "/about", label: "About" },
  { to: "/support", label: "Support" },
  { to: "/contact", label: "Contact" },
];

// Hero
export const hero = {
  eyebrow: "AI video and image generator for iPhone",
  lead: "Create images and short videos from a prompt, a reference photo or a starting frame, and bring your own pictures to life.",
};

// 01 / Platform
export const platform = {
  title: "Great ideas feel effortless. Artlist turns a sentence into a clip, a reference into a style and a photo into motion.",
  points: [
    { title: "Prompt", text: "Describe the scene in plain words." },
    { title: "Reference", text: "Add a photo to steer the look and the motion." },
    { title: "Frame", text: "Set a start frame and an end frame for the clip." },
  ],
};

// 02 / A better way to work
export const betterWay = {
  title: "Less blank page. Less tool-hopping. More clips you keep.",
  rows: [
    { title: "Blank page", text: "Start from one sentence, or pick a preset." },
    { title: "Tool-hopping", text: "Images and videos in one app, on your iPhone." },
    { title: "Guessing at styles", text: "Browse the style library and apply a look to any prompt." },
    { title: "Slow iterations", text: "Adjust the prompt and generate again in seconds of your attention." },
  ],
};

// 03 / Your stack, in sync
export const stack = {
  title: "One prompt. Every reference you have.",
  lead: "Photos, frames and styles work together, so the result matches what you pictured.",
  chat: [
    { who: "you", text: "Turn this photo into a short clip, cinematic, golden hour." },
    { who: "app", text: "Reference added · Style: Cinematic · Ready to generate" },
  ],
};

// 04 / Meet the creative modes
export const modes = [
  {
    label: "Video",
    title: "AI Video Generator",
    text: "Turn a written idea into a short clip.",
    field: "Prompt",
    value: "Cinematic sunset timelapse over mountain peaks, golden hour, drone shot",
  },
  {
    label: "Motion",
    title: "Image to Video",
    text: "Start from one of your pictures and bring it into motion.",
    field: "Start frame",
    value: "Your photo, added as the first frame",
  },
  {
    label: "Dance",
    title: "AI Dance",
    text: "Put a person from a photo into a short dance clip.",
    field: "Reference",
    value: "A photo of a person, ready for motion",
  },
  {
    label: "Studio",
    title: "Generative Media Studio",
    text: "Make images and videos in one place, with the settings you need.",
    field: "Model",
    value: "Flux Pro · 1024 × 1024",
  },
];

// 05 / Small starts. Big possibilities.
export const flows = [
  { title: "Text to Video", text: "Describe a scene and generate the motion from words alone." },
  { title: "Image to Video", text: "Start from a picture and bring it into motion." },
  { title: "AI Dance", text: "Turn a photo into a short dance clip." },
  { title: "Bring Memories Back to Life", text: "Animate an old photo into a short moving scene." },
  { title: "Explore Creative Styles", text: "Browse the style library and apply a look to any prompt." },
  { title: "Start and End Frames", text: "Set how a clip begins and how it ends." },
];

// 06 / Room to grow — prices come from the App Store listing, nothing is invented here.
export const plans = [
  { name: "PLACEHOLDER", price: PLACEHOLDER, text: "PLACEHOLDER — what this plan includes." },
  { name: "PLACEHOLDER", price: PLACEHOLDER, text: "PLACEHOLDER — what this plan includes." },
  { name: "PLACEHOLDER", price: PLACEHOLDER, text: "PLACEHOLDER — what this plan includes." },
];

// 07 / Prompts in motion — one real example from the app's preview screen.
export const showcase = {
  title: "From prompt to preview, on one screen.",
  prompt: "Cinematic sunset timelapse over mountain peaks, golden hour, drone shot, 4K",
  settings: [
    ["Model", "Flux Pro"],
    ["Resolution", "1024 × 1024"],
    ["Style", "Cinematic"],
    ["Aspect ratio", "1:1"],
  ] as [string, string][],
};

// Features: the app's own feature names, as on the App Store listing and in-app screens.
export const features = [
  { title: "AI Video Generator", text: "Turn a written idea into a short clip, from a prompt alone." },
  { title: "Text to Video", text: "Describe a scene, choose a look and generate the motion." },
  { title: "Image to Video", text: "Start from one of your pictures and bring it into motion." },
  { title: "AI Dance", text: "Put a person from a photo into a short dance clip." },
  { title: "Generative Media Studio", text: "Make images and videos in one place, with the settings you need." },
  { title: "Bring Memories Back to Life", text: "Animate an old photo into a short moving scene." },
];

// Scene screens for the App page and the steps.
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

// FAQ grouped by the tabs on the home page. `group` must match one of faqGroups.
export const faqGroups = ["General", "Creating", "Privacy & control"];

export const faq: { group: string; q: string; a: string }[] = [
  { group: "General", q: "What is the app?", a: "An AI generator for images and short videos, made from a prompt, a reference or a starting frame." },
  { group: "General", q: "Where do I start?", a: "Open the app, write a prompt or pick a preset, then tap Generate." },
  { group: "General", q: "Do I need technical knowledge?", a: "No. Everything is set up with prompts, presets and simple controls." },
  { group: "Creating", q: "How do I add a reference?", a: "Attach a photo as a reference, a start frame or an end frame before you generate." },
  { group: "Creating", q: "Do I need an account?", a: "PLACEHOLDER — confirm whether an account is required." },
  { group: "Privacy & control", q: "How do I cancel a subscription?", a: "Subscriptions are managed through your Apple ID: open Settings on your iPhone, tap your name, then Subscriptions, and choose the app." },
  { group: "Privacy & control", q: "How do I restore a purchase?", a: "PLACEHOLDER — describe the restore path inside the app." },
];

// Closing block
export const closing = {
  title: "Less waiting. More creating.",
  lead: "Your next clip. Already in motion.",
};

export const specs: [string, string][] = [
  ["Category", PLACEHOLDER],
  ["Compatibility", `iPhone, iOS ${PLACEHOLDER} or later`],
  ["Languages", PLACEHOLDER],
  ["Developer", PLACEHOLDER],
  ["Age rating", PLACEHOLDER],
];
