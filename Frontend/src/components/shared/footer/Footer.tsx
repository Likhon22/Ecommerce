import { assets } from "@/assets/frontend_assets/assets";
import Container from "@/components/shared/layout/container/Container";
import EButton from "@/components/ui/EButton";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-border pt-12 pb-6">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Information */}
          <div className="space-y-4">
            <Link to="/" className="block mb-6">
              <h2 className="text-3xl font-bold font-playfair text-white tracking-wider">
                EasyWear
              </h2>
            </Link>
            <p className="text-sm text-white">
              Your destination for comfortable, affordable, and stylish
              clothing. We believe in quality products that don't compromise on
              style or ethics.
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href="#"
                className="text-white hover:text-white/80 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-white/80 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-white/80 transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-white/80 transition-colors"
                aria-label="Pinterest"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl font-medium text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-secondary hover:text-white btn-hover-effect"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-secondary hover:text-white btn-hover-effect"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/collection"
                  className="text-secondary hover:text-white btn-hover-effect"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-secondary hover:text-white btn-hover-effect"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary hover:text-white btn-hover-effect"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary hover:text-white btn-hover-effect"
                >
                  Size Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Shopping Categories */}
          <div>
            <h3 className="font-playfair text-xl font-medium text-white mb-4">
              Categories
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-secondary hover:text-white btn-hover-effect"
                >
                  Men
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary hover:text-white btn-hover-effect"
                >
                  Women
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary hover:text-white btn-hover-effect"
                >
                  Kids
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary hover:text-white btn-hover-effect"
                >
                  Topwear
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary hover:text-white btn-hover-effect"
                >
                  Bottomwear
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-secondary hover:text-white btn-hover-effect"
                >
                  Winterwear
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-playfair text-xl font-medium text-white mb-4">
              Newsletter
            </h3>
            <p className="text-secondary text-sm mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2.5 text-sm border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 bg-background"
                required
              />
              <EButton className="bg-secondary text-white px-4 py-2.5">
                Subscribe
              </EButton>
            </form>
          </div>
        </div>

        {/* Payment Methods & Bottom Info */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-secondary mb-4 md:mb-0">
              © {currentYear} EasyWear. All rights reserved.
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="text-sm text-secondary">
                <a href="#" className="hover:text-white btn-hover-effect mr-4">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white btn-hover-effect mr-4">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white btn-hover-effect">
                  Shipping Info
                </a>
              </div>

              <div className="flex items-center gap-2 mt-4 md:mt-0">
                <img
                  src={assets.razorpay_logo}
                  alt="Razorpay"
                  className="h-6 w-auto"
                />
                <img
                  src={assets.stripe_logo}
                  alt="Stripe"
                  className="h-6 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
