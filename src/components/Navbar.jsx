import { AlignJustify, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logoRef = useRef(null);
  const navItemsRef = useRef([]);
  const mobileNavItemsRef = useRef([]);

  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .from(logoRef.current, {
        duration: 0.5,
        ease: 'power2.out'
      })
      .from(navItemsRef.current, {
        x: -20,
        duration: 0.5,
        stagger: 0.2,
      }, "-=0.3");

    if (isOpen) {
      gsap.from(mobileNavItemsRef.current, {
        duration: 0.5,
        stagger: 0.2,
      });
    }
  }, [isOpen]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "About Us", href: "#about" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <nav className={`fixed flex justify-between items-center top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-white px-12 py-4 ${isOpen ? 'bg-opacity-95' : 'bg-opacity-100'}`}>
      <div ref={logoRef}>
        <Logo />
      </div>
      <div className='hidden lg:flex space-x-8' id="nav-part2">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            ref={(el) => (navItemsRef.current[index] = el)}
            className='nav-item text-xl font-bold text-white  hover:text-red-600 hover:underline decoration-2 underline-offset-8  font-[Oswald] duration-500'
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className='lg:hidden'>
        <button onClick={toggleNavbar}>
          {isOpen ? <X className="text-gray-600" /> : <AlignJustify className="text-gray-600" />}
        </button>
      </div>
      {isOpen && (
        <div className='lg:hidden fixed top-0 bottom-0 right-0 z-50 bg-neutral-900 opacity-95 w-60 h-screen p-12 flex flex-col justify-center items-center'>
          <button onClick={toggleNavbar} className="absolute top-4 right-4">
            <X className="text-white" />
          </button>
          <ul id="nav-part2">
            {navItems.map((item, index) => (
              <li key={index} className="py-4">
                <a
                  className="nav-item text-lg text-white font-bold font-[poppins] duration-1000"
                  href={item.href}
                  ref={(el) => (mobileNavItemsRef.current[index] = el)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
