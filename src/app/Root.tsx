import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Btn from "./components/Btn";
import { app, site } from "./content/site";
import { useGlowFollow } from "./utils/motion";

const titles: Record<string, string> = {
  "/app": "The App",
  "/about": "About",
  "/support": "Support",
  "/contact": "Contact",
  "/feedback": "Feedback",
  "/terms": "Terms of Use",
  "/privacy": "Privacy Policy",
};

export default function Root() {
  const { pathname, hash } = useLocation();
  useGlowFollow();

  useEffect(() => {
    // Anchor links (/#platform) scroll to their block; any other route starts at the top.
    const target = hash ? document.getElementById(hash.slice(1)) : null;
    if (target) target.scrollIntoView({ block: "start", behavior: "instant" as ScrollBehavior });
    else window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    const t = titles[pathname.replace(/\/$/, "")];
    // brand first, so a narrow browser tab still shows the app name
    document.title = t ? `${site.brand} — ${t}` : `${site.brand} — AI video and image generator for iPhone`;
  }, [pathname, hash]);

  return (
    <>
      <a href="#main" className="skip">Skip to content</a>
      <Header />
      <main id="main" className="page" key={pathname}>
        <Outlet />
      </main>
      <Footer />
      <Btn href={app.url} variant="white" size="sm" className="float-cta">
        <span>Download</span>
      </Btn>
    </>
  );
}
