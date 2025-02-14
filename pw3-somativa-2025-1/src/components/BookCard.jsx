 const BookCard = ({titulo, autor, imagem }) => {
    return (
    <div>
        <h1>{titulo}</h1>
        <p>{autor}</p>
        <img src = {imagem} alt= "Capa:As Cavernas de Aço"/>
    </div>
    )
 }

 export default BookCard