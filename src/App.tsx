import React, { useState } from 'react';
import { Github, Linkedin, Mail, Menu, X, ExternalLink, Download } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-cyan-400">Kakade A.</a>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">About</a>
            <a href="#experience" className="text-gray-400 hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#skills" className="text-gray-400 hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800">
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
              <a href="#about" className="py-2 text-gray-400 hover:text-cyan-400" onClick={toggleMenu}>About</a>
              <a href="#experience" className="py-2 text-gray-400 hover:text-cyan-400" onClick={toggleMenu}>Experience</a>
              <a href="#projects" className="py-2 text-gray-400 hover:text-cyan-400" onClick={toggleMenu}>Projects</a>
              <a href="#skills" className="py-2 text-gray-400 hover:text-cyan-400" onClick={toggleMenu}>Skills</a>
              <a href="#contact" className="py-2 text-gray-400 hover:text-cyan-400" onClick={toggleMenu}>Contact</a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section - Centered with no image */}
        <section className="py-32 relative overflow-hidden">
          {/* Animated decorative elements */}
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-20 left-20 text-cyan-500 text-6xl animate-pulse">&lt;/&gt;</div>
            <div className="absolute bottom-20 right-20 text-cyan-500 text-6xl animate-pulse" style={{ animationDelay: '0.5s' }}>JS</div>
            <div className="absolute bottom-40 left-40 text-cyan-500 text-5xl animate-pulse" style={{ animationDelay: '1s' }}>{"{ }"}</div>
            <div className="absolute top-40 right-40 text-cyan-500 text-5xl animate-pulse" style={{ animationDelay: '1.5s' }}>&lt;/&gt;</div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-xl mb-4 text-cyan-400 transform transition-all duration-500 hover:scale-90 hover:text-cyan-300">
                Hello, I'm Atharva
              </p>
              <h1 className="text-6xl font-bold mb-6 transform transition-all duration-700 hover:scale-95">
                Crafting <span className="text-cyan-400 transition-colors duration-300 hover:text-white">seamless experiences</span> from
                <br />
                <span className="text-cyan-400 transition-colors duration-300 hover:text-white">frontend </span>
                beauty to
                <span className="text-cyan-400 transition-colors duration-300 hover:text-white"> backend</span> power.
              </h1>

              <p className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto transition-all duration-300 hover:text-white">
                With passion, love, and enthusiasm for technology, I embrace innovation and problem-solving every day.
              </p>

              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a
                  href="#contact"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/30"
                >
                  Contact Me
                </a>
                <a
                  href="https://drive.google.com/uc?export=download&id=1KhA0HUCPtWtt72rtRIsS25XSWGHq0JYV"
                  className="border border-gray-600 text-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-800 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <Download size={18} className="mr-2 group-hover:animate-bounce" /> Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg mb-6 text-gray-300">
                Hi, I'm <span className="font-semibold text-cyan-400">Atharva Kakade</span>, an aspiring full-stack developer passionate about building scalable and efficient applications.
                Currently, I'm pursuing my Master’s in Computer Applications at <span className="font-semibold text-cyan-400">Savitribai Phule Pune University</span>,
                where I refine my skills in Java development, Spring Boot, and frontend technologies like React and Tailwind CSS.
              </p>
              <p className="text-lg mb-6 text-gray-300">
                With fluency in Spring Boot, Hibernate, REST APIs, and web development, I strive to bridge the gap between backend efficiency and frontend aesthetics.
                My focus is on crafting seamless digital experiences while continuously improving my problem-solving skills in data structures and algorithms (DSA).
              </p>
              <p className="text-lg mb-6 text-gray-300">
                As part of my internship at <span className="font-semibold text-cyan-400">MyndNova Solutions</span>, I’m working on a Learning Management System (LMS),
                gaining hands-on experience in designing and developing robust educational platforms.
              </p>
              <p className="text-lg text-cyan-400 font-semibold">
                Where Passion Meets Precision in Code. 🚀
              </p>

            </div>
          </div>
        </section>

        {/* Education Experience Section */}
