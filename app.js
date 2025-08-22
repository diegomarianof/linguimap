function showLanguage(lang) {
  const content = document.getElementById("language-content");

  if (lang === "aleman") {
    content.innerHTML = `
      <h3>Alemán</h3>
      <p>Aquí vas a poder declinar sustantivos, practicar vocabulario y explorar la gramática alemana.</p>
    `;
  } else if (lang === "ingles") {
    content.innerHTML = `
      <h3>Inglés</h3>
      <p>Aquí vas a encontrar ejercicios de tiempos verbales, vocabulario y comprensión de frases en inglés.</p>
    `;
  } else {
    content.innerHTML = "<p>Selecciona un idioma para comenzar.</p>";
  }
}
