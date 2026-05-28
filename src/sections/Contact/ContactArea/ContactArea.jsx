"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ContactPage() {
  const searchParams = useSearchParams();
  const subjectFromUrl = searchParams.get("subject") || "";

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    phone: "",
    city: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    if (subjectFromUrl) {
      setFormData((prev) => ({
        ...prev,
        subject: subjectFromUrl,
      }));
    }
  }, [subjectFromUrl]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully!");
  };

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-350 mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#347A64] mb-4">
            Contact Us
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* LEFT INFO */}
          <div className="space-y-8 xl:pt-[150px]">
            <div className="font-bold text-xl md:text-2xl lg:text-4xl text-[#347A63]">
              Rebar-X Composites Industries
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#347A64] text-white flex items-center justify-center">
                <MapPin />
              </div>
              <p className="text-gray-600 w-100">
                Behind Hotel Fern, 8 /A National Highway, Kandla Road,
                Mahendrnagar, Morbi - 363641, Gujarat, India.
              </p>
            </div>

            <div className="flex gap-3">
              <div className="w-12 h-12 rounded-full bg-[#347A64] text-white flex items-center justify-center">
                <Phone />
              </div>
              <p className="text-gray-600 mt-2">+91 92748 31310</p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-full bg-[#347A64] text-white flex items-center justify-center">
                <Mail />
              </div>
              <p className="text-gray-600 mt-2">info@fiberonrebar.com</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-md space-y-3"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="">
                <label className="text-gray-700 font-medium">First Name</label>
                <input
                  type="text"
                  name="fname"
                  placeholder="First Name"
                  value={formData.fname}
                  onChange={handleChange}
                  className="border border-[#347A64] w-full rounded-lg px-4 py-3"
                  required
                />
              </div>

              <div className="">
                <label className="text-gray-700 font-medium">Last Name</label>
                <input
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                  value={formData.lname}
                  onChange={handleChange}
                  className="border border-[#347A64] w-full rounded-lg px-4 py-3"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-1 gap-6">
              <div className="">
                <label className="text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-[#347A64] w-full rounded-lg px-4 py-3"
                  required
                />
              </div>

              <div className="">
                <label className="text-gray-700 font-medium">Phone</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border border-[#347A64] w-full rounded-lg px-4 py-3"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-1 gap-6">
              <div className="">
                <label className="text-gray-700 font-medium">City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className="border border-[#347A64] w-full rounded-lg px-4 py-3"
                  required
                />
              </div>

              {/* SUBJECT AUTO FILLED */}
              <div className="">
                <label className="text-gray-700 font-medium">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="border border-[#347A64] w-full rounded-lg px-4 py-3"
                />
              </div>
            </div>

            <div className="w-full">
              <label className="text-gray-700 font-medium">Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                className="border border-[#347A64] w-full rounded-lg px-4 py-3"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#347A64] text-white py-3 rounded-lg font-semibold hover:bg-[#2d6a58] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
