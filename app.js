function showLanguage(lang) {
  const content = document.getElementById("language-content");

  if (lang === "aleman") {
    content.innerHTML = `
      <h3>Alemán</h3>
      <h3>Opciones para practicar Alemán</h3>
      <ul>
        <li>Artículos definidos</li>
        <li>Artículos indefinidos</li>
        <li>Pronombres posesivos</li>
        <li>Pronombres reflexivos</li>
        <li>Pronombres demostrativos</li>
        <li>Desafío</li>
      </ul>    `;
  } else if (lang === "ingles") {
    content.innerHTML = `
      <h3>Inglés</h3>
      <p>Actividades para practicar inglés: EN CONSTRUCCIÓN.</p>
    `;
  } else {
    content.innerHTML = "<p>Selecciona un idioma para comenzar.</p>";
  }
}
