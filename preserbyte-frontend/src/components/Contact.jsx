
//----------------------------
import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("http://localhost:5000/contact", form);

      // show popup
      setShowPopup(true);

      // reset form
      setForm({ name: "", email: "", message: "" });

      // auto close popup after 3 sec
      setTimeout(() => setShowPopup(false), 3000);
    } catch (err) {
      console.error(err);
      alert("Error sending message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ✅ SUCCESS POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-[90%] max-w-md text-center animate-scale">
            <div className="text-green-500 text-5xl mb-3">✔</div>
            <h3 className="text-xl font-bold">Message Sent!</h3>
            <p className="text-gray-600 mt-2">
              Your message has been sent to our team successfully.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-5 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
            <p className="mt-3 text-gray-600">
              Talk to our experts for IP consultation.
            </p>
          </div>

          <form
            onSubmit={submit}
            className="bg-white p-6 rounded-xl shadow-xl space-y-4"
          >
            <input
              className="w-full p-3 border rounded"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <input
              className="w-full p-3 border rounded"
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <textarea
              className="w-full p-3 border rounded"
              rows="4"
              placeholder="Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-indigo-600 text-white w-full py-3 rounded-lg hover:bg-indigo-700"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
