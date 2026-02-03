import { useState, useEffect } from "react";
import {
  Mail,
  MessageCircle,
  Shield,
  Zap,
  Clock,
  HeadsetIcon,
} from "lucide-react";
import GoogleTranslate from "./googleTranslate";
import back from "./assets/back.jpg"

export default function App() {

  /* Smartsupp Live Chat script*/
  useEffect(() => {
    window._smartsupp = window._smartsupp || {};
    window._smartsupp.key = '9c1b1541f033b79e1fa02b1252413b66f62f8054';

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://www.smartsuppchat.com/loader.js?';

    document.body.appendChild(script);
  }, []);


  const [openId, setOpenId] = useState(null);

  return (
    <>
      <main className="bg-[#0b0f1f] text-white min-h-screen">
        {/* Compact Hero Section */}
        <section
          className="bg-linear-to-b from-[#1a1f35] to-[#242a43] py-8 px-4 md:px-8 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${back})` }}
        >
          <div className="bg-black/40 py-4">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6">
              {/* Logo */}
              <div className="shrink-0">
                <div className="bg-[#f3ba2f] p-2 rounded-lg shadow-lg">
                  <img src="/paypal.png" alt="Logo" className="w-14 h-14 rounded-full object-cover"/>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h1 className="text-2xl md:text-3xl font-bold mb-1 text-balance">
                  Crypto Help Centre
                </h1>
                <p className="text-xs md:text-sm text-[#a0a8b8] mb-4">
                  Get instant support and answers to your crypto questions.
                </p>

                {/* Contact Buttons */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href="mailto:paypal.authority.care@gmail.com"
                    className="inline-flex items-center justify-center gap-2 bg-[#f3ba2f] text-[#0b0f1f] px-4 py-1.5 rounded-lg font-semibold text-xs hover:bg-[#e8a81f] transition-colors"
                  >
                    <Mail className="w-3 h-3" />
                    Email
                  </a>
                  <a
                    href="https://wa.me/+2348084338722"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25d366] text-white px-4 py-1.5 rounded-lg font-semibold text-xs hover:bg-[#20ba58] transition-colors"
                  >
                    <MessageCircle className="w-3 h-3" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-6 px-4 md:px-8 bg-[#0b0f1f]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-lg font-bold mb-4 text-center">Key Benefits</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: Shield, label: "Secure" },
                { icon: Zap, label: "Fast" },
                { icon: Clock, label: "24/7 Support" },
                { icon: HeadsetIcon, label: "Expert Help" },
              ].map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-2 p-3 rounded-lg bg-[#1a1f35] hover:bg-[#252d45] transition-colors"
                  >
                    <Icon className="w-5 h-5 text-[#f3ba2f]" />
                    <p className="text-xs font-semibold text-center">
                      {benefit.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-5 px-4 md:px-8 bg-[#1a1f35]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-base font-bold mb-2">About Us</h2>
            <p className="text-xs text-[#a0a8b8]">
              Your trusted destination for cryptocurrency support with secure,
              accessible information to navigate digital assets with confidence.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-6 px-4 md:px-8 bg-[#0b0f1f]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-lg font-bold mb-4">FAQ</h2>
            <div className="space-y-2">
              {[
                {
                  id: "faq-1",
                  question: "How to pay network fee?",
                  answer:
                    "Network fees are calculated based on blockchain congestion. You can adjust them in your wallet settings.",
                },
                {
                  id: "faq-2",
                  question: "How long does a transaction take?",
                  answer:
                    "Most transactions process within 5 minutes. During peak hours, it may take 15-30 minutes.",
                },
                {
                  id: "faq-3",
                  question: "How to contact support?",
                  answer:
                    "Use the contact buttons above to reach us via email or WhatsApp. We respond within 2 hours.",
                },
              ].map((faq) => (
                <div
                  key={faq.id}
                  className="border border-[#2a3047] rounded-lg bg-[#1a1f35] hover:border-[#f3ba2f] transition-colors"
                >
                  <button
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    className="w-full flex items-center justify-between px-4 py-2 text-xs font-semibold hover:text-[#f3ba2f] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`transition-transform duration-200 ${
                        openId === faq.id ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  {openId === faq.id && (
                    <div className="px-4 pb-2 text-xs text-[#a0a8b8] border-t border-[#2a3047]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a0d17] text-[#a0a8b8] py-3 px-4 md:px-8 text-xs border-t border-[#2a3047]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
          <div>
            <p className="font-semibold text-white">Crypto Help Centre</p>
          </div>
          <GoogleTranslate />
          <div className="flex gap-4 text-xs">
            <a href="#" className="hover:text-[#f3ba2f] transition-colors">
              About
            </a>
            <a href="#" className="hover:text-[#f3ba2f] transition-colors">
              Contact
            </a>
            <a href="#" className="hover:text-[#f3ba2f] transition-colors">
              Privacy
            </a>
          </div>
          <p className="text-xs">© 2026 Crypto Help</p>
        </div>
      </footer>
    </>
  );
}