<section id="experience" className="py-20 bg-gray-900">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-12 text-center">Work Exp & Education</h2>

    <div className="max-w-3xl mx-auto space-y-12">
      {/* Experience Item 1 */}
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-cyan-400">Software Engineer Intern</h3>
            <p className="text-lg font-medium text-gray-300">MyndNova Solutions</p>
          </div>
          <p className="text-gray-400 mt-1 md:mt-0">Dec 2024 - Present</p>
        </div>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>Working as part of a team to develop a scalable Learning Management System (LMS) for efficient educational content delivery</li>
          <li>Contributing to designing and implementing key system features, ensuring smooth functionality and user experience.</li>
          <li>Collaborating with cross-functional teams to understand requirements and translate them into effective technical solutions.</li>
          <li>Assisting in documenting system architecture and processes, improving knowledge sharing within the team.</li>
        </ul>
      </div>

      {/* Education Item 2 */}
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-cyan-400">Master in Computer Applications</h3>
            <p className="text-lg font-medium text-gray-300">Savitribai Phule Pune University</p>
          </div>
          <p className="text-gray-400 mt-1 md:mt-0">Aug 2023 - April 2025</p>
        </div>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>Currently pursuing a Master’s degree with a focus on software development, data structures, and web technologies.</li>
          <li>Engaging in hands-on projects and coursework to strengthen problem-solving and programming skills.</li>
          <li>Exploring modern development frameworks and tools to build scalable applications.</li>
        </ul>
      </div>

      {/* Education Item 3 */}
      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-cyan-400">Bachelor of Computer Science</h3>
            <p className="text-lg font-medium text-gray-300">Savitribai Phule Pune University</p>
          </div>
          <p className="text-gray-400 mt-1 md:mt-0">Jun 2020 - May 2023</p>
        </div>
        <ul className="list-disc pl-5 space-y-2 text-gray-300">
          <li>Completed coursework in fundamental programming, database management, and software engineering.</li>
          <li>Developed a strong foundation in object-oriented programming and algorithmic problem-solving.</li>
        </ul>
      </div>
    </div>
  </div>
