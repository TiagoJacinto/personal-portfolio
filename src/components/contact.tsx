import type React from 'react';
import { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id='contact' className='py-20 px-4'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-bold mb-16 text-balance'>Entrar em Contacto</h2>

        <div className='grid md:grid-cols-2 gap-12'>
          <form action='https://formspree.io/f/meqdqagd' method='POST' className='space-y-6'>
            <div>
              <label className='block text-foreground font-medium mb-2' htmlFor='name'>
                Nome:
              </label>
              <input
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                className='w-full bg-transparent border-b-2 border-r-2 border-primary py-2 pb-2 pr-4 focus:outline-none focus:border-primary text-foreground placeholder-muted-foreground'
                placeholder=''
              />
            </div>

            <div>
              <label className='block text-foreground font-medium mb-2' htmlFor='email'>
                Email:
              </label>
              <input
                id='email'
                name='email'
                type='email'
                value={formData.email}
                onChange={handleChange}
                required
                className='w-full bg-transparent border-b-2 border-r-2 border-primary py-2 pb-2 pr-4 focus:outline-none focus:border-primary text-foreground placeholder-muted-foreground'
                placeholder=''
              />
            </div>

            <div>
              <label className='block text-foreground font-medium mb-2' htmlFor='message'>
                Mensagem:
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className='w-full bg-transparent border-b-2 border-r-2 border-primary py-2 pb-2 pr-4 focus:outline-none focus:border-primary text-foreground placeholder-muted-foreground resize-none'
                placeholder=''
              />
            </div>

            <button
              type='submit'
              className='cursor-pointer px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors'
            >
              Enviar Email
            </button>
          </form>

          <div className='flex flex-col items-center justify-center space-y-8 text-center'>
            <div>
              <p className='text-muted-foreground mb-3'>Escreva-me um e-mail para:</p>
              <a
                href='mailto:tiagojacintodev@gmail.com'
                className='text-2xl md:text-3xl font-bold text-foreground hover:text-muted-foreground transition-colors'
              >
                tiagojacintodev@gmail.com
              </a>
            </div>

            <p className='text-muted-foreground text-lg'>OU</p>

            <div>
              <p className='text-muted-foreground mb-6'>
                Entre em contacto através das redes sociais:
              </p>
              <div className='flex gap-6 justify-center'>
                <a
                  href='https://www.linkedin.com/in/tiagojacintodev'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-foreground hover:text-muted-foreground transition-colors'
                  aria-label='LinkedIn'
                >
                  <FaLinkedin size={48} />
                </a>
                <a
                  href='https://github.com/tiagojacinto'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-foreground hover:text-muted-foreground transition-colors'
                  aria-label='GitHub'
                >
                  <FaGithub size={48} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
