import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-card border-t border-border mt-16">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🫙</span>
            <span className="font-display text-lg font-bold">HomeMate Pickles</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Homemade with Love ❤️<br />
            Authentic pickles, snacks & home-cooked meals delivered to your doorstep.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">Products</Link>
            <Link to="/packages" className="text-sm text-muted-foreground hover:text-primary transition-colors">Party Packs</Link>
            <Link to="/cart" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cart</Link>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Contact Us</h4>
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-2">
              <Phone className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-sm">+91 98765 43210</p>
                <p className="text-sm">+91 91234 56789</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary shrink-0" />
              <p className="text-sm">hello@homematepickles.in</p>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary shrink-0" />
              <p className="text-sm">Mon–Sat: 9 AM – 8 PM</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">📍 Our Location</h4>
          <div className="flex items-start gap-2 mb-4">
            <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
            <p className="text-sm text-muted-foreground">
              HomeMate Pickles<br />
              Grand Trunk Road, Magunta Layout<br />
              Nellore, Andhra Pradesh 524003<br />
              India
            </p>
          </div>
          <div className="rounded-xl overflow-hidden border border-border">
            <iframe
              title="HomeMate Pickles Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61367.94583025057!2d79.94537174863279!3d14.442792399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4c8cca0e958771%3A0xd3036e27ebd8be04!2sNellore%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">© 2026 HomeMate Pickles. All rights reserved.</p>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <span>💳 Cash on Delivery</span>
          <span className="mx-2">•</span>
          <span>🚚 Free delivery above ₹500</span>
          <span className="mx-2">•</span>
          <span>🏠 100% Homemade</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
