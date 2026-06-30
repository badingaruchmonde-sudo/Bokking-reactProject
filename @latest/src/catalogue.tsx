import { useState } from 'react'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import img5 from './assets/img5.jpg'
import img6 from './assets/img6.jpg'
import img7 from './assets/img7.jpg'
import img8 from './assets/img8.jpg'
import Arrowdown from './assets/icons8-arrow-down-50.png'
import ImgDec from './imgDeco'
import search from './assets/icons8-search-30.png'
import Logo from './logo'
import book from './assets/icons8-storytelling-100.png'
import free from './assets/icons8-free-58.png'
import valid from './assets/icons8-approved-100.png'
import './App.css'

// ✅ Données centralisées
const livres = [
    { img: img1, titre: "Le Bel Age",                           categorie1: "Fantasy",   categorie2: "Jeunesse", note: 4 },
    { img: img2, titre: "Pitcairn : L'ile des révoltés du bounty", categorie1: "Action", categorie2: "Aventure", note: 5 },
    { img: img3, titre: "Rose & Crow",                          categorie1: "Fantasy",   categorie2: "Jeunesse", note: 3 },
    { img: img4, titre: "Etched in Wood",                       categorie1: "Fantasy",   categorie2: "Jeunesse", note: 4 },
    { img: img5, titre: "Mod-Zero",                             categorie1: "Decouverte",categorie2: "Action",   note: 3 },
    { img: img6, titre: "Scavengers Reign",                     categorie1: "Action",    categorie2: "Fantasy",  note: 5 },
    { img: img7, titre: "Negalyod",                             categorie1: "Decouverte",categorie2: "Action",   note: 4 },
    { img: img8, titre: "ClarkesWorld",                         categorie1: "Fantasy",   categorie2: "Jeunesse", note: 3 },
]

const categories = ["Action", "Aventure", "Romance", "Jeunesse", "Fable", "Science-Fiction", "Fantasy", "Horreur", "Policier", "Decouverte"]

export default function Catalogue() {
    const [filtreCategorie, setFiltreCategorie] = useState<string | null>(null)
    const [rechercheTexte, setRechercheTexte] = useState("")
    const [dropdownOuvert, setDropdownOuvert] = useState(false)

    // ✅ Filtre combiné : catégorie + recherche texte
    const livresFiltres = livres.filter((livre) => {
        const matchCategorie = filtreCategorie
            ? [livre.categorie1, livre.categorie2]
                .map(c => c.toLowerCase())
                .includes(filtreCategorie.toLowerCase())
            : true

        const matchRecherche = livre.titre
            .toLowerCase()
            .includes(rechercheTexte.toLowerCase())

        return matchCategorie && matchRecherche
    })

    return (
        <section>
            <div className='flex flex-col items-center text-center mt-30 py-auto px-auto'>
                <h1 className='text-5xl font-semibold font-serif text-[#5C3A1E]'>À propos de Nous</h1>
                <div className='flex mt-15 justify-center gap-13'>
                    <Logo image={book} des="Decouvrir" />
                    <Logo image={free} des="Gratuit" />
                    <Logo image={valid} des="Satisfait" />
                </div>
                <p className='max-w-2xl md:max-w-[60%] lg:max-w-[40%] mt-10 leading-relaxed text-gray-700 font-thin'>
                    <span className='font-bold text-[#F59127]'>Booking</span> est une interface permettant au plus grand monde d'accéder aux joies de la lecture ! Totalement gratuit, vous pouvez vous plonger
                    dans vos contes et récits favoris sans dépenser le moindre centime. De plus, nous vous tenons à jour sur les sorties de vos 
                    auteurs et autrices préférées. Sans limite d'âge, profitez d'un moment de détente en lisant vos fables préférées et bandes dessinées,
                    ou encore faites tourner vos méninges en essayant de trouver qui est le coupable avant le héros de votre roman policier favori. Lancez-vous
                    à la découverte d'un nouveau monde.
                </p>
            </div>

            <div className="flex justify-center mt-20">
                <div className="gap-x-20 mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-y-5">

                    {/* ✅ Dropdown catégorie */}
                    <div className='dropdown relative'>
                        <button
                            onClick={() => setDropdownOuvert(!dropdownOuvert)}
                            className="categorieButton w-[100%] flex items-center gap-2 border border-[#5C3A1E] px-6 py-2 rounded-xl transition hover:bg-[#5C3A1E] hover:text-white group"
                        >
                            <span>{filtreCategorie ?? "Categorie"}</span>
                            <img className="h-4 w-4 transition-transform group-hover:translate-y-1 translate-x-30" src={Arrowdown} alt="arrow" />
                        </button>

                        {dropdownOuvert && (
                            <div className='contentCategorie p-6 bg-gray-200 rounded-xl absolute z-10 w-full '>
                                {/* ✅ Option pour réinitialiser le filtre */}
                                <ul>
                                    <li>
                                        <button
                                            onClick={() => { setFiltreCategorie(null); setDropdownOuvert(false) }}
                                            className='w-full duration-200 ease-in hover:cursor-pointer hover:bg-[#5C3A1E] p-2 rounded-lg hover:text-white text-left font-thin italic'
                                        >
                                            Toutes les catégories
                                        </button>
                                    </li>
                                    {categories.map((cat) => (
                                        <li key={cat}>
                                            <button
                                                onClick={() => { setFiltreCategorie(cat); setDropdownOuvert(false) }}
                                                className={`w-full duration-200 ease-in hover:cursor-pointer hover:bg-[#5C3A1E] p-2 rounded-lg hover:text-white text-left
                                                    ${filtreCategorie === cat ? 'bg-[#5C3A1E] text-white' : ''}`}
                                            >
                                                {cat}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <button className="border border-[#5C3A1E] px-10 py-2 rounded-xl transition hover:bg-[#5C3A1E] hover:text-white">
                        Top du moment
                    </button>

                    {/* ✅ Barre de recherche */}
                    <div className="relative flex items-center">
                        <input
                            className="border border-[#5C3A1E] rounded-xl w-[340px] py-2 pl-10 pr-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#F59127]"
                            type="text"
                            placeholder="Search..."
                            value={rechercheTexte}
                            onChange={(e) => setRechercheTexte(e.target.value)}
                        />
                        <img className="absolute left-3 w-5 h-5 opacity-50" src={search} alt="search icon" />
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col items-center gap-10'>
                {/* ✅ Message si aucun résultat */}
                {livresFiltres.length === 0 ? (
                    <p className="mt-20 text-gray-500 font-thin text-lg">Aucun livre trouvé pour cette catégorie.</p>
                ) : (
                    <div className='Carousel grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-20 w-full justify-items-center gap-y-10'>
                        {livresFiltres.map((livre, index) => (
                            <ImgDec
                                key={index}
                                img={livre.img}
                                titre={livre.titre}
                                categorie1={livre.categorie1}
                                categorie2={livre.categorie2}
                                
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}