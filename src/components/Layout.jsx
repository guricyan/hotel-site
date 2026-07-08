import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { siteConfig } from "../data/siteContent";

export default function Layout() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 48);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <Link className="brand" to="/" aria-label="返回安处首页">
          <strong>{siteConfig.brandName}</strong>
          <span>{siteConfig.brandEnglish}</span>
        </Link>
        <button
          className="menu-button"
          type="button"
          aria-label="打开导航"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
        <nav className={open ? "site-nav is-open" : "site-nav"}>
          <Link to="/">安处</Link>
          <a href="/#stays">居所</a>
          <a href="/#itoman">冲绳南部</a>
          <a href="/#booking">官网预订</a>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="site-footer">
        <div>
          <strong>{siteConfig.brandName}</strong>
          <span className="footer-brand-english">{siteConfig.brandEnglish}</span>
          <p>{siteConfig.taglineChinese}</p>
          <p className="footer-tagline-ja">{siteConfig.taglineJapanese}</p>
          <p className="footer-tagline-en">{siteConfig.taglineEnglish}</p>
        </div>
        <div className="footer-contact">
          <span>{siteConfig.contact.email}</span>
          <span>WeChat：{siteConfig.contact.wechat}</span>
        </div>
        <p className="footer-note">© {new Date().getFullYear()} {siteConfig.brandEnglish}</p>
      </footer>
    </div>
  );
}
