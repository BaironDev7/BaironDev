const Contact: React.FC = () => {
    return (
      <section id="Contacto" className="text-white p-5">
        <div className="lg:max-w-4xl sm:max-w-lg flex flex-col items-center mx-auto">
          <h2 className="text-3xl text-primary font-semibold mb-6">Contacta Conmigo:</h2>
          <p className="text-center text-base text-secondary max-w-md">Actualmente me encuentro en busqueda de oportunidades y siempre mi bandeja de entrada esta disponible. Si quieres comunicarte conmigo, haré lo posible por contestarte.</p>
          <a href="mailto:baironbotero15@gmail.com" className="bg-green-700 p-2 rounded-md hover:bg-green-600 transition duration-500 max-w-40 m-10">Contáctame</a>
        </div>

        <div className="lg:max-w-4xl sm:max-w-lg mx-auto h-[2px] w-full bg-gradient-to-r from-transparent via-secondary to-transparent" />
      </section>
    );
  };
  
  export default Contact;
  