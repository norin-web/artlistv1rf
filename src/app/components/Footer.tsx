import { Link } from "react-router";
import { app, nav, pages, site } from "../content/site";
import { img } from "../utils/img";

/** Footer: link columns, mail contact, and the brand set large at the bottom. */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__cols">
            <div>
              <span className="eyebrow">Page</span>
              <ul>
                {nav.map((n) => (
                  <li key={n.to}><Link to={n.to}>{n.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <span className="eyebrow">Help</span>
              <ul>
                {pages.map((p) => (
                  <li key={p.to}><Link to={p.to}>{p.label}</Link></li>
                ))}
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Use</Link></li>
              </ul>
            </div>
            <div>
              <span className="eyebrow">Get the app</span>
              <ul>
                <li><a href={app.url} target="_blank" rel="noopener noreferrer">App Store</a></li>
                <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              </ul>
            </div>
          </div>
          <p className="footer__note muted small">{site.disclaimer}</p>
        </div>

        <div className="footer__mark" aria-hidden="true">
          <img src={img("/images/app-icon.png")} alt="" width={72} height={72} loading="lazy" />
          <span>{site.brand}</span>
        </div>

        <div className="footer__copy">
          <span>© {site.year} {site.operator}. All rights reserved.</span>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Back to top ↑</button>
        </div>
      </div>
    </footer>
  );
}
