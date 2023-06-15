// Crea una función que se ejecutará cuando la página haya cargado completamente
window.addEventListener('load', function() {
    // Define una función para cambiar el contenido según la ruta actual
    function renderContent() {
      var contentDiv = document.getElementById('content');
      var route = window.location.hash.substr(2); // Obtiene la ruta sin el "#/"
  
      // Lógica para determinar qué contenido mostrar según la ruta
      if (route === '' || route === '/') {
        contentDiv.innerHTML = '<h2>Inicio</h2><p>Bienvenido a mi blog.</p>';
      } else if (route === 'blog') {
        contentDiv.innerHTML = '<h2>Blog</h2><p>Aquí están los artículos del blog.</p>';
      } else if (route === 'contacto') {
        contentDiv.innerHTML = '<h2>Contacto</h2><p>¡Contáctame aquí!</p>';
      } else {
        contentDiv.innerHTML = '<h2>Página no encontrada</h2><p>La ruta solicitada no existe.</p>';
      }
    }
  
    // Escucha los cambios en el hash de la URL y actualiza el contenido en consecuencia
    window.addEventListener('hashchange', renderContent);
  
    // Renderiza el contenido inicial
    renderContent();
  });
  