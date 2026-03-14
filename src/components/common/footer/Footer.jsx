/* Footer navLinks */
const navItems = [
  { id: 1, name: "Home", url: "home" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Skills", url: "skills" },
  { id: 4, name: "Projects", url: "projects" }, 
  { id: 5, name: "Contact", url: "contact" },
];

const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white pt-16 md:pt-24">
      <div className="content max-2xl:px-3 flex max-md:flex-col justify-between items-center w-full text-neutral-200">
        
        {/* Text Logo */}
        <a href="#" className="flex items-center mb-6 max-md:mb-4">
          <p className="text-2xl sm:text-3xl font-semibold">Chamasha Fernando</p>
        </a>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center mx-7 max-md:my-4 gap-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.url}`}
              className="relative group text-[14px] sm:text-[16px] hover:text-pink-500 transition-colors duration-300"
            >
              {item.name}

              <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 transform group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-[12px] sm:text-[16px] mt-6 max-md:mt-0 text-center">
          &copy; {copyrightYear} Chamasha Fernando
        </p>
      </div>

      <p className="text-gray-400 text-center text-[12px] sm:text-[14px] mt-10 pb-6">
        Developed with <span className="text-pink-500 font-bold">❤️</span> by{" "}
        <span className="font-semibold">Chamasha Fernando</span>
      </p>
    </footer>
  );
};

export default Footer;