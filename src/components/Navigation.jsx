import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { getCurrentRoutePath, withBasePath } from "../utils/routing";

const THEME_COLOR = "#8a2226";

function setThemeColor(color) {
  let themeColorMeta = document.querySelector('meta[name="theme-color"]');

  if (!themeColorMeta) {
    themeColorMeta = document.createElement("meta");
    themeColorMeta.setAttribute("name", "theme-color");
    document.head.appendChild(themeColorMeta);
  }

  themeColorMeta.setAttribute("content", color);
}

export default function Navigation({ navLinks }) {
  const navRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(() => {
    const pathname = getCurrentRoutePath();
    return pathname !== "/";
  });

  useEffect(() => {
    const onScroll = () => {
      const hasHomeSection = Boolean(document.querySelector("#home"));
      const nextSection = document.querySelector("#home + section");

      if (!hasHomeSection) {
        setIsScrolled(true);
        return;
      }

      if (!nextSection) {
        setIsScrolled(window.scrollY > 80);
        return;
      }

      const navHeight = navRef.current?.offsetHeight ?? 0;
      const nextSectionTop = nextSection.getBoundingClientRect().top + window.scrollY;
      setIsScrolled(window.scrollY + navHeight >= nextSectionTop);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    setThemeColor(THEME_COLOR);
  }, []);

  const navShellClass = isScrolled
    ? "border-b border-stone-200/60 bg-stone-50/85 backdrop-blur-md shadow-sm"
    : "border-b border-pomegranate/80 bg-pomegranate shadow-[0_10px_30px_rgba(138,34,38,0.22)]";

  const brandClass = isScrolled
    ? "text-stone-900 hover:text-pomegranate"
    : "text-stone-50 hover:text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]";

  const desktopLinkClass = isScrolled
    ? "text-stone-900 hover:text-pomegranate"
    : "text-stone-50 hover:text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]";

  const underlineClass = isScrolled ? "bg-pomegranate" : "bg-white";

  const dropdownPanelClass = "border-stone-200 bg-white";
  const dropdownTextClass = "text-stone-700";
  const dropdownItemClass = "hover:bg-stone-100 hover:text-pomegranate";

  const contactClass = isScrolled
    ? "text-pomegranate hover:opacity-70"
    : "text-stone-50 hover:opacity-80 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]";

  const mobileButtonClass = isScrolled ? "text-stone-900" : "text-white";

  const mobilePanelClass = isScrolled
    ? "border-stone-200 bg-white text-stone-900"
    : "border-white/20 bg-black/90 text-white backdrop-blur-md";

  const mobileChildClass = isScrolled
    ? "text-stone-600 hover:text-pomegranate"
    : "text-white/80 hover:text-white";

  const mobileContactClass = isScrolled ? "text-pomegranate" : "text-white";

  return (
    <nav ref={navRef} className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${navShellClass}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href={withBasePath("/")}
          className={`brand-signature text-4xl leading-none transition-colors duration-300 ${brandClass}`}
        >
          Maddie Stanford
        </a>

        <div className="hidden space-x-12 text-sm uppercase tracking-wide md:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="group relative">
                <a href={withBasePath(link.href)} className={`relative transition-colors duration-300 ${desktopLinkClass}`}>
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${underlineClass}`}
                  />
                </a>

                <div className="invisible pointer-events-none absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                  <div className={`w-56 rounded-sm border p-3 shadow-xl ${dropdownPanelClass}`}>
                    <div className={`flex flex-col gap-1 normal-case text-xs tracking-widest ${dropdownTextClass}`}>
                      {link.children.map((childLink) => (
                        <a
                          key={childLink.label}
                          href={withBasePath(childLink.href)}
                          className={`rounded px-3 py-2 transition-colors duration-300 ${dropdownItemClass}`}
                        >
                          {childLink.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={withBasePath(link.href)}
                className={`group relative transition-colors duration-300 ${desktopLinkClass}`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${underlineClass}`}
                />
              </a>
            )
          )}
        </div>

        <a
          href="mailto:madleestan@gmail.com"
          className={`hidden text-sm font-medium uppercase tracking-wider transition-opacity md:block ${contactClass}`}
        >
          Contact
        </a>

        <button
          type="button"
          className={`transition-colors duration-300 md:hidden ${mobileButtonClass}`}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className={`absolute left-0 top-full flex w-full flex-col space-y-6 border-b px-6 py-8 shadow-xl md:hidden ${mobilePanelClass}`}>
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="space-y-3">
                <a
                  href={withBasePath(link.href)}
                  className="block text-lg uppercase tracking-widest"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
                <div className="ml-4 flex flex-col space-y-3 border-l border-current/25 pl-4 normal-case">
                  {link.children.map((childLink) => (
                    <a
                      key={childLink.label}
                      href={withBasePath(childLink.href)}
                      className={`text-sm tracking-wider transition-colors duration-300 ${mobileChildClass}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {childLink.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={withBasePath(link.href)}
                className="text-lg uppercase tracking-widest"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="mailto:madleestan@gmail.com"
            className={`text-lg uppercase tracking-widest ${mobileContactClass}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
