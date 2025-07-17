import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">StoreHub</h3>
            <p className="text-slate-400 text-sm">
              Your one-stop destination for quality products at unbeatable prices.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/deals" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                  Special Deals
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-slate-400 text-sm">
                <Mail className="h-4 w-4" />
                <span>support@storehub.com</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-400 text-sm">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-slate-400 text-sm">
                <MapPin className="h-4 w-4" />
                <span>123 Commerce St, City, State 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 StoreHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}