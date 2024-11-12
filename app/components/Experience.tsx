import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="Experiencia" className="text-white p-5 lg:mb-10">
      <div className="lg:max-w-4xl sm:max-w-lg mx-auto">
        <h2 className="text-3xl text-primary font-semibold mb-4">Experiencia</h2>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl text-primary font-bold">Experiencia Profesional:</h2>
            <h3 className="text-lg text-primary font-medium">Desarrollador de Sofware - Accenture</h3>
            <p className="text-secondary text-base">Febrero 2024 - Agosto 2024</p>
            <p className="mt-2 text-base flex text-secondary">
                <span className="h-1 w-8 m-3 rounded-2xl bg-primary"></span>
                Desarrolle una aplicación usando Power Apps, integrando la suite de Power Platform, incluyendo
                SharePoint, Power BI y Power Automate, para mejorar el proceso de estimaciones de la empresa.
            </p>
            <p className="mt-2 text-base flex text-secondary">
                <span className="h-1 w-8 m-3 rounded-2xl bg-primary"></span>
                Realicé consultas y ajustes en la base de datos utilizando PL-SQL, creando bloques anónimos y
                scripts para extraer, modificar y gestionar datos según las necesidades de la iniciativa.
            </p>
            <p className="mt-2 text-base flex text-secondary">
                <span className="h-1 w-9 m-3 rounded-2xl bg-primary"></span>
                Coordiné y participé en reuniones con diversos equipos brindando orientación sobre el
                funcionamiento y observando el progreso de sus iniciativas y asegurar el avance en los escaneos de
                código mediante SonarQube.
            </p>
            <div className="flex flex-wrap lg:ml-10 mt-5 gap-3">
                <div className="flex items-center rounded-full bg-purple-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-purple-300">Power/Platform</div>
                <div className="flex items-center rounded-full bg-red-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-red-300">PL/SQL</div>
                <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-orange-300">Remedy</div>
                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-teal-300 ">SonarQube</div>
            </div>
          </div>

          <div>
            <h2 className="text-xl text-primary font-bold">Proyectos en los que he colaborado:</h2>
            <h3 className="text-lg text-primary font-medium">Comercio Electrónico Minero - MinEcommerce</h3>
            <p className="text-secondary text-base">Junio 2023 - Noviembre 2023</p>
            <p className="mt-2 text-base flex text-secondary">
                <span className="h-1 w-8 m-3 rounded-2xl bg-primary"></span>
                Desarrollé un comercio electrónico enfocado en la principal economía del municipio, para facilitar
                la adquisición de insumos por parte de pequeños y grandes mineros.
            </p>
            <p className="mt-2 text-base flex text-secondary">
                <span className="h-1 w-8 m-3 rounded-2xl bg-primary"></span>
                Implementé la base de datos en MySQL, realizando pruebas locales con XAMPP para validar su
                funcionamiento antes de proceder con el despliegue en un servidor de producción.
            </p>
            <div className="flex flex-wrap lg:ml-10 mt-5 gap-3">
              <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-blue-300">PHP</div>
              <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-orange-300">HTML</div>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-teal-300">CSS</div>
              <div className="flex items-center rounded-full bg-yellow-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-yellow-300">JavaScript</div>
              <div className="flex items-center rounded-full bg-red-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-red-300">XAMPP</div>
              <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-sky-300">MySql</div>
              <div className="flex items-center rounded-full bg-amber-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-amber-300">FileZilla</div>
            </div>

          </div>

          <div>
            <h3 className="text-lg text-primary font-medium">Red Social - SenaSocial</h3>
            <p className="text-secondary text-base">Mayo 2019 - Noviembre 2019</p>
            <p className="mt-2 text-base flex text-secondary">
                <span className="h-1 w-9 m-3 rounded-2xl bg-primary"></span>
                Desarrollé una red social para estudiantes del SENA en 2019 utilizando PHP nativo y JavaScript,
                incorporando funcionalidades como mensajería instantánea, personalización de perfiles,
                publicaciones, reacciones y comentarios.
            </p>
            <div className="flex flex-wrap lg:ml-10 mt-5 gap-3">
              <div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-blue-300">PHP</div>
              <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-orange-300">HTML</div>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-teal-300">CSS</div>
              <div className="flex items-center rounded-full bg-yellow-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-yellow-300">JavaScript</div>
              <div className="flex items-center rounded-full bg-red-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-red-300">XAMPP</div>
              <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-sky-300">MySql</div>
              <div className="flex items-center rounded-full bg-amber-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium leading-5 text-amber-300">FileZilla</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;