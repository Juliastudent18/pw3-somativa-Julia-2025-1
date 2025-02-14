import './App.css'

import BookCard from './components/BookCard'

import capa_livro from './assets/cavernas_aco.jpg'
function App() {

  return (
    <>
      <div>
        <h1>PW3- WEBAPP- LIVRARIA</h1>
        <BookCard 
        titulo = 'As cavernas de Aço'
        autor = 'Issac Azimov' 
        imagem = {capa_livro}/>

        {/* <BookCard 
        titulo = 'Orgulho e Preconceito'
        autor = 'Jane Austin'
        imagem = 'Uma imagem vai aparecer' />

        <BookCard 
        titulo = 'Arte da Guerra'
        autor = 'Sun Tzu' 
        imagem = 'Uma imagem vai aparecer'/>
        
        <BookCard 
        titulo = 'Turma da Mônica'
        autor = 'Maurício de Souza' 
        imagem = 'Uma imagem vai aparecer'/> */}
    
       
      </div>
      
    </>
  )
}

export default App