</section>


        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 transition-all duration-300 transform hover:scale-102 hover:shadow-lg hover:shadow-cyan-400/20 hover:border-cyan-400 group">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300">E-commerce Platform</h3>
                  <p className="text-gray-300 mb-4">A fully functional e-commerce backend with product management, cart operations, and order processing, designed to support seamless integration with a frontend and payment gateway.</p>
                  <p className="text-gray-400 mb-4 text-sm">Java • Spring Boot • Hibernate • MySQL</p>
                  <div className="flex space-x-3">
                    <a href="https://github.com/AtharvaKakade/ECommerce-site" className="text-cyan-400 hover:text-cyan-300 flex items-center transition-all duration-200 hover:translate-y-1">
                      <Github size={18} className="mr-1" /> Code
                    </a>
                    {/* <a href="" className="text-cyan-400 hover:text-cyan-300 flex items-center">
              <ExternalLink size={18} className="mr-1" /> Live Demo
            </a> */}
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 transition-all duration-300 transform hover:scale-102 hover:shadow-lg hover:shadow-cyan-400/20 hover:border-cyan-400 group">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300">URL Shortener</h3>
                  <p className="text-gray-300 mb-4">A Java-based URL Shortener built with Spring Boot, enabling anonymous and custom URL creation with authentication, validation, and database integration.</p>
                  <p className="text-gray-400 mb-4 text-sm">Spring Boot • React • HTML5 • CSS3</p>
                  <div className="flex space-x-3">
                    <a href="https://github.com/AtharvaKakade/URL-Shortener" className="text-cyan-400 hover:text-cyan-300 flex items-center transition-all duration-200 hover:translate-y-1">
                      <Github size={18} className="mr-1" /> Code
                    </a>
                    {/* <a href="#" className="text-cyan-400 hover:text-cyan-300 flex items-center">
              <ExternalLink size={18} className="mr-1" /> Live Demo
            </a> */}
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700 transition-all duration-300 transform hover:scale-102 hover:shadow-lg hover:shadow-cyan-400/20 hover:border-cyan-400 group">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300">Banking Application (Currently working)</h3>
                  <p className="text-gray-300 mb-4">A comprehensive Banking Application with secure account management, seamless transactions, and robust user authentication, ensuring efficiency and scalability.</p>
                  <p className="text-gray-400 mb-4 text-sm">Spring Boot • Angular • Hibernate • HTML&CSS</p>
                  <div className="flex space-x-3">
                    <a href="https://github.com/AtharvaKakade/Banking-Application" className="text-cyan-400 hover:text-cyan-300 flex items-center transition-all duration-200 hover:translate-y-1">
                      <Github size={18} className="mr-1" /> Code
                    </a>
                    {/* <a href="#" className="text-cyan-400 hover:text-cyan-300 flex items-center">
              <ExternalLink size={18} className="mr-1" /> Live Demo
            </a> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a href="https://github.com/AtharvaKakade" className="inline-block bg-cyan-500 text-white px-6 py-3 rounded-md font-medium hover:bg-cyan-600 transition-colors hover:shadow-md hover:shadow-cyan-500/30 transform hover:-translate-y-1 transition-transform duration-300">
                View All Projects
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Frontend */}
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 transform transition duration-300 hover:scale-105 hover:bg-gray-750 hover:shadow-lg hover:shadow-cyan-400/20 hover:border-cyan-400">
                  <h3 className="text-lg font-bold mb-4 text-cyan-400">Frontend</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="transition-colors duration-200 hover:text-white">HTML5 & CSS3</li>
                    <li className="transition-colors duration-200 hover:text-white">JavaScript (ES6+)</li>
                    <li className="transition-colors duration-200 hover:text-white">React</li>
                    <li className="transition-colors duration-200 hover:text-white">Bootstrap</li>
                    <li className="transition-colors duration-200 hover:text-white">Tailwind CSS</li>
                    <li className="transition-colors duration-200 hover:text-white">TypeScript</li>
                  </ul>
                </div>

                {/* Backend */}
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 transform transition duration-300 hover:scale-105 hover:bg-gray-750 hover:shadow-lg hover:shadow-cyan-400/20 hover:border-cyan-400">
                  <h3 className="text-lg font-bold mb-4 text-cyan-400">Backend</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="transition-colors duration-200 hover:text-white">Spring Boot</li>
                    <li className="transition-colors duration-200 hover:text-white">Hibernate</li>
                    <li className="transition-colors duration-200 hover:text-white">Microservices</li>
                    <li className="transition-colors duration-200 hover:text-white">RESTful APIs</li>
                    <li className="transition-colors duration-200 hover:text-white">Python</li>
                    <li className="transition-colors duration-200 hover:text-white">PHP</li>
                  </ul>
                </div>

                {/* Database */}
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 transform transition duration-300 hover:scale-105 hover:bg-gray-750 hover:shadow-lg hover:shadow-cyan-400/20 hover:border-cyan-400">
                  <h3 className="text-lg font-bold mb-4 text-cyan-400">Database</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="transition-colors duration-200 hover:text-white">MongoDB</li>
                    <li className="transition-colors duration-200 hover:text-white">MySQL</li>
                    <li className="transition-colors duration-200 hover:text-white">PostgreSQL</li>
                  </ul>
                </div>

                {/* DevOps & Tools */}
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 transform transition duration-300 hover:scale-105 hover:bg-gray-750 hover:shadow-lg hover:shadow-cyan-400/20 hover:border-cyan-400">
                  <h3 className="text-lg font-bold mb-4 text-cyan-400">DevOps & Tools</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="transition-colors duration-200 hover:text-white">Git & GitHub</li>
                    <li className="transition-colors duration-200 hover:text-white">Docker</li>
                    {/* <li className="transition-colors duration-200 hover:text-white">CI/CD</li> */}
                  </ul>
                </div>

                {/* UI/UX */}
                <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 transform transition duration-300 hover:scale-105 hover:bg-gray-750 hover:shadow-lg hover:shadow-cyan-400/20 hover:border-cyan-400">
                  <h3 className="text-lg font-bold mb-4 text-cyan-400">Design</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="transition-colors duration-200 hover:text-white">Framer</li>
                    <li className="transition-colors duration-200 hover:text-white">Figma</li>
                    <li className="transition-colors duration-200 hover:text-white">Canva</li>
                    <li className="transition-colors duration-200 hover:text-white">Adobe Photoshop</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>

            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-center mb-8 text-gray-300">
                I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi,
                I'll do my best to get back to you!
              </p>

              <div className="flex justify-center space-x-6 mb-12">
                <a href="mailto:john.doe@example.com" className="flex items-center text-cyan-400 hover:text-cyan-300">
                  <Mail size={24} className="mr-2" /> kakadeatharva5@gmail.com
                </a>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-cyan-500 text-white px-6 py-3 rounded-md font-medium hover:bg-cyan-600 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-xl font-bold">Atharva Kakade</p>
              <p className="text-gray-400">Software Engineer</p>
            </div>

            <div className="flex space-x-6">
              <a href="https://github.com/AtharvaKakade" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/atharvakakade" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:kakadeatharva5@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Atharva Kakade</p>
            <p className="mt-2">Made with ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;