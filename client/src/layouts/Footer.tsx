import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import { Coffee, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="mt-20 bg-slate-950 text-gray-300">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-orange-500 p-3 rounded-2xl">
              <Coffee className="text-white" size={28} />
            </div>

            <div>
              <h2 className="text-3xl font-black text-white">
                BrewVerse
              </h2>

              <p className="text-sm text-orange-400">
                Crafted Coffee. Delivered Fresh.
              </p>
            </div>
          </div>

          <p className="leading-7">
            BrewVerse is your premium coffee ordering platform delivering
            handcrafted beverages, artisan bakery and fresh meals across the
            city.
          </p>

          <div className="mt-6 space-y-3">

            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-orange-400" />
            BrewVerse Flagship Café
Church Street
Bengaluru, Karnataka 560001
India
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} className="text-orange-400" />
              +91 6204177496
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} className="text-orange-400" />
              support@brewverse.in
            </div>

          </div>
        </div>

        {/* Explore */}
        <div>

          <h3 className="text-xl font-bold text-white mb-5">
            Explore
          </h3>

          <div className="space-y-3">

            <Link to="/" className="block hover:text-orange-400 transition">
              Home
            </Link>

            <Link to="/menu" className="block hover:text-orange-400 transition">
              Menu
            </Link>

            <Link to="/restaurants" className="block hover:text-orange-400 transition">
              Restaurants
            </Link>

            <Link to="/track-order" className="block hover:text-orange-400 transition">
              Track Order
            </Link>

          </div>

        </div>

        {/* Company */}

        <div>

          <h3 className="text-xl font-bold text-white mb-5">
            Company
          </h3>

          <div className="space-y-3">

            <a className="cursor-pointer hover:text-orange-400 transition">
              About Us
            </a>

            <a className="cursor-pointer hover:text-orange-400 transition">
              Careers
            </a>

            <a className="cursor-pointer hover:text-orange-400 transition">
              Privacy Policy
            </a>

            <a className="cursor-pointer hover:text-orange-400 transition">
              Terms & Conditions
            </a>

          </div>

        </div>

        {/* Newsletter */}

        <div>

          <h3 className="text-xl font-bold text-white mb-5">
            Join Our Newsletter
          </h3>

          <p className="mb-5">
            Get exclusive offers, new launches and exciting coffee updates.
          </p>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 outline-none focus:border-orange-500"
          />

          <button className="mt-4 w-full rounded-xl bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600 transition">
            Subscribe
          </button>

          <div className="flex gap-4 mt-8">

            <IconBrandInstagram
              className="cursor-pointer hover:text-orange-400"
            />

            <IconBrandFacebook
              className="cursor-pointer hover:text-orange-400"
            />

            <IconBrandLinkedin
              className="cursor-pointer hover:text-orange-400"
            />

            <IconBrandX
              className="cursor-pointer hover:text-orange-400"
            />

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm">
            © 2026 BrewVerse. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">

            <a className="hover:text-orange-400 cursor-pointer">
              Privacy
            </a>

            <a className="hover:text-orange-400 cursor-pointer">
              Terms
            </a>

            <a className="hover:text-orange-400 cursor-pointer">
              Support
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;