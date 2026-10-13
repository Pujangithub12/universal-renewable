import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-100">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* BRAND */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-2xl p-1.5">
                <Image
                  src="/logo.png"
                  alt="Universal Renewable logo"
                  width={406}
                  height={335}
                  className="h-11 w-auto object-contain"
                />
              </div>
              <span className="font-serif text-xl font-bold text-white">
                Universal <span className="text-brand-200 font-medium">Renewable</span>
              </span>
            </div>
            <p className="text-sm text-brand-100/90 leading-relaxed max-w-sm">
              Universal Renewable provides solar energy solutions, from planning
              and design to installation and support.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-brand-100/90 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Get in touch
            </h4>
            <ul className="space-y-4 text-sm text-brand-100/90">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-200 shrink-0 mt-0.5" />
                <span>Trade Tower, Thapathali, Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-200 shrink-0" />
                <span>universalrenewable24@gmail.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-200 shrink-0" />
                <span>+977-9842787091</span>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-14 pt-6 border-t border-brand-700 text-xs text-brand-200">
          © {new Date().getFullYear()} Universal Renewable. All rights reserved.
        </div>
      </div>
    </footer>
  );
}