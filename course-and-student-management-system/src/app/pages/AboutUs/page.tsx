import React from 'react';
interface partnerI {
  name: string;
  rol: string;
  image: string;
  github?: string;
  linkedin?: string;
}
export const metadata = {
  title: 'Sobre nosotros',
};
const partners: partnerI[] = [
  {
    name: 'Juan Pablo Rodriguez',
    rol: 'Frontend',
    image: 'https://ca.slack-edge.com/T051HRPFF52-U0520JXHHPT-509a897e1533-512',
    linkedin: 'https://www.linkedin.com/in/juanpablopiñero/',
    github: 'https://github.com/krosul',
  },
  {
    name: 'Andres Felipe Peña',
    rol: 'Frontend',
    image: 'https://ca.slack-edge.com/T051HRPFF52-U051BNL1KQW-e62632523c04-512',
    linkedin: 'https://www.linkedin.com/in/andres-felipe-pe%C3%B1a-mu%C3%B1oz-9b6725159',
    github: 'https://github.com/Andres-PeMu',
  },
  {
    name: 'Brayan Angulo',
    rol: 'Backend',
    image: 'https://ca.slack-edge.com/T051HRPFF52-U051FCDNHM3-0cf5912896f2-512',
    linkedin: 'https://www.linkedin.com/in/brayan-angulo-05088318a',
  },
  {
    name: 'Daniel Chachagua',
    rol: 'Backend',
    image: 'https://ca.slack-edge.com/T051HRPFF52-U051JAYGFSN-g2476aa35a73-512',
  },
];
const page = () => {
  return (
    <div className="bg-neutral-100 h-[98vh] flex flex-col items-center">
      <h1 className="font-semibold text-4xl text-neutral-950 mt-5">Sobre nosotros</h1>
      <section className="flex gap-2 h-full items-start mt-16">
        {partners.map((p, index) => (
          <div key={index} className="  text-neutral-200 bg-gray-800 p-5 rounded-xl px-9 flex flex-col items-center gap-1 w-[265px] h-fit">
            <img src={p.image} alt="profile pic" className="rounded-full w-24" />
            <h3 className="font-semibold text-lg">{p.name}</h3>
            <h4 className="font-medium">{p.rol}</h4>
            <div className="flex gap-3 pt-1">
              {p.github && (
                <a href={p.github} target="_blank">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-9 hover:fill-neutral-200 transition-all duration-300">
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              )}
              {p.linkedin && (
                <a href={p.linkedin} target="_blank">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-9 hover:fill-neutral-200 transition-all duration-300">
                    <title>LinkedIn</title>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default page;
