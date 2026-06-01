
import instagram from './assets/components/icons8-instagram-50.png'
import facebok from './assets/components/icons8-facebook-50.png';
import linkedin from './assets/components/icons8-linkedin-50.png';
import github from './assets/components/icons8-github-50.png';

export default function Footer() {
  return (
    <>      
    <footer className="bg-[#000000] text-white py-10 px-6 mt-30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10">

        
        <div className="flex-1">
          <h2 className="text-2xl font-serif text-[#D88838] mb-4">
            BooKing
          </h2>

          <p className="text-sm text-gray-300 max-w-sm mb-6">
            Découvrez tout un nouvel univers rempli d'aventure et de ressentis.
            Nous sommes là pour vous faire profiter des joies de la lecture.
          </p>

          
          <div className="flex gap-4 mb-6">
            <img src={instagram} alt="instagram" className="w-10 h-10 bg-[#D6B48A] p-2 rounded-full cursor-pointer" />
            <img src={facebok} alt="facebook" className="w-10 h-10 bg-[#D6B48A] p-2 rounded-full cursor-pointer" />
            <img src={linkedin} alt="linkedin" className="w-10 h-10 bg-[#D6B48A] p-2 rounded-full cursor-pointer" />
            <img src={github} alt="github" className="w-10 h-10 bg-[#D6B48A] p-2 rounded-full cursor-pointer" />
          </div>

          
          <button className="bg-[#D88838] text-black px-4 py-2 rounded hover:opacity-80 transition">
            Retour à l'accueil
          </button>
        </div>

        
        <div className="hidden md:block w-px bg-[#D88838] h-70"></div>

        
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-[#D88838]  mb-4">Site Map</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">Accueil</li>
            <li className="hover:text-white cursor-pointer">Catalogue</li>
            <li className="hover:text-white cursor-pointer">Mes Livres</li>
            <li className="hover:text-white cursor-pointer">Dashboard</li>
            <li className="hover:text-white cursor-pointer">Connexion</li>
          </ul>
        </div>
                
      </div>
    </footer>
    <div className='h-8 w-full bg-[#D88838]'></div>
    </>
  );
}
