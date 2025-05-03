const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl text-primary font-playfair mb-4">
          About EasyWear
        </h1>
        <p className="text-xl text-secondary">
          Your destination for comfortable, affordable, and stylish clothing
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-playfair text-primary border-b border-muted pb-2 mb-6">
          Our Story
        </h2>
        <div className="space-y-4">
          <p>
            Founded in 2015, EasyWear began with a simple mission: to provide
            high-quality, comfortable clothing that's accessible to everyone.
            What started as a small online store has grown into a beloved brand
            known for its commitment to quality, sustainability, and customer
            satisfaction.
          </p>
          <p>
            Our journey began when our founder, Emily Chen, noticed a gap in the
            market for affordable clothing that didn't compromise on comfort or
            style. With an initial collection of just 20 items, EasyWear quickly
            gained popularity for its versatile designs and excellent customer
            experience.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-playfair text-primary border-b border-muted pb-2 mb-6">
          What We Offer
        </h2>
        <p className="mb-4">
          At EasyWear, we specialize in everyday essentials that combine
          comfort, durability, and contemporary style. Our collections include:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Casual wear for all seasons</li>
          <li>Professional attire that doesn't sacrifice comfort</li>
          <li>Activewear designed for movement and performance</li>
          <li>Accessories that complement our clothing lines</li>
          <li>Sustainable fashion options made from eco-friendly materials</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-playfair text-primary border-b border-muted pb-2 mb-6">
          Our Values
        </h2>
        <p className="mb-4">
          We believe that clothing should be made with care—for our customers,
          our workers, and our planet. That's why we're committed to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <span className="font-bold">Quality:</span> We use premium materials
            and rigorous quality control.
          </li>
          <li>
            <span className="font-bold">Sustainability:</span> We're reducing
            our environmental footprint with each collection.
          </li>
          <li>
            <span className="font-bold">Ethical Production:</span> We ensure
            fair wages and safe working conditions throughout our supply chain.
          </li>
          <li>
            <span className="font-bold">Inclusivity:</span> We design for
            diverse body types and personal styles.
          </li>
          <li>
            <span className="font-bold">Affordability:</span> We believe good
            clothing shouldn't break the bank.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-playfair text-primary border-b border-muted pb-2 mb-6">
          Our Team
        </h2>
        <p className="mb-6">
          The people behind EasyWear are passionate about fashion,
          sustainability, and customer satisfaction. Our diverse team brings
          together expertise from fashion design, sustainable manufacturing, and
          digital commerce.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Emily Chen", role: "Founder & Creative Director" },
            { name: "Marcus Johnson", role: "Head of Sustainable Production" },
            {
              name: "Sophia Rodriguez",
              role: "Chief Customer Experience Officer",
            },
            { name: "David Kim", role: "Lead Designer" },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-card text-card-foreground rounded-lg shadow-md p-6 text-center"
            >
              <h3 className="text-xl font-playfair mb-2">{member.name}</h3>
              <p className="text-secondary">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-playfair text-primary border-b border-muted pb-2 mb-6">
          Visit Us
        </h2>
        <p className="mb-4">
          While we primarily operate online, we have showrooms in select cities
          where you can experience our clothing in person and meet with our
          style consultants.
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div>
            <p className="font-bold mb-2">Headquarters:</p>
            <address className="not-italic">
              123 Fashion Avenue
              <br />
              Suite 500
              <br />
              New York, NY 10001
            </address>
          </div>
          <div>
            <p className="font-bold mb-2">Contact:</p>
            <p>
              Email:{" "}
              <a href="mailto:info@easywear.com" className="btn-hover-effect">
                info@easywear.com
              </a>
            </p>
            <p>
              Customer Service:{" "}
              <a href="tel:1-800-EASY-WEAR" className="btn-hover-effect">
                1-800-EASY-WEAR
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
