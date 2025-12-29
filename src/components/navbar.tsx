import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: 'about', label: 'Sobre Mim' },
    { id: 'academic', label: 'Formação Académica' },
    { id: 'experience', label: 'Experiência Profissional' },
    { id: 'skills', label: 'Competências' },
    { id: 'projects', label: 'Projetos' },
    { id: 'contact', label: 'Contacto' },
  ];

  return (
    <nav className='bg-background border-b border-border'>
      <div className='hidden max-w-6xl mx-auto px-4 py-4 md:flex items-center justify-center gap-1'>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className='cursor-pointer px-3 py-2 rounded-md text-sm font-medium transition-colors text-foreground border border-transparent hover:border-primary'
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className='max-w-6xl mx-auto px-4 py-4 flex md:hidden items-center justify-start'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='cursor-pointer flex flex-col gap-1.5 p-2'
        >
          <div
            className={`w-6 h-0.5 bg-foreground transition-all ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <div className={`w-6 h-0.5 bg-foreground transition-all ${isOpen ? 'opacity-0' : ''}`} />
          <div
            className={`w-6 h-0.5 bg-foreground transition-all ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <div className='md:hidden border-t border-border bg-card'>
          <div className='px-4 py-2 space-y-1'>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className='cursor-pointer w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors text-foreground border border-transparent hover:border-primary'
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
