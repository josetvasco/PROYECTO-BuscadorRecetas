function iniciarApp() {

  obtenerCategoria()
  
  function obtenerCategoria() {
    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    fetch(url)
      .then( respuesta => {
        return respuesta.json()
      })
      .then( resultado => {
        console.log(resultado)
      })
  }

}


document.addEventListener('DOMContentLoaded', iniciarApp )