import WeightedSumModel from '../assets/wsm.png';
import OOT from '../assets/oot.jpg';

export default function Projects() {
  return (
    <section id='projects' className='py-20 px-4 bg-card/50'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-bold mb-12 text-balance'>Projetos e Interesses</h2>

        <div className='mb-16'>
          <h3 className='text-2xl font-semibold text-primary mb-8'>Projetos em Destaque</h3>
          <div className='space-y-12'>
            <Project
              title='Modelo de Soma Ponderada'
              description='Aplicação web desenhada para funcionar totalmente offline, permitindo aos utilizadores aplicar um modelo de classificação. Ideal para tomar decisões multicritério.'
              tags={[
                'React',
                'TypeScript',
                'Tailwind CSS',
                'Clean Architecture',
                'DDD',
                'MVP Pattern',
              ]}
              image={WeightedSumModel}
              demo='https://tjratings.vercel.app/'
              code='https://github.com/TiagoJacinto/ratings'
            />
            <Project
              title='OOT Obsidian Plugin'
              description='Adiciona funcionalidades de Programação Orientada a Objetos ao Obsidian, permitindo aos utilizadores estruturar as suas notas e conhecimentos de uma forma forma diferente.'
              tags={['TypeScript', 'CSS']}
              image={OOT}
              code='https://github.com/TiagoJacinto/obsidian-object-oriented-thinking'
            />
          </div>
        </div>

        <div>
          <h3 className='text-2xl font-semibold text-primary mb-6'>Interesses</h3>
          <div className='flex flex-wrap gap-3'>
            <Interest interest='Machine Learning' />
            <Interest interest='Software Design' />
            <Interest interest='Clean Architecture' />
            <Interest interest='DDD' />
            <Interest interest='DevOps' />
            <Interest interest='Xadrez' />
            <Interest interest='Chás e Infusões' />
          </div>
        </div>
      </div>
    </section>
  );
}

type ProjectProps = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  demo?: string;
  code: string;
};

function Project({ title, description, tags, image, demo, code }: ProjectProps) {
  return (
    <div className={`flex flex-col odd:md:flex-row-reverse md:flex-row gap-8 items-center`}>
      <div className='flex-1'>
        <h4 className='text-2xl font-semibold mb-3 text-foreground'>{title}</h4>
        <p className='text-muted-foreground mb-4 leading-relaxed'>{description}</p>

        <div className='flex flex-wrap gap-2 mb-6'>
          {tags.map((tag, jdx) => (
            <span
              key={jdx}
              className='px-3 py-1 text-xs bg-primary/10 text-primary rounded border border-primary/20'
            >
              {tag}
            </span>
          ))}
        </div>

        <div className='flex gap-3'>
          {Boolean(demo) && (
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={demo}
              className='px-4 py-2 bg-primary text-background rounded font-medium hover:opacity-90 transition-opacity'
            >
              Demo
            </a>
          )}

          <a
            target='_blank'
            rel='noopener noreferrer'
            href={code}
            className='px-4 py-2 bg-transparent border border-foreground text-foreground rounded font-medium hover:bg-foreground hover:text-background transition-colors'
          >
            Código
          </a>
        </div>
      </div>

      <div className='flex-1'>
        <img
          src={image || '/placeholder.svg'}
          alt={title}
          className='w-full h-auto rounded-lg border border-border'
        />
      </div>
    </div>
  );
}

type InterestProps = {
  interest: string;
};

function Interest({ interest }: InterestProps) {
  return (
    <span className='px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20'>
      {interest}
    </span>
  );
}
