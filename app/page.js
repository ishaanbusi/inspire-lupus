"use client";

import React from 'react';
import {
  Heart,
  Users,
  BookOpen,
  ChevronRight,
  Mail,
  ArrowRight,
  ExternalLink,
  ThumbsUp,
  MessageCircle,
  Share2,
  Eye,
} from 'lucide-react';

// ─── Brand Colors ─────────────────────────────────────────────────────────────
// Primary Deep:  #522E78
// Primary Vivid: #832DCE
// Derived tints used for UI
// ─────────────────────────────────────────────────────────────────────────────

// ── SVG Social Icons ──────────────────────────────────────────────────────────
const FacebookIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

const XIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
    fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.727-8.832L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// ── Fake Social Post Data ─────────────────────────────────────────────────────
const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=500&auto=format&fit=crop",
    caption: "World Lupus Day 2025 🦋 Standing together, raising our voices. #LupusAwareness #InspireLupusIndia",
    likes: "1.2K",
    comments: "84",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=500&auto=format&fit=crop",
    caption: "Your flare doesn't define you. You are so much more than your diagnosis. 💜 #LupusWarrior",
    likes: "987",
    comments: "61",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=500&auto=format&fit=crop",
    caption: "Community is medicine. Our October support circle brought together 200+ warriors 🤝",
    likes: "2.1K",
    comments: "130",
  },
];

const advisoryBoard = [
  { name: "Dr. Amita Aggarwal", title: "Executive Director", inst: "AIIMS Bibinagar", img: "/images/amita.jpeg" },
  { name: "Dr. Liza Rajasekhar", title: "Dean & Head of Dept.", inst: "NIMS, Hyderabad", img: "/images/liza.jpegg" },
  { name: "Dr. Vineeta Shobha", title: "Professor & Head of Dept.", inst: "St. John's, Bangalore", img: "/images/veneeta.jpeg" },
  { name: "Dr. Ranjan Gupta", title: "Associate Professor", inst: "AIIMS, New Delhi", img: "/images/ranjan.jpeg" },
  { name: "Dr. Anushka Prabhudesai", title: "Pediatric Rheumatologist", inst: "Mumbai", img: "/images/anushkaprabhudesai.jpeg" },
];

// ── X / Twitter Post Data ─────────────────────────────────────────────────────

const xPosts = [
  {
    id: 1,
    handle: "@InspireLupus",
    name: "Inspire Lupus India",
    text: "Many lupus patients wait 6+ years before getting the right diagnosis. This #WorldLupusDay, let's change that. Share the signs. Save a life. 🦋 #LupusAwareness #EarlyDiagnosis",
    date: "May 10, 2025",
    likes: "342",
    reposts: "189",
    replies: "47",
  },
  {
    id: 2,
    handle: "@InspireLupus",
    name: "Inspire Lupus India",
    text: "We just crossed 5,000 members in our support community! Thank you to every warrior, caregiver, and doctor who makes this space what it is. You are the movement. 💜",
    date: "Apr 28, 2025",
    likes: "612",
    reposts: "204",
    replies: "93",
  },
];

