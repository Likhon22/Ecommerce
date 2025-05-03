const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl text-primary font-playfair mb-4">
          Contact Us
        </h1>
        <p className="text-xl text-secondary">We'd love to hear from you</p>
      </header>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <section>
          <h2 className="text-2xl md:text-3xl font-playfair text-primary border-b border-muted pb-2 mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your last name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2"
              >
                Subject
              </label>
              <select
                id="subject"
                className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">Select a topic</option>
                <option value="order">Order Inquiry</option>
                <option value="return">Return or Exchange</option>
                <option value="product">Product Information</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-playfair text-primary border-b border-muted pb-2 mb-6">
            Reach Us
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-lg mb-2">Customer Support</h3>
              <p className="mb-1">
                Email:{" "}
                <a
                  href="mailto:support@easywear.com"
                  className="btn-hover-effect"
                >
                  support@easywear.com
                </a>
              </p>
              <p className="mb-1">
                Phone:{" "}
                <a href="tel:1-800-EASY-WEAR" className="btn-hover-effect">
                  1-800-EASY-WEAR
                </a>
              </p>
              <p className="text-muted-foreground text-sm">
                Monday-Friday: 9am - 6pm EST
              </p>
              <p className="text-muted-foreground text-sm">
                Saturday: 10am - 4pm EST
              </p>
            </div>

            <div>
              <h3 className="font-playfair text-lg mb-2">Headquarters</h3>
              <address className="not-italic">
                123 Fashion Avenue
                <br />
                Suite 500
                <br />
                New York, NY 10001
                <br />
                United States
              </address>
            </div>

            <div>
              <h3 className="font-playfair text-lg mb-2">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-primary hover:text-primary/80">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
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
                <a href="#" className="text-primary hover:text-primary/80">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
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
                <a href="#" className="text-primary hover:text-primary/80">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 p-4 bg-muted rounded-lg">
            <h3 className="font-playfair text-lg mb-4">Store Locations</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">New York Flagship</h4>
                <p className="text-sm">555 Fifth Avenue, New York, NY</p>
                <p className="text-sm text-muted-foreground">
                  Mon-Sat: 10am-8pm, Sun: 11am-6pm
                </p>
              </div>
              <div>
                <h4 className="font-medium">Los Angeles</h4>
                <p className="text-sm">8500 Beverly Blvd, Los Angeles, CA</p>
                <p className="text-sm text-muted-foreground">
                  Mon-Sat: 10am-9pm, Sun: 11am-7pm
                </p>
              </div>
              <div>
                <h4 className="font-medium">Chicago</h4>
                <p className="text-sm">900 N Michigan Ave, Chicago, IL</p>
                <p className="text-sm text-muted-foreground">
                  Mon-Sat: 10am-7pm, Sun: 12pm-6pm
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-playfair text-primary border-b border-muted pb-2 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-lg mb-2">
              What is your return policy?
            </h3>
            <p>
              We offer a 30-day return policy on all unworn items in their
              original condition with tags attached. Returns are free for
              members of our EasyWear+ program, and a small fee applies for
              standard customers.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-2">
              How long does shipping take?
            </h3>
            <p>
              Standard shipping typically takes 3-5 business days. Express
              shipping is available for 1-2 business day delivery. International
              shipping varies by location but generally takes 7-14 business
              days.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-2">
              Do you offer size exchanges?
            </h3>
            <p>
              Yes, we offer free size exchanges on all items. Simply contact our
              customer service team to initiate an exchange, and we'll help you
              find the perfect fit.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-2">
              Are gift cards available?
            </h3>
            <p>
              Yes, digital gift cards are available for purchase on our website.
              Physical gift cards are available in our retail locations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
