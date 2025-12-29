export default function Academic() {
  return (
    <section id='academic' className='py-20 px-4'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-bold mb-12 text-balance'>Formação Académica</h2>

        <div className='space-y-6'>
          <Education
            degree='Curso Técnico Superior Profissional em Programação de Sistemas de Informação'
            school='ESTGA-UA'
            year='2025 - 2027 (em curso)'
          />
        </div>
      </div>
    </section>
  );
}

type EducationProps = {
  degree: string;
  school: string;
  year: string;
};

function Education({ degree, school, year }: EducationProps) {
  return (
    <div className='border-l-2 border-primary pl-6 pb-2'>
      <h4 className='text-lg font-semibold'>{degree}</h4>
      <p className='text-primary font-medium'>{school}</p>
      <p className='text-sm text-muted-foreground'>{year}</p>
    </div>
  );
}
