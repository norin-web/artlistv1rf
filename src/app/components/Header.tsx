import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { app, nav, pages, site } from "../content/site";
import { img } from "../utils/img";
import Btn from "./Btn";

/** Floating pill, fixed at the top centre: logo, download, menu. Never hides. */
export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="pill">
        <div className="pill__bar">
          <Link to="/" className="logo" aria-label={`${site.brand} home`}>
            <img src={img("/images/app-icon.png")} alt="" width={28} height={28} />
            <span>{site.brand}</span>
          </Link>
          <Btn href={app.url} variant="white" size="sm" className="pill__cta">
            <span className="only-wide">Download</span>
            <span className="only-narrow">Get</span>
          </Btn>
          <button
            className={`burger${open ? " is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mmenu"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div id="mmenu" className={`mmenu${open ? " is-open" : ""}`} aria-hidden={!open}>
        <nav className="mmenu__col" aria-label="On this page">
          <span className="eyebrow">On this page</span>
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="mmenu__link" tabIndex={open ? 0 : -1}>
              {n.label}
            </Link>
          ))}
        </nav>
        <nav className="mmenu__col" aria-label="Pages">
          <span className="eyebrow">Pages</span>
          {pages.map((p) => (
            <Link key={p.to} to={p.to} className="mmenu__link" tabIndex={open ? 0 : -1}>
              {p.label}
            </Link>
          ))}
        </nav>
        <Btn href={app.url} variant="white">Download on the App Store</Btn>
      </div>
    </>
  );
}
