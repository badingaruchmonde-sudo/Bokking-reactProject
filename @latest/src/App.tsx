import './App.css'
import Catalogue from './catalogue'
import Lecture from './lecture'
import img1 from './assets/components/img1.jpg'
import Footer from './footer'

function App() {
  return (
    <>
      <Catalogue/>
      <Lecture image={img1} titre='Harry Potter' des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sapiente cupiditate quae nobis distinctio voluptatum aperiam praesentium, eveniet nulla labore dolor minima, iste rem perferendis vero veniam et exercitationem excepturi?"
      chap="23 chapitres" chapNumber='Chapitre 1' />
      <Footer />
    </>
  )
}

export default App