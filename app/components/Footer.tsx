const Footer: React.FC = () => {
    return (
      <footer className="text-white pt-4 pb-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between text-center items-center space-y-4 md:space-y-0">
            <div className="text-2xl font-bold">
                <span className="text-primary">Bairon</span>
                <span className="animate-[colorCycle_3s_infinite]">Dev</span>
            </div>
  
            <div className="text-sm text-gray-400">
                <p>&copy; 2024 BaironDev. Fuente Usada: Inter</p>
                <p>baironbotero15@gmail.com | +57 3136321297</p>
            </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;  