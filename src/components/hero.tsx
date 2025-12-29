import { useState } from 'react';
import HeroImg from '../assets/hero-image.svg';
import ContentLoader from 'react-content-loader';
import { cn } from '@/lib/utils';

export default function Hero() {
  return (
    <section
      id='hero'
      className='py-8 flex-1 min-h-0 flex items-center justify-center px-4 bg-linear-to-br from-background to-secondary/5 flex-col mx-auto text-center space-y-8 max-w-4xl h-full'
    >
      <div className='space-y-4'>
        <h1 className='text-4xl min-[500px]:text-5xl md:text-6xl font-bold text-balance'>
          Olá, sou o Tiago | <span className='text-primary'>Programador Full-Stack</span>
        </h1>
      </div>

      <div className='flex flex-col sm:flex-row gap-4 justify-center'>
        <button
          onClick={() =>
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
          }
          className='cursor-pointer px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors'
        >
          Ver projetos
        </button>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className='cursor-pointer px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors'
        >
          Entrar em contacto
        </button>
      </div>

      <HeroImage />
    </section>
  );
}

function Loader() {
  return (
    <ContentLoader
      speed={2}
      width={1041}
      height={554}
      backgroundColor='#f0f0f0'
      foregroundColor='#e0e0e0'
      viewBox='0 0 1041 554'
    >
      <rect x='0' y='0' rx='8' ry='8' width='1041' height='554' />
    </ContentLoader>
  );
}

function HeroImage() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <Loader />}
      <img
        src={HeroImg}
        alt='Tiago - Frontend Developer'
        onLoad={() => setIsLoaded(true)}
        className={cn('min-h-0', !isLoaded && 'hidden')}
      />
    </>
  );
}
