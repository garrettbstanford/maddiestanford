import { Instagram, Mail } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="text-sm font-medium uppercase tracking-widest text-stone-900">
          Maddie Stanford <span className="mx-2 text-pomegranate">|</span> Studio
        </div>

        <div className="flex space-x-6 text-stone-500">
          <a href="#" aria-label="Instagram" className="transition-colors hover:text-pomegranate">
            <Instagram size={20} />
          </a>
          <a href="mailto:hello@maddiestanford.com" aria-label="Email" className="transition-colors hover:text-pomegranate">
            <Mail size={20} />
          </a>
        </div>

        <div className="text-xs tracking-wider text-stone-400">© {new Date().getFullYear()} All Rights Reserved.</div>
      </div>
    </footer>
  );
}