// ── Main Component ────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="font-sans bg-[#FAF9FE] text-[#1F2A44] overflow-x-hidden selection:bg-[#832DCE] selection:text-white">

      {/* ── 1. Hero ── */}
      <section className="relative pt-22 pb-24 px-6 overflow-hidden min-h-[90vh] flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop"
            alt="People holding hands in support"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9FE]/80 via-[#FAF9FE]/70 to-[#FAF9FE]" />
          {/* Decorative blobs */}
          <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-[#832DCE]/8 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-[#522E78]/6 blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
          {/* Logo + Brand Name */}
          <div className="flex flex-col items-center gap-3 mb-10">
            <img src="/logo.png" alt="Inspire Lupus India Logo" className="w-40 h-40 object-contain" />
            <span
              className="text-2xl font-extrabold tracking-tight"
              style={{ color: '#522E78', letterSpacing: '-0.01em' }}
            >
              Inspire{' '}
              <span style={{ color: '#832DCE' }}>Lupus</span>{' '}
              India
            </span>
          </div>

          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10" style={{ background: '#832DCE' }} />
            <span className="font-bold tracking-widest uppercase text-sm" style={{ color: '#832DCE' }}>
              Patient-Led Initiative
            </span>
            <span className="h-px w-10" style={{ background: '#832DCE' }} />
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-[#1F2A44] leading-[1.12] tracking-tight">
            Spreading Awareness,{' '}
            <br className="hidden md:block" />
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #832DCE 0%, #522E78 100%)' }}
            >
              Support, and Hope
            </span>
          </h1>

          <p className="mt-8 text-[#374151] text-xl md:text-2xl max-w-3xl font-medium leading-relaxed">
            Created for lupus patients, by lupus patients. Educating and inspiring India to live better with lupus.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
            <button
              className="group relative text-white font-semibold px-8 py-4 rounded-full overflow-hidden flex items-center gap-2 shadow-xl transition-all"
              style={{ background: '#522E78', boxShadow: '0 8px 32px rgba(82,46,120,0.28)' }}
            >
              <span className="relative z-10">Join the Community</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div
                className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"
                style={{ background: '#832DCE' }}
              />
            </button>
            <button
              className="font-semibold px-8 py-4 flex items-center gap-2 transition-colors"
              style={{ color: '#522E78' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#832DCE')}
              onMouseLeave={e => (e.currentTarget.style.color = '#522E78')}
            >
              Learn About Lupus <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* ── 2 & 3. About + What is Lupus ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-[4/5] rounded-[3rem] md:rounded-[6rem] rounded-tr-3xl rounded-bl-3xl overflow-hidden relative z-10 shadow-2xl"
                style={{ boxShadow: '0 32px 64px rgba(82,46,120,0.14)' }}>
                <img
                  src="/images/mudita-shrivastava.jpeg"
                  alt="Doctor speaking with a patient"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full blur-3xl z-0"
                style={{ background: 'rgba(131,45,206,0.15)' }} />
            </div>

            <div className="w-full md:w-1/2 space-y-14">
              <div>
                <h2 className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: '#832DCE' }}>Who We Are</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-[#1F2A44] leading-snug">
                  No one should walk this journey alone.
                </h3>
                <p className="mt-5 text-lg text-[#374151] leading-loose">
                  Inspire Lupus India is a community built on shared experiences. Our core mission is to emphasize the critical importance of early diagnosis and combine medical education with compassionate support.
                </p>
              </div>

              <div>
                <h2 className="text-sm font-bold tracking-widest uppercase mb-3" style={{ color: '#522E78' }}>Understanding the Condition</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-[#1F2A44] leading-snug">
                  What is Lupus?
                </h3>
                <p className="mt-5 text-lg text-[#374151] leading-loose">
                  A chronic autoimmune disease where the body's immune system becomes hyperactive, attacking healthy tissues. Because it is often misunderstood, awareness and proper medical treatment are vital to improving quality of life.
                </p>
                <button
                  className="mt-6 font-bold flex items-center gap-2 hover:gap-3 transition-all text-lg"
                  style={{ color: '#832DCE' }}
                >
                  Read the medical overview <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. What We Do ── */}
      <section
        className="py-24 px-6 text-white rounded-[2rem] md:rounded-[4rem] mx-4 md:mx-12 my-12 shadow-2xl"
        style={{ background: '#522E78' }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Our Initiatives</h2>
          </div>

          <div className="space-y-0">
            {[
              { Icon: Heart, color: '#C084F5', label: 'Awareness Campaigns', desc: 'Spreading vital information to encourage early diagnosis and better understanding across society.' },
              { Icon: Users, color: '#E9DDF8', label: 'Patient Stories', desc: 'Sharing real, unfiltered journeys of lupus warriors to inspire hope and build a resilient community.' },
              { Icon: BookOpen, color: '#832DCE', label: 'Expert Sessions', desc: 'Hosting webinars and open talks with medical professionals on treatments, diet, and lifestyle.' },
            ].map(({ Icon, color, label, desc }) => (
              <div key={label} className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 py-10 border-b border-white/10 last:border-b-0 group">
                <Icon size={56} strokeWidth={1.5} style={{ color, flexShrink: 0 }} />
                <div>
                  <h3 className="text-2xl font-bold mb-3 transition-colors" style={{ '--hover': color }}>{label}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Patient Stories ── */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#FAF9FE] to-white">
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-sm font-bold tracking-widest uppercase mb-12" style={{ color: '#832DCE' }}>
            Voices of Lupus Warriors
          </h2>
          <span className="text-[8rem] leading-none font-serif absolute -top-16 -left-4 md:-left-12 z-0 select-none"
            style={{ color: '#E9DDF8' }}>"</span>
          <p className="text-2xl md:text-4xl text-[#1F2A44] leading-relaxed font-semibold relative z-10 italic">
            Getting the diagnosis was terrifying, but finding a community that understood my daily, invisible struggles changed everything. I finally learned how to advocate for my own health.
          </p>
          <div className="mt-12 flex items-center justify-center gap-4">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg"
              style={{ background: 'linear-gradient(135deg, #832DCE, #522E78)' }}
            >A</div>
            <div className="text-left">
              <h4 className="font-bold text-xl text-[#1F2A44]">Anjali M.</h4>
              <p className="font-semibold text-lg" style={{ color: '#832DCE' }}>Lupus Warrior</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Resources ── */}
      <section className="py-20 px-6 border-y" style={{ background: 'rgba(131,45,206,0.05)', borderColor: 'rgba(131,45,206,0.12)' }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1F2A44] mb-10">Explore Topics</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {["Symptoms", "Getting Diagnosed", "Treatment Basics", "Diet & Lifestyle", "Pregnancy & Lupus", "Mental Health", "Social Challenges"].map((topic, i) => (
              <a
                href="#"
                key={i}
                className="text-xl md:text-2xl font-semibold transition-colors border-b-2 pb-1"
                style={{ color: '#374151', borderColor: 'transparent' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#832DCE'; e.currentTarget.style.borderColor = '#832DCE'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#374151'; e.currentTarget.style.borderColor = 'transparent'; }}
              >
                {topic}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Videos & Events ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-sm font-bold tracking-widest uppercase" style={{ color: '#832DCE' }}>Watch & Learn</span>
              <h2 className="text-4xl font-bold text-[#1F2A44] mt-2">Latest Sessions</h2>
            </div>
            <a
              href="https://www.youtube.com/@inspirelupusindia7636"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-lg flex items-center gap-2 hover:gap-3 transition-all mt-4 md:mt-0"
              style={{ color: '#832DCE' }}
            >
              Visit YouTube Channel <ArrowRight size={20} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Video 1 */}
            <div className="group">
              <div
                className="rounded-3xl overflow-hidden shadow-xl transition-transform duration-300 group-hover:scale-[1.01]"
                style={{ boxShadow: '0 16px 48px rgba(82,46,120,0.18)' }}
              >
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/5YZ1muAYO6U?si=dyqnhpKdOkXBFxy7"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="mt-5 pl-4 border-l-4" style={{ borderColor: '#832DCE' }}>
                <p className="text-xs text-[#9CA3AF] font-bold tracking-widest uppercase mb-1">Inspire Lupus India</p>
                <h3 className="text-lg font-bold text-[#1F2A44] leading-snug">Expert Session — Watch on YouTube</h3>
              </div>
            </div>

            {/* Video 2 */}
            <div className="group">
              <div
                className="rounded-3xl overflow-hidden shadow-xl transition-transform duration-300 group-hover:scale-[1.01]"
                style={{ boxShadow: '0 16px 48px rgba(82,46,120,0.18)' }}
              >
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/AHSXcWJ4snk?si=MXOAHV88gzMikxeF"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="mt-5 pl-4 border-l-4" style={{ borderColor: '#522E78' }}>
                <p className="text-xs text-[#9CA3AF] font-bold tracking-widest uppercase mb-1">Inspire Lupus India</p>
                <h3 className="text-lg font-bold text-[#1F2A44] leading-snug">Awareness Talk — Watch on YouTube</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
  <div className="max-w-6xl mx-auto">
    {/* Section Header */}
    <div className="flex flex-col items-center text-center mb-20">
      <span className="text-sm font-bold tracking-[0.2em] uppercase mb-4" style={{ color: '#832DCE' }}>
        Medical Advisory Board
      </span>
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F2A44] mb-6">
        Expert Guidance for Our Mission
      </h2>
      <div className="w-20 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #832DCE, #522E78)' }} />
    </div>

    {/* Grid Container */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {advisoryBoard.map((doc, i) => (
        <div 
          key={i} 
          className="group relative bg-[#FAF9FE] rounded-[2rem] p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-[#522E78]/5"
        >
          {/* Image Container with Border Accent */}
          <div className="relative mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src={doc.img} 
                alt={doc.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            {/* Small decorative ring */}
            <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full border-2 border-[#FAF9FE]" style={{ background: '#832DCE' }} />
          </div>

          <h4 className="text-xl font-bold text-[#1F2A44] mb-1">{doc.name}</h4>
          <p className="text-[#522E78] font-semibold text-sm mb-2">{doc.title}</p>
          <p className="text-[#6B7280] text-sm font-medium">{doc.inst}</p>
          
          <button className="mt-6 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#832DCE' }}>
            View Profile →
          </button>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* ── 8. SOCIAL MEDIA SECTION ── */}
      <section className="py-24 px-6" style={{ background: '#FAF9FE' }}>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-widest uppercase" style={{ color: '#832DCE' }}>Follow Our Journey</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F2A44] mt-3 mb-4">Stay Connected</h2>
            <p className="text-[#6B7280] text-lg max-w-xl mx-auto">
              Join the conversation across platforms — real updates, real stories, real community.
            </p>
            <div className="flex justify-center gap-4 mt-8">
              {[
                { Icon: InstagramIcon, label: '@inspirelupusindia', href: 'https://www.instagram.com/inspirelupusindia/', bg: 'linear-gradient(135deg, #832DCE, #522E78)' },
                { Icon: YoutubeIcon, label: 'Inspire Lupus India', href: 'https://www.youtube.com/@inspirelupusindia7636', bg: '#522E78' },
                { Icon: XIcon, label: '@InspireLupus', href: 'https://x.com/InspireLupus', bg: '#1a1a1a' },
              ].map(({ Icon, label, href, bg }) => (
                <a key={label} href={href}
                  className="flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-opacity hover:opacity-90"
                  style={{ background: bg }}>
                  <Icon size={16} /> {label}
                </a>
              ))}
            </div>
          </div>

          {/* Instagram Grid */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{ background: 'linear-gradient(135deg, #832DCE, #522E78)' }}>
                <InstagramIcon size={16} />
              </div>
              <h3 className="text-xl font-bold text-[#1F2A44]">Instagram</h3>
              <a href="https://www.instagram.com/inspirelupusindia/" target="_blank" rel="noopener noreferrer" className="ml-auto text-sm font-semibold flex items-center gap-1" style={{ color: '#832DCE' }}>
                Follow <ExternalLink size={14} />
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {instagramPosts.map(post => (
                <div key={post.id} className="group rounded-2xl overflow-hidden cursor-pointer relative shadow-md hover:shadow-xl transition-shadow"
                  style={{ boxShadow: '0 4px 20px rgba(82,46,120,0.08)' }}>
                  <div className="aspect-square relative overflow-hidden">
                    <img src={post.image} alt="Instagram post" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6"
                      style={{ background: 'rgba(82,46,120,0.7)' }}>
                      <span className="text-white font-bold flex items-center gap-1.5"><ThumbsUp size={18} /> {post.likes}</span>
                      <span className="text-white font-bold flex items-center gap-1.5"><MessageCircle size={18} /> {post.comments}</span>
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <p className="text-sm text-[#374151] line-clamp-2 leading-relaxed">{post.caption}</p>
                    <div className="flex items-center gap-4 mt-3">
                      <span className="text-xs text-[#9CA3AF] flex items-center gap-1"><ThumbsUp size={12} /> {post.likes}</span>
                      <span className="text-xs text-[#9CA3AF] flex items-center gap-1"><MessageCircle size={12} /> {post.comments}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* YouTube CTA + X in two columns */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* YouTube channel CTA */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{ background: '#522E78' }}>
                  <YoutubeIcon size={16} />
                </div>
                <h3 className="text-xl font-bold text-[#1F2A44]">YouTube</h3>
                <a href="https://www.youtube.com/@inspirelupusindia7636" target="_blank" rel="noopener noreferrer" className="ml-auto text-sm font-semibold flex items-center gap-1" style={{ color: '#522E78' }}>
                  Subscribe <ExternalLink size={14} />
                </a>
              </div>
              <a
                href="https://www.youtube.com/@inspirelupusindia7636"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-4 p-10 rounded-2xl text-center group transition-all hover:shadow-lg"
                style={{ background: 'linear-gradient(135deg, #522E78 0%, #832DCE 100%)', minHeight: '200px', textDecoration: 'none' }}
              >
                <YoutubeIcon size={48} color="white" />
                <div>
                  <p className="text-white font-extrabold text-xl">Inspire Lupus India</p>
                  <p className="text-white/70 text-sm mt-1">Watch our full library of expert sessions & patient stories</p>
                </div>
                <span className="mt-2 bg-white text-sm font-bold px-5 py-2 rounded-full group-hover:bg-opacity-90 transition-all" style={{ color: '#522E78' }}>
                  Visit Channel →
                </span>
              </a>
            </div>

            {/* X / Twitter */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{ background: '#1a1a1a' }}>
                  <XIcon size={16} />
                </div>
                <h3 className="text-xl font-bold text-[#1F2A44]">X (Twitter)</h3>
                <a href="https://x.com/InspireLupus" target="_blank" rel="noopener noreferrer" className="ml-auto text-sm font-semibold flex items-center gap-1" style={{ color: '#832DCE' }}>
                  Follow <ExternalLink size={14} />
                </a>
              </div>
              <div className="space-y-4">
                {xPosts.map(post => (
                  <div key={post.id} className="p-5 bg-white rounded-2xl cursor-pointer hover:shadow-md transition-shadow"
                    style={{ border: '1.5px solid rgba(82,46,120,0.08)' }}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg, #832DCE, #522E78)' }}>IL</div>
                      <div>
                        <p className="font-bold text-sm text-[#1F2A44]">{post.name}</p>
                        <p className="text-xs text-[#9CA3AF]">{post.handle}</p>
                      </div>
                      <div className="ml-auto">
                        <XIcon size={16} />
                      </div>
                    </div>
                    <p className="text-sm text-[#374151] leading-relaxed mb-4">{post.text}</p>
                    <div className="flex items-center gap-5 text-xs text-[#9CA3AF]">
                      <span className="flex items-center gap-1.5"><MessageCircle size={13} /> {post.replies}</span>
                      <span className="flex items-center gap-1.5"><Share2 size={13} /> {post.reposts}</span>
                      <span className="flex items-center gap-1.5"><ThumbsUp size={13} /> {post.likes}</span>
                      <span className="ml-auto">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. Get Involved ── */}
      <section className="py-32 px-6 relative overflow-hidden" style={{ background: '#832DCE' }}>
        <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(135deg, #522E78 0%, #832DCE 100%)' }} />
        <div className="max-w-3xl mx-auto text-center text-white relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Ready to make an impact?</h2>
          <p className="text-xl font-medium leading-relaxed mb-10" style={{ color: 'rgba(233,221,248,0.9)' }}>
            Whether you want to share your journey, volunteer your time, or simply find a place where you belong — there is a seat for you here.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-white font-bold px-10 py-5 rounded-full text-lg transition-shadow hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
              style={{ color: '#522E78' }}>
              Share Your Story
            </button>
            <button className="text-white font-bold px-10 py-5 rounded-full border-2 text-lg hover:bg-white/10 transition-colors"
              style={{ borderColor: 'rgba(255,255,255,0.35)' }}>
              Become a Volunteer
            </button>
          </div>
        </div>
      </section>

      {/* ── 10. Footer ── */}
      <footer className="bg-[#1F2A44] text-white pt-24 pb-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-16 border-b border-white/10 pb-16">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo.png" alt="Inspire Lupus India Logo" className="w-11 h-11 object-contain" />
              <span className="text-xl font-extrabold" style={{ color: '#E9DDF8' }}>
                Inspire <span style={{ color: '#C084F5' }}>Lupus</span> India
              </span>
            </div>
            <p className="text-gray-300 text-lg leading-loose mb-8">
              Educating, inspiring, and empowering lupus patients across India. Because early diagnosis saves lives.
            </p>
            <div className="flex gap-5">
              {[
                { Icon: FacebookIcon, href: 'https://www.facebook.com/profile.php?id=100085268985499', title: 'Facebook Page' },
                { Icon: InstagramIcon, href: 'https://www.instagram.com/inspirelupusindia/', title: 'Instagram' },
                { Icon: YoutubeIcon, href: 'https://www.youtube.com/@inspirelupusindia7636', title: 'YouTube' },
                { Icon: XIcon, href: 'https://x.com/InspireLupus', title: 'X (Twitter)' },
              ].map(({ Icon, href, title }, i) => (
                <a key={i} href={href} title={title} target="_blank" rel="noopener noreferrer"
                  className="text-gray-400 transition-colors"
                  onMouseEnter={e => (e.currentTarget.style.color = '#C084F5')}
                  onMouseLeave={e => (e.currentTarget.style.color = '')}>
                  <Icon size={26} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-16 md:gap-24">
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm" style={{ color: '#832DCE' }}>Explore</h4>
              <ul className="space-y-4 text-gray-300 font-medium text-lg">
                {["About Us", "What is Lupus?", "Resources", "Events"].map(l => (
                  <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-sm" style={{ color: '#C084F5' }}>Connect</h4>
              <ul className="space-y-4 text-gray-300 font-medium text-lg">
                <li className="flex items-center gap-3"><Mail size={22} /> hello@inspirelupus.in</li>
                <li><a href="https://www.instagram.com/inspirelupusindia/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">Instagram <ExternalLink size={16}/></a></li>
                <li><a href="https://www.youtube.com/@inspirelupusindia7636" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">YouTube <ExternalLink size={16}/></a></li>
                <li><a href="https://www.facebook.com/groups/3267958983418095" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">Facebook Group <ExternalLink size={16}/></a></li>
                <li><a href="https://x.com/InspireLupus" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">X (Twitter) <ExternalLink size={16}/></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center text-gray-400 font-medium">
          <p>© {new Date().getFullYear()} Inspire Lupus India.</p>
          <div className="space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}