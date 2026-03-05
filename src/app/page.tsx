import { site } from '../lib/site';

const HomePage = () => {
  return (
    <main className="flex flex-col items-center justify-center p-4">
      <section className="hero bg-blue-500 text-white p-10 text-center">
        <h1 className="text-4xl font-bold">{site.tagline}</h1>
        <p className="mt-4">{site.description}</p>
        <a href="#contact" className="mt-6 inline-block bg-white text-blue-500 py-2 px-4 rounded">
          Get Started
        </a>
      </section>

      <section className="value-proposition my-10">
        <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
        <p>{site.valueProposition}</p>
      </section>

      <section className="services-overview my-10">
        <h2 className="text-3xl font-semibold">Our Services</h2>
        <ul className="list-disc pl-5">
          {site.services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </section>

      <section className="technology-stack my-10">
        <h2 className="text-3xl font-semibold">Technology Stack</h2>
        <p>{site.technologyStack}</p>
      </section>

      <section className="development-process my-10">
        <h2 className="text-3xl font-semibold">Our Development Process</h2>
        <p>{site.developmentProcess}</p>
      </section>

      <section className="case-studies my-10">
        <h2 className="text-3xl font-semibold">Featured Case Studies</h2>
        <ul className="list-disc pl-5">
          {site.caseStudies.map((caseStudy, index) => (
            <li key={index}>{caseStudy}</li>
          ))}
        </ul>
      </section>

      <section className="testimonials my-10">
        <h2 className="text-3xl font-semibold">What Our Clients Say</h2>
        <ul className="list-disc pl-5">
          {site.testimonials.map((testimonial, index) => (
            <li key={index}>"{testimonial}"</li>
          ))}
        </ul>
      </section>

      <section className="faqs my-10">
        <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
        <ul className="list-disc pl-5">
          {site.faqs.map((faq, index) => (
            <li key={index}>
              <strong>{faq.question}</strong>: {faq.answer}
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className="call-to-action my-10">
        <h2 className="text-3xl font-semibold">Ready to Get Started?</h2>
        <a href="#contact" className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded">
          Contact Us
        </a>
      </section>
    </main>
  );
};

export default HomePage;