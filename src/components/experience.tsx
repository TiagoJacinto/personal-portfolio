export default function Experience() {
  return (
    <section id='experience' className='py-20 px-4 bg-card/50'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-bold mb-12 text-balance'>
          Experiência Profissional
        </h2>

        <div className='space-y-8'>
          <Job
            title='Desenvolvedor Frontend'
            company='WinPegasus'
            period='Ago 2023 - Out 2023'
            description='Contribuí para a migração do frontend de um ERP legado para uma aplicação web em React e TypeScript, integrando-a com uma API REST e garantindo paridade funcional com o sistema anterior. Aprendi a modernizar sistemas críticos de forma incremental, com foco em qualidade e colaboração com backend/negócio.'
          />
          <Job title='Serralheiro' company='CSWIND PT' period='Fev 2021 - Abr 2022' />
        </div>
      </div>
    </section>
  );
}

type JobProps = {
  title: string;
  company: string;
  period: string;
  description?: string;
};

function Job({ title, company, period, description }: JobProps) {
  return (
    <div className='border-l-4 border-primary pl-8 pb-2 relative'>
      <div className='absolute -left-4 top-0 w-7 h-7 bg-primary rounded-full border-4 border-background' />

      <h3 className='text-2xl font-semibold'>{title}</h3>
      <p className='text-primary font-medium'>{company}</p>
      <p className='text-sm text-muted-foreground mb-3'>{period}</p>
      {Boolean(description) && <p className='text-muted-foreground'>{description}</p>}
    </div>
  );
}
