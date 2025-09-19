import React, { useContext } from 'react'
import { ThemeContext } from '../assets/context/ThemeToggleContext';

function About() {
    const { theme, toggleTheme } = useContext(ThemeContext); // ✅ Use context
  return (
     <div className={`${theme === "light"
        ? "bg-white   text-black"
        : "bg-[#0C0C0C]  text-white"
    }`}>
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-yellow-300">Us</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed">
              Welcome to <span className="font-semibold">ShopSphere</span>, your trusted online destination 
              for high-quality products at unbeatable prices. Our mission is to deliver 
              convenience, trust, and excellence in every purchase you make.
            </p>
          </div>
          <div className="flex-1 mt-8 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0"
              alt="Team working"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className={`max-w-6xl mx-auto px-6 py-16 grid border-b-6 gap-10 md:grid-cols-3 ${theme === "light"
 ? "border-black"
      : "border-white"
    } `}>
        <div className={` rounded-2xl shadow-md p-8 hover:shadow-lg transition ${theme === "light"
 ? "bg-gray-100 text-black"
      : "bg-[#181818] text-white"
    }`}>
          <h2 className="text-2xl font-semibold mb-3 text-indigo-600">Our Mission</h2>
          <p>
            To empower customers by providing premium quality products, 
            fast delivery, and exceptional customer service — all at fair prices.
          </p>
        </div>
        <div className={` rounded-2xl shadow-md p-8 hover:shadow-lg transition ${theme === "light"
 ? "bg-gray-100 text-black"
      : "bg-[#181818] text-white"
    }`}>
          <h2 className="text-2xl font-semibold mb-3 text-purple-600">Our Vision</h2>
          <p>
            To be the most customer-centric e-commerce platform, where people 
            can discover and buy everything they love with trust and ease.
          </p>
        </div>
        <div className={` rounded-2xl shadow-md p-8 hover:shadow-lg transition ${theme === "light"
 ? "bg-gray-100 text-black"
      : "bg-[#181818] text-white"
    }`}>
          <h2 className="text-2xl font-semibold mb-3 text-pink-600">Our Values</h2>
          <p>
            Integrity, innovation, and customer satisfaction guide everything 
            we do — ensuring that you always get the best experience with us.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className={` pc py-16 border-b-8 ${theme === "light"
        ? "bg-white border-black   text-black"
        : "bg-[#0C0C0C] border-gray-400  text-white"
    }`}>
        <div className={`w-[90%] md:w-[80%] sm:w-[90%] mx-auto p-3 rounded-3xl  flex flex-col md:flex-row items-center gap-12 ${theme === "light"
 ? "bg-gray-100 text-black"
      : "bg-[#181818] text-white"
    }`}>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df"
              alt="Our story"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="flex-1 justify-center px-4">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="leading-relaxed mb-4">
              ShopSphere was founded with a simple idea: online shopping should be 
              smooth, secure, and enjoyable. What started as a small store has now 
              grown into a trusted marketplace for thousands of customers worldwide.
            </p>
            <p className="leading-relaxed">
              Every day, we strive to innovate and improve — bringing you the latest 
              trends, best deals, and a seamless shopping experience.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-10">Meet Our Team</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              name: "Alex Johnson",
              role: "Founder & CEO",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Sofia Patel",
              role: "Head of Marketing",
              img: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "Liam Wong",
              role: "Tech Lead",
              img: "https://randomuser.me/api/portraits/men/67.jpg",
            },
          ].map((member, i) => (
            <div
              key={i}
              className={` rounded-2xl shadow-md p-6 hover:shadow-lg transition ${theme === "light"
 ? "bg-gray-100 text-black"
      : "bg-[#181818] text-white"
    }`}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-indigo-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">
            Join thousands of happy customers today!
          </h2>
          <p className="mb-6">
            Shop smarter, faster, and more securely with ShopSphere.
          </p>
          <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow hover:bg-yellow-500 transition">
            Start Shopping
          </button>
        </div>
      </section>
    </div>
  )
}

export default About