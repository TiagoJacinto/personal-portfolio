import Profile from '../assets/tiago-profile.png';

export default function About() {
  return (
    <section id='about' className='py-20 px-4 bg-card/50'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-bold mb-12 text-balance'>Sobre Mim</h2>

        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='flex justify-center'>
            <div className='w-64 h-64 md:w-72 md:h-72 rounded-full bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden'>
              <img
                src={Profile}
                alt='Developer portrait'
                className='w-full h-full object-cover rounded-full'
              />
            </div>
          </div>

          <div className='space-y-6'>
            <p className='text-lg text-muted-foreground leading-relaxed'>
              Especializado em TypeScript, React e Node.js. Valorizo práticas e métodos de trabalho,
              colaboração e feedback, e procuro estruturar soluções com responsabilidades claras e
              entregas consistentes, apoiado em abstração e modelação de dados. Estou disponível
              para oportunidades de trabalho em qualquer tipo de regime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
