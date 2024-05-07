import React from "react";
import interns from "../utils/Internship-Job.jpg";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              About Our Intern Program
            </h1>
            <p className="text-gray-600 mb-6">
              At our company, we believe in nurturing the next generation of
              talented professionals. Our intern program provides a unique
              opportunity for enthusiastic individuals to gain valuable
              hands-on experience, develop their skills, and explore their
              career paths.
            </p>
            <p className="text-gray-600 mb-6">
              Through our carefully curated internships, you'll have the chance
              to work alongside industry experts, collaborate on real-world
              projects, and gain insights into various aspects of our
              operations. We value diverse perspectives and encourage our interns
              to contribute their fresh ideas and innovative approaches.
            </p>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Get in Touch
              </h3>
              <div className="flex items-center mb-2">
                <FaEnvelope className="text-indigo-600 mr-2" />
                <span className="text-gray-600">Email:</span>
                <a
                  href="mailto:nayeem01mehedi@gmail.com"
                  className="text-indigo-600 hover:text-indigo-800 ml-2"
                >
                  nayeem01mehedi@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="text-indigo-600 mr-2" />
                <span className="text-gray-600">Phone:</span>
                <a
                  href="tel:01740147945"
                  className="text-indigo-600 hover:text-indigo-800 ml-2"
                >
                  01740147945
                </a>
              </div>
            </div>

            <Link
              to="/intern-find"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
            >
              Explore Internships
            </Link>
          </div>
          <div>
            <img
              src={interns}
              alt="Interns"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Our Mission
          </h2>
          <p className="text-gray-600 mb-4">
            Our mission is to provide a nurturing and collaborative environment
            where interns can thrive, learn from experienced professionals, and
            develop the skills necessary to succeed in their chosen careers. We
            believe in fostering a culture of continuous learning, creativity,
            and personal growth.
          </p>
          <p className="text-gray-600 mb-6">
            Through our intern program, we aim to bridge the gap between
            academic knowledge and real-world applications, equipping our
            interns with practical experience that will set them apart in the
            competitive job market.
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Diversity and Inclusion
              </h3>
              <p className="text-gray-600">
                We embrace diversity and foster an inclusive environment where
                interns from all backgrounds can thrive and contribute their
                unique perspectives.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Mentorship and Guidance
              </h3>
              <p className="text-gray-600">
                Our experienced professionals provide dedicated mentorship and
                guidance, ensuring that interns receive the support they need to
                grow and succeed.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Hands-on Learning
              </h3>
              <p className="text-gray-600">
                We believe in learning by doing. Our interns actively
                participate in real-world projects, applying their knowledge and
                developing practical skills.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Professional Development
              </h3>
              <p className="text-gray-600">
                We invest in the professional development of our interns,
                offering opportunities for personal growth, networking, and
                career exploration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;