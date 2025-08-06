import React from 'react';
import Title from '../components/Title';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="text-center text-2xl pt-10 border-t">
        <Title t1={'ABOUT'} t2={"US"} />
      </div>

      {/* Our Story */}
      <section className="w-xl mx-auto px-4 py-12">
        <h2 className="text-xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-600 leading-relaxed">
          Founded in 2020, <span className="font-semibold">Commerce Shopping</span> started with a simple mission: to make shopping effortless and enjoyable.
          We curate the best products, ensuring quality, style, and affordability for everyone.
          Every product in our store is handpicked by our passionate team of experts.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 py-12">
        <div className="w-xl mx-auto px-4 grid md:grid-cols-2 gap-28 items-center">
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              We’re committed to providing top-notch customer service, fast shipping, and a seamless online shopping experience.
              Our goal is to build a community where style meets convenience, and every customer feels valued.
            </p>
          </div>
          <img src="./public/team.png" alt="Our Team" className="rounded-xl shadow-lg w-80" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-primary-600">
        <h4 className="text-3xl font-semibold mb-4">Join our journey today</h4>
        <p className="mb-6">Be part of our growing family and experience shopping like never before.</p>
        <Link to="/collection">
          <button className="bg-white text-primary-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">Shop Now</button>
        </Link>
      </section>
    </div>
  );
};

export default About;
