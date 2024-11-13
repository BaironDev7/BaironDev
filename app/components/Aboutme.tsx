import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section id="Sobremi" className="text-secondary lg:p-8">
      <div className="max-w-lg mx-auto">
        <p className="mb-4 text-base">
          Joven desarrollador Web, apasionado por la tecnología y la innovación, me especializo en desarrollar aplicaciones web modernas utilizando herramientas de vanguardia como <span className="text-primary">React</span>, <span className="text-primary">Next.Js</span>, <span className="text-primary">Vue.Js</span> y <span className="text-primary">TailwindCss</span>. A lo largo de mi trayectoria, he trabajado en proyectos de <span className="text-primary">frontend</span> y <span className="text-primary">backend</span>, dominando lenguajes como <span className="text-primary">PHP</span> y <span className="text-primary">MySQL</span>, lo que ha fortalecido mi capacidad para enfrentar desafíos y adaptarme a las nuevas tecnologías.
        </p>
        <p className="mb-4 text-base">
          Mi objetivo es siempre crear aplicaciones que se distingan por su <span className="text-primary">eficiencia</span>, <span className="text-primary">accesibilidad</span> y una experiencia de usuario <span className="text-primary">sobresaliente</span>, acompañadas de un diseño moderno que deje una impresión duradera. Disfruto colaborar con equipos multidisciplinarios para desarrollar soluciones innovadoras que respondan fielmente a las necesidades del usuario y superen sus <span className="text-primary">expectativas</span>.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
