'use client';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
    if (message.length > 500) return;
    setLoading(true);
    const data = new URLSearchParams(new FormData(form) as unknown as URLSearchParams);
    await fetch('https://readdy.ai/api/form/d716o5bk1jkj467r59s0', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: data.toString(),
    });
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-[#0d0514]">
      <Header />
      <main className="bg-gradient-to-b from-[#0d0514] via-[#110820] to-[#080410] pt-28 pb-20 px-4">
        {/* Hero */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#F0C4B7]/60 mb-3">Get In Touch</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Contact <span className="text-[#F0C4B7]">Us</span>
          </h1>
          <p className="text-white/50 text-base sm:text-lg max-w-xl mx-auto">
            Have a question, partnership idea, or just want to say hi? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info Cards */}
          <div className="flex flex-col gap-6">
            {[
              {
                icon: 'ri-mail-line',
                title: 'Email Us',
                desc: 'Drop us a message anytime.',
                value: 'info@nailranks.com',
              },
              {
                icon: 'ri-instagram-line',
                title: 'Instagram',
                desc: 'Follow us for updates & inspiration.',
                value: '@nailranks',
              },
              {
                icon: 'ri-tiktok-line',
                title: 'TikTok',
                desc: 'Watch our latest nail art content.',
                value: '@nailranks',
              },
              {
                icon: 'ri-time-line',
                title: 'Response Time',
                desc: 'We typically reply within 24–48 hours.',
                value: 'Mon – Fri, 9am – 6pm',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 bg-white/5 border border-[#F0C4B7]/15 rounded-2xl p-5 backdrop-blur-sm hover:border-[#F0C4B7]/35 transition-colors"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#F0C4B7]/10 border border-[#F0C4B7]/20 flex-shrink-0">
                  <i className={`${item.icon} text-[#F0C4B7] text-xl`}></i>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-0.5">{item.title}</p>
                  <p className="text-white/40 text-xs mb-1">{item.desc}</p>
                  <p className="text-[#F0C4B7] text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="bg-white/5 border border-[#F0C4B7]/15 rounded-3xl p-6 sm:p-8 backdrop-blur-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center gap-4">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#F0C4B7]/15 border border-[#F0C4B7]/30">
                  <i className="ri-check-line text-[#F0C4B7] text-3xl"></i>
                </div>
                <h3 className="text-white text-xl font-bold">Message Sent!</h3>
                <p className="text-white/50 text-sm max-w-xs">Thanks for reaching out. We'll get back to you within 24–48 hours.</p>
                <button
                  onClick={() => { setSubmitted(false); setCharCount(0); }}
                  className="mt-4 text-[#F0C4B7] text-sm underline underline-offset-4 cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-white text-xl font-bold mb-6">Send a Message</h2>
                <form data-readdy-form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-white/60 text-xs font-medium">First Name</label>
                      <input
                        type="text"
                        name="first_name"
                        required
                        placeholder="e.g. Sofia"
                        className="bg-white/5 border border-[#F0C4B7]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#F0C4B7]/50 transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-white/60 text-xs font-medium">Last Name</label>
                      <input
                        type="text"
                        name="last_name"
                        required
                        placeholder="e.g. Rossi"
                        className="bg-white/5 border border-[#F0C4B7]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#F0C4B7]/50 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-white/60 text-xs font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="bg-white/5 border border-[#F0C4B7]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#F0C4B7]/50 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-white/60 text-xs font-medium">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder="What's this about?"
                      className="bg-white/5 border border-[#F0C4B7]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#F0C4B7]/50 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-white/60 text-xs font-medium">Message</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      maxLength={500}
                      placeholder="Tell us anything..."
                      onChange={(e) => setCharCount(e.target.value.length)}
                      className="bg-white/5 border border-[#F0C4B7]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#F0C4B7]/50 transition-colors resize-none"
                    />
                    <p className={`text-xs text-right ${charCount > 480 ? 'text-[#F0C4B7]' : 'text-white/30'}`}>{charCount}/500</p>
                  </div>
                  <button
                    type="submit"
                    disabled={loading || charCount > 500}
                    className="whitespace-nowrap w-full bg-[#F0C4B7] text-[#1a0820] py-3 rounded-full font-semibold text-sm hover:bg-[#e8b5a6] transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
