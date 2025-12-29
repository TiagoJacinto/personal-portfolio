import CSharp from '../assets/c-sharp-c.svg';
import JavaScript from '../assets/icons8-javascript.svg';
import TypesScript from '../assets/icons8-typescript.svg';
import CSS from '../assets/icons8-css3.svg';
import HTML from '../assets/icons8-html-5.svg';
import Git from '../assets/icons8-git.svg';
import GitHub from '../assets/icons8-github.svg';
import Figma from '../assets/icons8-figma.svg';
import Linux from '../assets/linux.png';
import React from '../assets/icons8-react-native.svg';
import Tailwind from '../assets/icons8-tailwind-css.svg';
import Firebase from '../assets/icons8-firebase.svg';
import Jest from '../assets/jest-logo-svg-vector.svg';
import NodeJS from '../assets/icons8-node-js.svg';
import Express from '../assets/icons8-express-js.svg';
import MongoDB from '../assets/icons8-mongodb.svg';
import PostgreSQL from '../assets/icons8-postgresql.svg';
import Python from '../assets/icons8-python.svg';
import SQL from '../assets/icons8-sql.png';
import NextJS from '../assets/icons8-nextjs.svg';
import Docker from '../assets/icons8-docker.png';
import Java from '../assets/icons8-java.svg';

export default function Skills() {
  return (
    <section id='skills' className='py-20 px-4'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-bold mb-16 text-balance'>Competências</h2>

        <div className='mb-16 space-y-12'>
          <SkillCategory category='Linguagens de Programação'>
            <Skill name='HTML' img={HTML} />
            <Skill name='CSS' img={CSS} />
            <Skill name='JavaScript' img={JavaScript} />
            <Skill name='TypeScript' img={TypesScript} />
            <Skill name='Python' img={Python} />
            <Skill name='C#' img={CSharp} />
            <Skill name='Java' img={Java} />
            <Skill name='SQL' img={SQL} />
          </SkillCategory>

          <SkillCategory category='Frameworks e Bibliotecas'>
            <Skill name='React' img={React} />
            <Skill name='Next.js' img={NextJS} />
            <Skill name='Node.js' img={NodeJS} />
            <Skill name='Tailwind CSS' img={Tailwind} />
            <Skill name='Express' img={Express} />
            <Skill name='Jest' img={Jest} />
          </SkillCategory>

          <SkillCategory category='Bancos de Dados'>
            <Skill name='MongoDB' img={MongoDB} />
            <Skill name='PostgreSQL' img={PostgreSQL} />
            <Skill name='Firebase' img={Firebase} />
          </SkillCategory>

          <SkillCategory category='Ferramentas e DevOps'>
            <Skill name='Git' img={Git} />
            <Skill name='Docker' img={Docker} />
            <Skill name='GitHub' img={GitHub} />
            <Skill name='Linux' img={Linux} />
            <Skill name='Figma' img={Figma} />
          </SkillCategory>
        </div>

        <div className='space-y-6'>
          <h3 className='text-2xl font-bold text-foreground'>Competências Pessoais</h3>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
            <PersonalSkill name='Colaboração' />
            <PersonalSkill name='Organização' />
            <PersonalSkill name='Metodologia' />
            <PersonalSkill name='Pensamento Analítico' />
          </div>
        </div>
      </div>
    </section>
  );
}

type SkillCategoryProps = {
  category: string;
  children: React.ReactNode;
};

function SkillCategory({ category, children }: SkillCategoryProps) {
  return (
    <div className='space-y-6'>
      <h3 className='text-2xl font-bold text-foreground'>{category}</h3>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8'>
        {children}
      </div>
    </div>
  );
}

type SkillProps = {
  name: string;
  img: string;
};

function Skill({ name, img }: SkillProps) {
  return (
    <div className='flex flex-col items-center gap-3'>
      <div className='text-5xl md:text-6xl h-16 md:h-20 flex items-center justify-center'>
        <img width={62} height={62} src={img} />
      </div>
      <p className='text-center text-sm md:text-base font-medium text-foreground'>{name}</p>
    </div>
  );
}

type PersonalSkillProps = {
  name: string;
};

function PersonalSkill({ name }: PersonalSkillProps) {
  return (
    <div className='p-4 bg-card border border-border rounded-lg text-center hover:border-primary transition-colors'>
      <p className='font-medium text-foreground'>{name}</p>
    </div>
  );
}
