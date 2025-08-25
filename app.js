// app.js

function showLanguage(language) {
  const contentDiv = document.getElementById("language-content");

  if (language === "aleman") {
    contentDiv.innerHTML = `
      <h3>Alemán</h3>
      <ul>
        <li><button onclick="showDefArticles()">Artículos definidos</button></li>
        <li><button>Artículos indefinidos</button></li>
        <li><button>Pronombres posesivos</button></li>
        <li><button>Pronombres reflexivos</button></li>
        <li><button>Pronombres demostrativos</button></li>
        <li><button>Desafío</button></li>
      </ul>
      <button onclick="showLanguage('')">Volver al inicio</button>
    `;
  } else {
    contentDiv.innerHTML = `
      <h3>Bienvenido a Ligüimap</h3>
      <p>Selecciona un idioma para comenzar a practicar.</p>
    `;
  }
}

function showDefArticles() {
  const contentDiv = document.getElementById("language-content");
  contentDiv.innerHTML = `
    <h3>Artículos definidos</h3>
    
    <label for="caso">Caso gramatical:</label>
    <select id="caso">
      <option value="nominativ">Nominativ</option>
      <option value="akkusativ">Akkusativ</option>
      <option value="dativ">Dativ</option>
      <option value="genitiv">Genitiv</option>
    </select>
    
    <br><br>
    
    <label for="genero">Género / número:</label>
    <select id="genero">
      <option value="masc">Maskulin</option>
      <option value="fem">Feminin</option>
      <option value="neut">Neutrum</option>
      <option value="pl">Plural</option>
    </select>
    
    <br><br>
    
    <button onclick="mostrarArticulo()">Mostrar resultado</button>
    <div id="resultado"></div>
    
    <br><br>
    <button onclick="showLanguage('aleman')">Volver al inicio</button>
  `;
}

function mostrarArticulo() {
  const caso = document.getElementById("caso").value;
  const genero = document.getElementById("genero").value;
  const resultadoDiv = document.getElementById("resultado");

  // Diccionario de artículos definidos (simplificado)
  const articulos = {
    nominativ: { masc: "der Hund", fem: "die Katze", neut: "das Haus", pl: "die Kinder" },
    akkusativ: { masc: "den Hund", fem: "die Katze", neut: "das Haus", pl: "die Kinder" },
    dativ: { masc: "dem Hund", fem: "der Katze", neut: "dem Haus", pl: "den Kindern" },
    genitiv: { masc: "des Hundes", fem: "der Katze", neut: "des Hauses", pl: "der Kinder" }
  };

  const ejemplo = articulos[caso][genero];
  resultadoDiv.innerHTML = `<p><strong>Resultado:</strong> ${ejemplo}</p>`;
}
