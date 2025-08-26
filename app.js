// app.js

function showLanguage(language) {
  const contentDiv = document.getElementById("language-content");

  if (language === "aleman") {
    contentDiv.innerHTML = `
      <h3>Alemán</h3>
      <ul>
        <li><button onclick="showDefArticles()">Artículos definidos</button></li>
        <li><button onclick="showIndefArticles()">Artículos indefinidos</button></li>
        <li><button onclick="showPossessivePronouns()">Pronombres posesivos</button></li>

        <li><button>Pronombres reflexivos</button></li>
        <li><button>Pronombres demostrativos</button></li>
        <li><button>Desafío</button></li>
      </ul>
      <button onclick="showLanguage('')">Volver al inicio</button>
    `;
  } else {
    contentDiv.innerHTML = `
      <h3>Bienvenido a Lingüimap</h3>
      <p>Selecciona un idioma para comenzar a practicar.</p>
      <button onclick="showLanguage('aleman')">Alemán</button>
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

  const articulos = {
    nominativ: { masc: "der Hund", fem: "die Katze", neut: "das Haus", pl: "die Kinder" },
    akkusativ: { masc: "den Hund", fem: "die Katze", neut: "das Haus", pl: "die Kinder" },
    dativ: { masc: "dem Hund", fem: "der Katze", neut: "dem Haus", pl: "den Kindern" },
    genitiv: { masc: "des Hundes", fem: "der Katze", neut: "des Hauses", pl: "der Kinder" }
  };

  const ejemplo = articulos[caso][genero];
  resultadoDiv.innerHTML = `<p><strong>Resultado:</strong> ${ejemplo}</p>`;
}

// ----------- ARTÍCULOS INDEFINIDOS --------------

function showIndefArticles() {
  const contentDiv = document.getElementById("language-content");
  contentDiv.innerHTML = `
    <h3>Artículos indefinidos</h3>
    
    <label for="casoIndef">Caso gramatical:</label>
    <select id="casoIndef">
      <option value="nominativ">Nominativ</option>
      <option value="akkusativ">Akkusativ</option>
      <option value="dativ">Dativ</option>
      <option value="genitiv">Genitiv</option>
    </select>
    
    <br><br>
    
    <label for="generoIndef">Género:</label>
    <select id="generoIndef">
      <option value="masc">Maskulin</option>
      <option value="fem">Feminin</option>
      <option value="neut">Neutrum</option>
      <option value="pl">Plural</option>
    </select>
    
    <br><br>
    
    <button onclick="mostrarIndefinido()">Mostrar resultado</button>
    <div id="resultadoIndef"></div>
    
    <br><br>
    <button onclick="showLanguage('aleman')">Volver al inicio</button>
  `;
}

function mostrarIndefinido() {
  const caso = document.getElementById("casoIndef").value;
  const genero = document.getElementById("generoIndef").value;
  const resultadoDiv = document.getElementById("resultadoIndef");

  const articulosIndef = {
    nominativ: { masc: "ein Hund", fem: "eine Katze", neut: "ein Haus", pl: "— Kinder" },
    akkusativ: { masc: "einen Hund", fem: "eine Katze", neut: "ein Haus", pl: "— Kinder" },
    dativ: { masc: "einem Hund", fem: "einer Katze", neut: "einem Haus", pl: "— Kindern" },
    genitiv: { masc: "eines Hundes", fem: "einer Katze", neut: "eines Hauses", pl: "— Kinder" }
  };

  const ejemplo = articulosIndef[caso][genero];
  resultadoDiv.innerHTML = `<p><strong>Resultado:</strong> ${ejemplo}</p>`;
}

function showPossessivePronouns() {
  const contentDiv = document.getElementById("language-content");
  contentDiv.innerHTML = `
    <h3>Pronombres posesivos</h3>
    
    <label for="pronombre">Pronombre personal:</label>
    <select id="pronombre">
      <option value="ich">ich (yo)</option>
      <option value="du">du (tú)</option>
      <option value="er">er (él)</option>
      <option value="sie">sie (ella)</option>
      <option value="es">es (ello)</option>
      <option value="wir">wir (nosotros)</option>
      <option value="ihr">ihr (vosotros)</option>
      <option value="sie_pl">sie (ellos)</option>
      <option value="Sie">Sie (usted)</option>
    </select>
    
    <br><br>
    
    <label for="casoPos">Caso gramatical:</label>
    <select id="casoPos">
      <option value="nominativ">Nominativ</option>
      <option value="akkusativ">Akkusativ</option>
      <option value="dativ">Dativ</option>
      <option value="genitiv">Genitiv</option>
    </select>
    
    <br><br>
    
    <label for="generoPos">Género / número:</label>
    <select id="generoPos">
      <option value="masc">Maskulin</option>
      <option value="fem">Feminin</option>
      <option value="neut">Neutrum</option>
      <option value="pl">Plural</option>
    </select>
    
    <br><br>
    
    <button onclick="mostrarPosesivo()">Mostrar resultado</button>
    <div id="resultadoPos"></div>
    
    <br><br>
    <button onclick="showLanguage('aleman')">Volver al inicio</button>
  `;
}

function mostrarPosesivo() {
  const pronombre = document.getElementById("pronombre").value;
  const caso = document.getElementById("casoPos").value;
  const genero = document.getElementById("generoPos").value;
  const resultadoDiv = document.getElementById("resultadoPos");

  // Radicales de los posesivos
  const bases = {
    ich: "mein",
    du: "dein",
    er: "sein",
    sie: "ihr",
    es: "sein",
    wir: "unser",
    ihr: "euer",
    sie_pl: "ihr",
    Sie: "Ihr"
  };

  // Terminaciones según caso/género/número
  const terminaciones = {
    nominativ: { masc: "", fem: "e", neut: "", pl: "e" },
    akkusativ: { masc: "en", fem: "e", neut: "", pl: "e" },
    dativ: { masc: "em", fem: "er", neut: "em", pl: "en" },
    genitiv: { masc: "es", fem: "er", neut: "es", pl: "er" }
  };

  // Ejemplos de sustantivos
  const ejemplos = {
    nominativ: { masc: "Hund", fem: "Katze", neut: "Haus", pl: "Kinder" },
    akkusativ: { masc: "Hund", fem: "Katze", neut: "Haus", pl: "Kinder" },
    dativ: { masc: "Hund", fem: "Katze", neut: "Haus", pl: "Kindern" },
    genitiv: { masc: "Hundes", fem: "Katze", neut: "Hauses", pl: "Kinder" }
  };

  const base = bases[pronombre];
  const terminacion = terminaciones[caso][genero];
  const sustantivo = ejemplos[caso][genero];

  const ejemplo = `${base}${terminacion} ${sustantivo}`;

  resultadoDiv.innerHTML = `<p><strong>Resultado:</strong> ${ejemplo}</p>`;
}


