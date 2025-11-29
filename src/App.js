// src/App.js
import React, { useEffect, useState } from "react";
import myPhoto from "./assets/mypic2.jpg";
import projectpic from "./assets/webpage.png";
import notespic from "./assets/notes.png";
import goalpic from "./assets/goal.png";
import {
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaNodeJs,
  FaGithubAlt,
  FaSun,
  FaMoon,
  FaSpinner,
  FaDatabase,
  FaBrain,
} from "react-icons/fa";
import { SiSpringboot, SiMysql, SiNextdotjs } from "react-icons/si";

export default function App() {
  // page states
  const [loading, setLoading] = useState(true); // loader
  const [isDark, setIsDark] = useState(() => {
    // initial theme from localStorage or system preference
    try {
      const v = localStorage.getItem("theme");
      if (v) return v === "dark";
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch (e) {
      return true;
    }
  });
  const [showAbout, setShowAbout] = useState(false);
  const [modalProject, setModalProject] = useState(null);

  // projects (only 1 as requested)
  const projects = [
  {
    id: 1,
    title: "Weather Forecasting App",
    subtitle: "HTML • CSS • JavaScript • API",
    desc:
      "A responsive Weather Forecasting app using OpenWeather API with clean UI and 5-day forecast.",
    code:
      "https://github.com/ashusingh41537-arch/weather-forecasting-web-project.git",
    image: projectpic,
    live: "https://weather-forecasting-web-project.vercel.app/",
  },

  {
    id: 2,
    title: "Progress Tracker Web",
    subtitle: "Fully developed using React.js! 🚀",
    desc:
      "This web is designed to help users stay productive by organizing tasks into Daily Goals, Monthly Goals, Pending Tasks, and History, along with a clean and modern UI.",
    code:
      "https://github.com/ashusingh41537-arch/Progress-Tracker-Web.git",
    live: "https://progress-tracker-web-one.vercel.app/",
    image: goalpic, 
  },

  {
    id: 3,
    title: "My Notes",
    subtitle: "Fully developed using React.js! 🚀",
    desc:
      "My-Notes Brown is a digital workspace designed to help professionals and students organize their tasks, projects, and important information efficiently.",
    code: "https://github.com/ashusingh41537-arch/My-Notes.git",
    live: "https://my-notes-brown.vercel.app/",
    image: notespic, 
  },
];


  // skills with icons (from your list)
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-sky-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
    { name: "Java", icon: <FaJava className="text-red-500" /> },
    { name: "DSA", icon: <FaBrain className="text-indigo-300" /> },
    { name: "GitHub", icon: <FaGithubAlt className="text-white" /> },
  ];

  // apply theme to <html> (Tailwind dark mode uses 'dark' class)
  useEffect(() => {
  const root = document.documentElement;
  if (isDark) {
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    root.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, [isDark]);


  // loader: composite loader for ~2100ms (photo + spinner + pulse + text)
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2100);
    return () => clearTimeout(t);
  }, []);

  // helper: open wa / mail for contact actions (if you want later)
  const openWhatsApp = (text) => {
    window.open(`https://wa.me/916393010328?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen text-black dark:text-white transition-colors duration-300">

      {/* Loader overlay */}
      {loading && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-white dark:bg-black">
          <div className="flex flex-col items-center gap-4">
            {/* floating photo */}
            <div className="w-36 h-36 rounded-xl overflow-hidden ring-4 ring-purple-300/30 dark:ring-purple-700/20 shadow-xl animate-float">
              <img src={myPhoto} alt="Akshay" className="w-full h-full object-cover" />
            </div>

            {/* spinner + pulse */}
            <div className="flex items-center gap-4">
              <FaSpinner className="animate-spin text-3xl text-purple-600 dark:text-purple-400" />
              <div className="w-4 h-4 rounded-full bg-purple-400 animate-pulse" />
            </div>

            {/* text */}
            <div className="text-center">
              <div className="text-lg font-semibold">Loading Akshay Pratap Singh…</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">Preparing portfolio</div>
            </div>
          </div>
        </div>
      )}

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-yellow-400 dark:bg-[#0e0e10]/60 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-purple-300 dark:ring-purple-700">
              <img src={myPhoto} alt="Akshay" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-bold text-lg">Akshay Pratap Singh</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">BCA 3rd Year • Java Full Stack</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="hover:underline transition-all duration-300 ease-in-out hover:scale-110 hover:text-purple-600">Home</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); setShowAbout(true); }} className="hover:underline transition-all duration-300 ease-in-out hover:scale-110 hover:text-purple-600">About</a>
            <a href="#projects" className="hover:underline transition-all duration-300 ease-in-out hover:scale-110 hover:text-purple-600">Projects</a>
            <a href="#skills" className="hover:underline transition-all duration-300 ease-in-out hover:scale-110 hover:text-purple-600">Skills</a>
            <a href="#contact" className="hover:underline transition-all duration-300 ease-in-out hover:scale-110 hover:text-purple-600">Contact</a>

            {/* GitHub + LinkedIn icons */}
            <a href="https://github.com/ashusingh41537-arch" target="_blank" rel="noreferrer" className="ml-3 text-xl hover:text-purple-600 transition-all duration-300 ease-in-out hover:scale-110">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/pratapakshay" target="_blank" rel="noreferrer" className="text-xl hover:text-blue-500 transition-all duration-300 ease-in-out hover:scale-110">
              <FaLinkedin />
            </a>

            {/* Dark/Light Toggle */}
            <button
             onClick={() => setIsDark(!isDark)}
             className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-500 transition-all duration-300 ease-in-out hover:scale-110"
             >
             {isDark ? <FaSun /> : <FaMoon />}
            </button>

          </nav>
          
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* HERO */}
        <section id="home" className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm font-bold text-gray-600 dark:text-gray-300 ">Web Developer • Java Full Stack</p>

            <h1 className="mt-3 text-3xl md:text-4xl font-extrabold">
              Hi, I'm <span className="text-purple-500">Akshay Pratap Singh</span>
            </h1>

            <p className="mt-4 font-bold text-gray-700 dark:text-gray-300 max-w-xl">
              I build clean, responsive web apps. Currently learning full-stack Java + Spring Boot and improving DSA in Java.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="px-4 py-2 rounded bg-purple-600 text-white transition-all duration-300 ease-in-out hover:scale-110">See Projects</a>

              <a
                href="mailto:ashusingh41537@gmail.com"
                className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-blue-900 text-white transition-all duration-300 ease-in-out hover:scale-110"
              >
                Contact Me
              </a>

              <a href="https://github.com/ashusingh41537-arch" target="_blank" rel="noreferrer" className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-teal-600 text-white transition-all duration-300 ease-in-out hover:scale-110">
                GitHub
              </a>
            </div>

            <div className="mt-6 text-sm text-2xl text-blue-900 dark:text-gray-300">
              <div><strong>Location:</strong> Lucknow, UP, India</div>
              <div><strong>Email:</strong> ashusingh41537@gmail.com</div>
              <div><strong>Contact:</strong> 6393010328</div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-2xl overflow-hidden ring-4 ring-purple-200/30 dark:ring-purple-700/20 shadow-2xl flex items-center justify-center animate-float">
              <img src={myPhoto} alt="Akshay" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* ABOUT (small section — also available via popup) */}
        <section id="about-inline" className="mt-12 bg-yellow-300 dark:bg-[#0b0b0b] rounded-2xl p-6 shadow border border-gray-400 dark:border-gray-800">
          <h2 className="text-2xl font-semibold text-purple-500">About Me</h2>
          <div className="mt-3 text-gray-700 dark:text-gray-300 whitespace-pre-line">
{`👋 Hi there!
I’m Akshay Pratap Singh, a passionate tech enthusiast and a 3rd-year BCA student specializing in Full Stack Java Web Development. I’m driven by a love for coding, problem-solving, and building impactful digital experiences that blend creativity with technology.

💻 What I Do
I specialize in Java Full Stack Development, with strong expertise in Java, Spring Boot, React.js, Next.js, HTML, CSS, JavaScript, Bootstrap, and MySQL. Alongside this, I have a deep interest in Data Structures & Algorithms (Java) — constantly improving my logic-building and problem-solving skills.

🚀 Experience
As a Full Stack Java Development Intern, I’ve worked on both frontend and backend technologies — designing responsive interfaces, developing RESTful APIs, and optimizing application performance.

🌟 Future Plans
I aim to expand my expertise in microservices, cloud integration, and advanced backend development while contributing to impactful real-world projects.

🌱 Learning & Goals
I’m continuously learning new technologies and enhancing my development and problem-solving skills. My goal is to become a proficient software engineer capable of building innovative, high-performance web applications that make a difference.

📫 Let’s Connect!
I’m always open to exciting opportunities, collaborations, and discussions about technology and innovation.`}
          </div>
          <div className="mt-4">
            <button onClick={() => setShowAbout(true)} className="px-4 py-2 rounded bg-purple-600 text-white transition-all duration-300 ease-in-out hover:scale-105">Read More / Open About</button>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mt-8">
          <h2 className="text-xl font-semibold text-purple-500">Skills</h2>

          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((s) => (
              <div key={s.name} className="p-4 bg-pink-200 dark:bg-[#111] rounded-lg border border-gray-200 dark:border-gray-800 flex flex-col items-center gap-2 transition-all duration-300 ease-in-out hover:scale-110">
                <div className="text-3xl">{s.icon}</div>
                <div className="text-sm font-medium">{s.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-purple-500">Projects</h2>
            <div className="text-sm text-blue-900 dark:text-gray-400">Click card for details</div>
          </div>

          <div className="mt-4 grid sm:grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <article key={p.id} className="bg-green-200 dark:bg-[#0b0b0b] rounded-xl shadow border border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-300 ease-in-out hover:scale-105">
                <div className="h-44 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{p.subtitle}</div>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">{p.desc}</p>

                  <div className="mt-4 flex gap-2 ">
                    <button onClick={() => setModalProject(p)} className="px-3 py-1 rounded border bg-pink-400 dark:bg-purple-600 text-white transition-all duration-300 ease-in-out hover:scale-105">Details</button>
                    <a href={p.code} target="_blank" rel="noreferrer" className="px-3 py-1 rounded border bg-green-500 dark:bg-teal-500 transition-all duration-300 ease-in-out hover:scale-105">Code</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-8 bg-yellow-200 dark:bg-[#0b0b0b] rounded-2xl p-6 shadow border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold text-purple-500">Contact</h2>

          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-700 dark:text-gray-300">Email: <a href="mailto:ashusingh41537@gmail.com" className="text-purple-400">ashusingh41537@gmail.com</a></p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">Phone: <a href="tel:+916393010328" className="text-purple-400">6393010328</a></p>

              <div className="mt-4 flex items-center gap-4">
                <a href="https://github.com/ashusingh41537-arch" target="_blank" rel="noreferrer" className="text-2xl transition-all duration-300 ease-in-out hover:scale-110"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/pratapakshay" target="_blank" rel="noreferrer" className="text-2xl transition-all duration-300 ease-in-out hover:scale-110"><FaLinkedin /></a>
              </div>
            </div>

            <div>
              <form onSubmit={(e) => {
                e.preventDefault();
                const name = e.target.name.value.trim();
                const email = e.target.email.value.trim();
                const message = e.target.message.value.trim();
                if (!name || !email || !message) {
                  alert("Please fill all fields");
                  return;
                }
                // open mail client
                window.location.href = `mailto:ashusingh41537@gmail.com?subject=${encodeURIComponent("Message from " + name)}&body=${encodeURIComponent(message + "\n\nFrom: " + name + " (" + email + ")")}`;
              }}>
                <input name="name" placeholder="Your name" className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 mb-2 bg-white dark:bg-[#0b0b0b] text-black dark:text-white" />
                <input name="email" placeholder="Your email" type="email" className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 mb-2 bg-white dark:bg-[#0b0b0b] text-black dark:text-white" />
                <textarea name="message" placeholder="Message" rows={5} className="w-full p-3 rounded border border-gray-300 dark:border-gray-700 mb-2 bg-white dark:bg-[#0b0b0b] text-black dark:text-white" />
                <div className="flex gap-3">
                  <button type="submit" className="px-4 py-2 rounded border bg-green-300 dark:bg-purple-500 transition-all duration-300 ease-in-out hover:scale-110 ">Send</button>
                  <button type="reset" className="px-4 py-2 rounded border bg-pink-300 dark:bg-blue-900 transition-all duration-300 ease-in-out hover:scale-110">Reset</button>
                </div>
              </form>
            </div>
          </div>
        </section>
         
       {/* SKILLS MARQUEE BETWEEN CONTACT & FOOTER */}
<section className="mt-8 py-6 overflow-hidden">
  <div className="flex animate-marquee gap-12 items-center">
    {skills.map((s) => (
      <div key={s.name} className="flex flex-col items-center min-w-[100px] text-center">
        <div className="text-5xl text-purple-500">{s.icon}</div>
        <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-1">{s.name}</div>
      </div>
    ))}
    {/* duplicate for smooth infinite scroll */}
    {skills.map((s) => (
      <div key={s.name + "-duplicate"} className="flex flex-col items-center min-w-[100px] text-center">
        <div className="text-5xl text-purple-500">{s.icon}</div>
        <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-1">{s.name}</div>
      </div>
    ))}
  </div>

  {/* Tailwind + custom animation */}
  <style>{`
    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      display: flex;
      gap: 3rem;
      animation: marquee 20s linear infinite;
      background: transparent;
    }
    .animate-marquee > div {
      background: transparent;
    }
  `}</style>
</section>

        {/* FOOTER */}
        <footer className="mt-12 mb-8 font-bold text-center text-lg text-blue-700 dark:text-gray-400">
          © {new Date().getFullYear()} Akshay Pratap Singh — Built with ❤️
        </footer>
      </main>
    
      {/* PROJECT MODAL */}
      {modalProject && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 p-6">
          <div className="bg-yellow-200 dark:bg-[#0b0b0b] rounded-xl max-w-2xl w-full p-6 border border-gray-200 dark:border-gray-800">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold">{modalProject.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{modalProject.subtitle}</p>
              </div>
              <button onClick={() => setModalProject(null)} className="text-gray-500">✕</button>
            </div>

            <p className="mt-4 text-gray-700 dark:text-gray-300">{modalProject.desc}</p>

            <ul className="mt-3 list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>Code: <a href={modalProject.code} target="_blank" rel="noreferrer" className="text-purple-500">Repository</a></li>
              <li>
                 <b>Live:</b>{" "}
                    {modalProject.live ? (
                    <a
                     href={modalProject.live}
                     target="_blank"
                     className="bg-green-600 px-1 py-1 text-white rounded-md "
                     >
                      🟢 LIVE
                    </a>
                    ) : (
                    <span className="bg-red-600 px-2 py-1 text-white rounded-md">
                      🔴 Not Available
                    </span>
                    )}
              </li>

            </ul>

            <div className="mt-6 text-right">
              <button onClick={() => setModalProject(null)} className="px-4 py-2 rounded border bg-green-300 dark:bg-purple-500 transition-all duration-300 ease-in-out hover:scale-105">Close</button>
            </div>
          </div>
        </div>
      )}

      {/* About popup (separate) */}
      {/* About popup (separate) */}
{showAbout && (
  <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 p-6">
    <div className="bg-green-200 dark:bg-[#0b0b0b] rounded-xl max-w-3xl w-full p-6 border border-gray-200 dark:border-gray-800 overflow-y-auto max-h-[85vh]">

      <div className="flex justify-between items-start gap-4">
        <h2 className="text-2xl font-bold text-purple-500">About Me</h2>
        <button onClick={() => setShowAbout(false)} className="text-gray-500">✕</button>
      </div>

      <div className="mt-4 text-gray-700 dark:text-gray-300 whitespace-pre-line">
{`👋 Hi there!
I’m Akshay Pratap Singh, a passionate tech enthusiast and a 3rd-year BCA student specializing in Full Stack Java Web Development. I’m driven by a love for coding, problem-solving, and building impactful digital experiences.

🎓 College & Course
• College: Sri Sharda Group Of Institution, Lucknow  
• Course: Bachelor of Computer Applications (BCA), 3rd Year  
• Specialization: Web Development  

💼 Internship Experience
• Full Stack Java Development Intern — Worked on frontend & backend  
• Built responsive UIs, REST APIs, CRUD operations  
• Improved performance, database handling & deployment concepts  

📚 Additional Courses & Certifications
• Java Full Stack Certification  
• Data Structures & Algorithms (Java)  
• HTML, CSS, JavaScript, React, Next.js  
• MySQL + Database Management  
• Git & GitHub Version Control  
• Java + Spring Boot Fundamentals  

💻 What I Do
I specialize in Full Stack Development with expertise in Java, Spring Boot, React.js, Next.js, HTML, CSS, JavaScript, Bootstrap, and MySQL.

🌱 Learning & Goals
I’m continuously learning new technologies & improving my problem-solving. My goal is to become a highly skilled software engineer capable of building scalable and production-level applications.

📫 Let’s Connect!
I’m always open to exciting opportunities, collaborations, and tech discussions.`}
      </div>

      <div className="mt-6">
        <button onClick={() => setShowAbout(false)} className="px-4 py-2 rounded bg-purple-600 text-white">
          Close
        </button>
      </div>

    </div>
  </div>
)}


      {/* SMALL CSS for animations */}
      <style>{`
        @keyframes floating {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        .animate-float { animation: floating 4s ease-in-out infinite; }
        .animate-float-short { animation: floating 3s ease-in-out infinite; }
      
        html {
           transition: background-color 0.4s ease, color 0.4s ease;
        }

        svg {
          transition: fill 0.4s ease, stroke 0.4s ease, color 0.4s ease;
         }

      * {
        transition: 
         background-color 0.4s ease,
          color 0.4s ease,
          border-color 0.4s ease,
          fill 0.4s ease,
          stroke 0.4s ease;
        }
      `}</style>

    </div>
  );
} 