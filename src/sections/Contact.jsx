import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    window.location.href = `mailto:shivakumar52616@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-800 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Let's Build
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h2>
        </div>

       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
  {/* LEFT INFO PANEL */}
  <div className="relative">
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-t-[2rem] rounded-l-[2rem] lg:rounded-l-[3rem] lg:rounded-r-none rounded-r-[2rem]"></div>
    <div className="relative p-6 sm:p-8 lg:p-12 text-white h-full flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                Ready to collaborate?
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-cyan-100 mb-8 sm:mb-12 leading-relaxed">
                I'm open to full-time opportunities and freelance projects. Feel free to reach out —
                I’d love to discuss how we can work together.
              </p>

              <div className="space-y-6 sm:space-y-8">
                {/* EMAIL */}
                <div className="flex items-start space-x-4">
  {/* Icon */}
  <div className="w-14 h-14 flex-shrink-0 bg-white/20 rounded-2xl flex items-center justify-center">
    <i className="ri-mail-line text-xl"></i>
  </div>

  {/* Text */}
  <div className="flex-1 min-w-0">
    <div className="font-semibold">Email</div>
    <a
      href="mailto:shivakumar52616@gmail.com"
      className="text-cyan-100 hover:text-white transition-colors break-words"
    >
      shivakumar52616@gmail.com
    </a>
  </div>
</div>


                {/* LINKEDIN */}
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                    <i className="ri-linkedin-line text-xl"></i>
                  </div>
                  <div>
                    <div className="font-semibold">LinkedIn</div>
                    <a
                      href="https://www.linkedin.com/in/your-linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-100 hover:text-white transition-colors"
                    >
                      /in/shiva-kumar-enduri
                    </a>
                  </div>
                </div>

                {/* GITHUB */}
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                    <i className="ri-github-line text-xl"></i>
                  </div>
                  <div>
                    <div className="font-semibold">GitHub</div>
                    <a
                      href="https://github.com/your-github"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-100 hover:text-white transition-colors"
                    >
                      /shivakumar-enduri
                    </a>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                    <i className="ri-phone-line text-xl"></i>
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <a
                      href="tel:+919912251451"
                      className="text-cyan-100 hover:text-white transition-colors"
                    >
                      +91 9912251451
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM PANEL */}
          <div className="relative">
    <div className="absolute inset-0 bg-white rounded-b-[2rem] lg:rounded-r-[3rem] lg:rounded-l-none rounded-l-[2rem] shadow-2xl"></div>
    <div className="relative p-6 sm:p-8 lg:p-12 h-full flex flex-col justify-center">
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-gray-50 border-2 border-gray-200 focus:border-cyan-400 text-gray-900 py-4 px-6 rounded-2xl outline-none"
                />

                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full bg-gray-50 border-2 border-gray-200 focus:border-cyan-400 text-gray-900 py-4 px-6 rounded-2xl outline-none"
                />

                <textarea
                  required
                  name="message"
                  rows="4"
                  maxLength="500"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message (max 500 characters)"
                  className="w-full bg-gray-50 border-2 border-gray-200 focus:border-cyan-400 text-gray-900 py-4 px-6 rounded-2xl outline-none resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-semibold py-4 rounded-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
