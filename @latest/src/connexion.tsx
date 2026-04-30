import foret from './assets/foret.jpg'; 
   export default function Connexion() {
  return (
    <div
      className="min-h-screen flex items-center justify-center  bg-cover bg-center relative"
      style={{ backgroundImage: `url(${foret})` }} 
    >

      {/* overlay pour assombrir l'image */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="w-[700px] h-[500px] flex relative">

        {/* GAUCHE */}
        <div className="w-1/2 bg-white"></div>

        {/* DROITE */}
        <div className="w-1/2 bg-[#DBAE64]"></div>

        {/* FORMULAIRE CENTRÉ ENTRE LES DEUX */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] p-8">

          <h2 className="text-center mb-6 font-bold bg-gray-200 py-2 px-2 inline-block ml-16">
            Bienvenue !
          </h2>

          <div className="mb-4">
            <label>name</label>
            <input type="text" placeholder="KARTER"
              className="w-full p-2 bg-black text-yellow-400" />
          </div>

          <div className="mb-4">
            <label>firstname</label>
            <input type="text" placeholder="James"
              className="w-full p-2 bg-black text-yellow-400" />
          </div>

          <div className="mb-4">
            <label>Email</label>
            <input type="email" placeholder="james@gmail.com"
              className="w-full p-2 bg-black text-yellow-400" />
          </div>

          <div className="mb-4">
            <label>Password</label>
            <input type="password" placeholder="********"
              className="w-full p-2 bg-black text-yellow-400" />
          </div>

          <button className="w-full bg-[#D79732] py-2 mt-4">
            SE CONNECTER
          </button>

          <p className="text-center text-xs mt-2">
            PAS DE COMPTE ? S'INSCRIRE
          </p>

        </div>

      </div>
    </div>
  );
}