import './App.css'
import Catalogue from './catalogue'
import Lecture from './lecture'
import img1 from './assets/img1.jpg'
import Footer from './footer'
import Navbar from './navbar'
import Comments from './comments'



function App() {
  return (
    <>
      <Navbar/>
      <Catalogue/>
      <Lecture image={img1} titre='Harry Potter' des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sapiente cupiditate quae nobis distinctio voluptatum aperiam praesentium, eveniet nulla labore dolor minima, iste rem perferendis vero veniam et exercitationem excepturi?"
      chap="23 chapitres" chapNumber='Chapitre 1' />

      <div className='className="w-full h-auto py-4 bg-black flex-col flex mt-30'>
        <h1 className='text-3xl text-[#F59127] p-10 text-center font-bold font-serif'>Commentaires & Avis</h1>
        <div className='flex justify-center justify-evenly mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <Comments image={img1} name='Alex John' com='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sapiente cupiditate quae nobis distinctio voluptatum aperiam praesentium, eveniet nulla labore dolor minima, iste rem perferendis vero veniam et exercitationem excepturi?'/>
            <Comments image={img1} name='Alex John' com='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sapiente cupiditate quae nobis distinctio voluptatum aperiam praesentium, eveniet nulla labore dolor minima, iste rem perferendis vero veniam et exercitationem excepturi?'/>
            <Comments image={img1} name='Alex John' com='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sapiente cupiditate quae nobis distinctio voluptatum aperiam praesentium, eveniet nulla labore dolor minima, iste rem perferendis vero veniam et exercitationem excepturi?'/>
            <Comments image={img1} name='Alex John' com='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sapiente cupiditate quae nobis distinctio voluptatum aperiam praesentium, eveniet nulla labore dolor minima, iste rem perferendis vero veniam et exercitationem excepturi?'/>
        </div>
        
      </div>
      
      <Footer />
    </>
  )

}

export default App