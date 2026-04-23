import React from 'react';
import { 
  Heart, 
  Users, 
  BookOpen, 
  CalendarDays, 
  PlayCircle, 
  ChevronRight, 
  Mail,
  ArrowRight
} from 'lucide-react';

// Custom SVG Icons
const FacebookIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const YoutubeIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>
  </svg>
);

export default function Home() {
  return (
    <main className="font-sans bg-[#FAF9FE] text-[#1F2A44] overflow-x-hidden selection:bg-[#6F42C1] selection:text-white">
      
      {/* 1. Hero Section - With Image Background & Overlay */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden min-h-[85vh] flex items-center justify-center">
        
        {/* Unsplash Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop" 
            alt="People holding hands in support" 
            className="w-full h-full object-cover object-center"
          />
          {/* Heavy gradient overlay for perfect text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9FE]/95 via-[#FAF9FE]/85 to-[#FAF9FE]"></div>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-[#6F42C1]"></span>
            <span className="text-[#6F42C1] font-bold tracking-widest uppercase text-sm">Patient-Led Initiative</span>
            <span className="h-px w-10 bg-[#6F42C1]"></span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#1F2A44] leading-[1.15] tracking-tight">
            Spreading Awareness, <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6F42C1] to-[#2AA7A1]">
              Support, and Hope
            </span>
          </h1>
          
          <p className="mt-8 text-[#374151] text-xl md:text-2xl max-w-3xl font-medium leading-relaxed">
            Created for lupus patients, by lupus patients. Educating and inspiring India to live better with lupus.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
            <button className="group relative bg-[#1F2A44] text-white font-semibold px-8 py-4 rounded-full overflow-hidden flex items-center gap-2 shadow-xl shadow-blue-900/10 hover:shadow-2xl transition-all">
              <span className="relative z-10">Join the Community</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-[#6F42C1] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
            </button>
            <button className="text-[#1F2A44] font-semibold px-8 py-4 flex items-center gap-2 hover:text-[#2AA7A1] transition-colors">
              Learn About Lupus
            </button>
          </div>
        </div>
      </section>

      {/* 2 & 3. About & What is Lupus */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
            
            {/* Real Image Integration */}
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-[4/5] rounded-[3rem] md:rounded-[6rem] rounded-tr-3xl rounded-bl-3xl overflow-hidden relative z-10 shadow-2xl shadow-purple-900/10">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop" 
                  alt="Doctor speaking with a patient" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#2AA7A1]/20 rounded-full blur-3xl z-0"></div>
            </div>

            <div className="w-full md:w-1/2 space-y-14">
              <div>
                <h2 className="text-sm font-bold tracking-widest text-[#2AA7A1] uppercase mb-3">Who We Are</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-[#1F2A44] leading-snug">
                  No one should walk this journey alone.
                </h3>
                <p className="mt-5 text-lg text-[#374151] leading-loose">
                  Inspire Lupus India is a community built on shared experiences. Our core mission is to emphasize the critical importance of early diagnosis and combine medical education with compassionate support.
                </p>
              </div>

              <div>
                <h2 className="text-sm font-bold tracking-widest text-[#6F42C1] uppercase mb-3">Understanding the Condition</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-[#1F2A44] leading-snug">
                  What is Lupus?
                </h3>
                <p className="mt-5 text-lg text-[#374151] leading-loose">
                  A chronic autoimmune disease where the body's immune system becomes hyperactive, attacking healthy tissues. Because it is often misunderstood, awareness and proper medical treatment are vital to improving quality of life.
                </p>
                <button className="mt-6 text-[#6F42C1] font-bold flex items-center gap-2 hover:gap-3 transition-all text-lg">
                  Read the medical overview <ChevronRight size={20} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. What We Do */}
      <section className="py-24 px-6 bg-[#1F2A44] text-white rounded-[2rem] md:rounded-[4rem] mx-4 md:mx-12 my-12 shadow-2xl">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Our Initiatives</h2>
          </div>
          
          <div className="space-y-0">
            {/* Item 1 */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 py-10 border-b border-white/10 group">
              <Heart className="text-[#2AA7A1] shrink-0" size={56} strokeWidth={1.5} />
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#2AA7A1] transition-colors">Awareness Campaigns</h3>
                <p className="text-gray-300 text-lg leading-relaxed">Spreading vital information to encourage early diagnosis and better understanding across society.</p>
              </div>
            </div>
            
            {/* Item 2 */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 py-10 border-b border-white/10 group">
              <Users className="text-[#E9DDF8] shrink-0" size={56} strokeWidth={1.5} />
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#E9DDF8] transition-colors">Patient Stories</h3>
                <p className="text-gray-300 text-lg leading-relaxed">Sharing real, unfiltered journeys of lupus warriors to inspire hope and build a resilient community.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 py-10 group">
              <BookOpen className="text-[#6F42C1] shrink-0" size={56} strokeWidth={1.5} />
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#6F42C1] transition-colors">Expert Sessions</h3>
                <p className="text-gray-300 text-lg leading-relaxed">Hosting webinars and open talks with medical professionals on treatments, diet, and lifestyle.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Patient Stories */}
      <section className="py-24 px-6 relative bg-gradient-to-b from-[#FAF9FE] to-white">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-sm font-bold tracking-widest text-[#6F42C1] uppercase mb-12">Voices of Lupus Warriors</h2>
          
          <div className="relative">
            <span className="text-[8rem] leading-none font-serif text-[#E9DDF8] absolute -top-16 -left-4 md:-left-12 z-0 select-none">"</span>
            <p className="text-2xl md:text-4xl text-[#1F2A44] leading-relaxed font-semibold relative z-10 italic">
              Getting the diagnosis was terrifying, but finding a community that understood my daily, invisible struggles changed everything. I finally learned how to advocate for my own health.
            </p>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#6F42C1] to-[#E9DDF8] rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">A</div>
            <div className="text-left">
              <h4 className="font-bold text-xl text-[#1F2A44]">Anjali M.</h4>
              <p className="text-[#2AA7A1] font-semibold text-lg">Lupus Warrior</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Resources & Education */}
      <section className="py-20 px-6 bg-[#E9DDF8]/40 border-y border-[#E9DDF8]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1F2A44] mb-10">Explore Topics</h2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {["Symptoms", "Getting Diagnosed", "Treatment Basics", "Diet & Lifestyle", "Pregnancy & Lupus", "Mental Health", "Social Challenges"].map((topic, i) => (
              <a href="#" key={i} className="text-xl md:text-2xl text-[#374151] hover:text-[#6F42C1] font-semibold transition-colors border-b-2 border-transparent hover:border-[#6F42C1] pb-1">
                {topic}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Videos & Events - With Image Backgrounds */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-[#1F2A44]">Latest Sessions</h2>
            </div>
            <a href="#" className="text-[#6F42C1] font-bold text-lg flex items-center gap-2 hover:gap-3 transition-all mt-4 md:mt-0">
              Visit YouTube Channel <ArrowRight size={20} />
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Featured Video 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[16/9] rounded-3xl overflow-hidden relative flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02] shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1000&auto=format&fit=crop" 
                  alt="Medical professional taking notes"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#1F2A44]/50 group-hover:bg-[#1F2A44]/40 transition-colors"></div>
                <PlayCircle size={72} strokeWidth={1} className="text-white relative z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-md" />
              </div>
              <div className="mt-6 pl-4 border-l-4 border-[#2AA7A1]">
                <p className="text-sm text-[#4B5563] font-bold tracking-wide uppercase flex items-center gap-2 mb-2"><CalendarDays size={16}/> March 2026</p>
                <h3 className="text-2xl font-bold text-[#1F2A44] leading-snug">Understanding Lupus Nephritis: Expert Q&A</h3>
              </div>
            </div>

            {/* Featured Video 2 */}
            <div className="group cursor-pointer hidden md:block">
              <div className="aspect-[16/9] rounded-3xl overflow-hidden relative flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02] shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop" 
                  alt="Woman stretching / lifestyle"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#6F42C1]/40 group-hover:bg-[#6F42C1]/30 transition-colors"></div>
                <PlayCircle size={72} strokeWidth={1} className="text-white relative z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-md" />
              </div>
              <div className="mt-6 pl-4 border-l-4 border-[#6F42C1]">
                <p className="text-sm text-[#4B5563] font-bold tracking-wide uppercase flex items-center gap-2 mb-2"><CalendarDays size={16}/> February 2026</p>
                <h3 className="text-2xl font-bold text-[#1F2A44] leading-snug">Managing Flare-ups During Summer</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Get Involved */}
      <section className="py-32 px-6 relative overflow-hidden bg-[#6F42C1]">
        {/* Subtle background gradient to keep it looking deep and rich */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5b35a3] to-[#6F42C1] z-0"></div>
        
        <div className="max-w-3xl mx-auto text-center text-white relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Ready to make an impact?</h2>
          <p className="text-xl text-[#E9DDF8] font-medium leading-relaxed mb-10">
            Whether you want to share your journey, volunteer your time, or simply find a place where you belong—there is a seat for you here.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-white text-[#6F42C1] font-bold px-10 py-5 rounded-full hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-shadow text-lg">
              Share Your Story
            </button>
            <button className="text-white font-bold px-10 py-5 rounded-full border-2 border-white/30 hover:bg-white/10 transition-colors text-lg">
              Become a Volunteer
            </button>
          </div>
        </div>
      </section>

      {/* 9 & 10. Footer */}
      <footer className="bg-[#1F2A44] text-white pt-24 pb-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-16 border-b border-white/10 pb-16">
          
          <div className="max-w-sm">
            <h3 className="text-3xl font-bold mb-6">Inspire Lupus India</h3>
            <p className="text-gray-300 text-lg leading-loose mb-8">
              Educating, inspiring, and empowering lupus patients across India. Because early diagnosis saves lives.
            </p>
            <div className="flex gap-5">
              <a href="#" className="text-gray-400 hover:text-[#E9DDF8] transition-colors"><FacebookIcon size={28} /></a>
              <a href="#" className="text-gray-400 hover:text-[#E9DDF8] transition-colors"><InstagramIcon size={28} /></a>
              <a href="#" className="text-gray-400 hover:text-[#E9DDF8] transition-colors"><YoutubeIcon size={28} /></a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-16 md:gap-24">
            <div>
              <h4 className="font-bold text-lg mb-6 text-[#2AA7A1] uppercase tracking-widest text-sm">Explore</h4>
              <ul className="space-y-4 text-gray-300 font-medium text-lg">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">What is Lupus?</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6 text-[#E9DDF8] uppercase tracking-widest text-sm">Connect</h4>
              <ul className="space-y-4 text-gray-300 font-medium text-lg">
                <li className="flex items-center gap-3"><Mail size={22} /> hello@inspirelupus.in</li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2">Join Mailing List <ArrowRight size={18}/></a></li>
              </ul>
            </div>
          </div>

        </div>
        
        <div className="max-w-6xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center text-gray-400 font-medium">
          <p>© {new Date().getFullYear()} Inspire Lupus India.</p>
          <div className="space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-[#E9DDF8] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#E9DDF8] transition-colors">Terms</a>
          </div>
        </div>
      </footer>

    </main>
  );
}