// Every fact about the operator, the app and the copy lives in this file.
// Values marked PLACEHOLDER are not confirmed yet — replace them before launch.

export const PLACEHOLDER = "PLACEHOLDER";

export const site = {
  brand: "Artlist",
  email: "ward@ridder.world",
  operator: "Ward Ridder",
  disclaimer: "The Artlist name and related trademarks belong to Artlist Ltd. and are used under a signed commercial authorization.",
  about: "Artlist is developed and operated by Ward Ridder in Stockholm, Sweden, under a commercial authorization from Artlist Ltd.",
  year: 2026,
};

export const app = {
  id: "6790780440",
  url: "https://apps.apple.com/app/id6790780440",
  minIOS: PLACEHOLDER,
  category: PLACEHOLDER,
  languages: PLACEHOLDER,
  ageRating: PLACEHOLDER,
};

// Header and footer links. Anchors point at blocks on the home page.
export const nav = [
  { to: "/#start", label: "Features" },
  { to: "/#prompts", label: "Prompts" },
  { to: "/#blog", label: "Blog" },
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
  lead: "Create images and short videos from a prompt, a reference photo or a starting frame.",
};

// Ways to start
export const platform = {
  title: "Start from a prompt, a photo or a frame.",
  points: [
    { title: "Prompt", text: "Describe the scene in plain words." },
    { title: "Reference", text: "Add a photo to steer the look and the motion." },
    { title: "Frame", text: "Set a start frame and an end frame for the clip." },
  ],
};

// One real example from the app's preview screen.
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
  { title: "Start and End Frames", text: "Set how a clip begins and how it ends." },
  { title: "Style library", text: "Browse styles and apply a look to any prompt." },
];

// FAQ grouped by the tabs on the home page. `group` must match one of faqGroups.
export const faqGroups = ["General", "Creating", "Privacy & control"];

export const faq: { group: string; q: string; a: string }[] = [
  { group: "General", q: "What is the app?", a: "An AI generator for images and short videos, made from a prompt, a reference or a starting frame." },
  { group: "General", q: "Where do I start?", a: "Open the app, write a prompt or pick a preset, then tap Generate." },
  { group: "General", q: "Do I need technical knowledge?", a: "No. Everything is set up with prompts, presets and simple controls." },
  { group: "Creating", q: "How do I add a reference?", a: "Attach a photo as a reference, a start frame or an end frame before you generate." },
  { group: "Creating", q: "Do I need an account?", a: "No. The app does not require you to create an account or log in." },
  { group: "Privacy & control", q: "How do I cancel a subscription?", a: "Subscriptions are managed through your Apple ID: open Settings on your iPhone, tap your name, then Subscriptions, and choose the app." },
  { group: "Privacy & control", q: "How do I restore a purchase?", a: "Purchases go through the App Store, and the app checks purchase status to restore access. If something does not come back, write to the support email." },
  { group: "Privacy & control", q: "Are my photos uploaded?", a: "Only photos you choose are used, and only for the feature you picked. They may be sent to an AI provider to create the result. The app does not upload your whole photo library." },
  { group: "Privacy & control", q: "Where are my creations saved?", a: "Generated images and videos are stored on your device. There is no account gallery in the cloud." },
];

// From the blog: plain links to artlist.io, no article text is copied.
export const blogIndex = "https://artlist.io/blog/";
export const blog = [
  { rubric: "AI Tools", title: "Image Generator", href: "https://artlist.io/blog/image-generator/" },
  { rubric: "AI Tools", title: "Video Generator", href: "https://artlist.io/blog/video-generator/" },
  { rubric: "AI Models", title: "Nano Banana", href: "https://artlist.io/blog/nano-banana/" },
  { rubric: "AI Models", title: "Kling", href: "https://artlist.io/blog/kling/" },
  { rubric: "AI Models", title: "Veo", href: "https://artlist.io/blog/veo/" },
  { rubric: "Learn", title: "Trends and Inspiration", href: "https://artlist.io/blog/trends-and-insights/" },
];

// Closing block
export const closing = {
  title: "Get Artlist on your iPhone.",
};

export const specs: [string, string][] = [
  ["Category", PLACEHOLDER],
  ["Compatibility", `iPhone, iOS ${PLACEHOLDER} or later`],
  ["Languages", PLACEHOLDER],
  ["Developer", site.operator],
  ["Age rating", PLACEHOLDER],
];
