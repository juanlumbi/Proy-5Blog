function cargarItemsEnPagina() {
    var storedItems = JSON.parse(localStorage.getItem("items")) || [];
    var listaItems = document.getElementById("blog-container");
    storedItems.forEach(function(item) {
      var listItem = document.createElement("li");
      var tituloElement = document.createElement("h2");
      tituloElement.textContent = item.titulo;
      var imagenElement = document.createElement("img");
      imagenElement.src = obtenerImagenLocal(item.imagen) || "";
      imagenElement.alt = item.titulo;
      var descripcionElement = document.createElement("p");
      descripcionElement.textContent = item.descripcion;
      listItem.appendChild(tituloElement);
      listItem.appendChild(imagenElement);
      listItem.appendChild(descripcionElement);
      listaItems.appendChild(listItem);
    });
  }

  cargarItemsEnPagina();


    // Obtener todas las imágenes con la clase "image-item"
    const images = document.querySelectorAll('.image-item');

    // Recorrer las imágenes y aplicar el cambio de color a gris
    images.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.style.filter = 'grayscale(100%)';
        });

        image.addEventListener('mouseout', () => {
            image.style.filter = 'none';
        });
    });

  