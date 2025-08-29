// app.js

// ----- BLOQUE DE DATOS Y FUNCIONES DEL QUIZ -----
// Casos y géneros
const casos = ["nominativ", "akkusativ", "dativ", "genitiv"];
const generos = ["masc", "fem", "neut", "pl"];

// Pronombres personales
const pronombres = ["ich","du","er","sie","es","wir","ihr","sie_pl","Sie"];

// Artículos definidos
const articulosDefinidos = {
  nominativ: { masc: "der", fem: "die", neut: "das", pl: "die" },
  akkusativ: { masc: "den", fem: "die", neut: "das", pl: "die" },
  dativ: { masc: "dem", fem: "der", neut: "dem", pl: "den" },
  genitiv: { masc: "des", fem: "der", neut: "des", pl: "der" }
};

// Pronombres reflexivos
const pronombresReflexivos = {
  ich: { akkusativ: "mich", dativ: "mir" },
  du: { akkusativ: "dich", dativ: "dir" },
  er: { akkusativ: "sich", dativ: "sich" },
  sie: { akkusativ: "sich", dativ: "sich" },
  es: { akkusativ: "sich", dativ: "sich" },
  wir: { akkusativ: "uns", dativ: "uns" },
  ihr: { akkusativ: "euch", dativ: "euch" },
  sie_pl: { akkusativ: "sich", dativ: "sich" },
  Sie: { akkusativ: "sich", dativ: "sich" }
};

function generarPregunta() {
  const tipo = ["definido", "reflexivo", "posesivo", "demostrativo", "indefinido"];
  const elegido = tipo[Math.floor(Math.random() * tipo.length)];
  return { tipo: elegido, texto: "Pregunta de ejemplo", correcta: "respuesta", opciones: ["a","b","c"] };
}

function generarPreguntasRonda(cantidad = 10) {
  const preguntas = [];
  for (let i=0; i<cantidad; i++) {
    preguntas.push(generarPregunta());
  }
  return preguntas;
}

// ----- FIN BLOQUE DATOS Y GENERACIÓN -----


function showLanguage(language) {
  const contentDiv = document.getElementById("language-content");

  if (language === "aleman") {
    contentDiv.innerHTML = `
      <h3>Alemán</h3>
      <ul>
        <li><button onclick="showDefArticles()">Artículos definidos</button></li>
        <li><button onclick="showIndefArticles()">Artículos indefinidos</button></li>
        <li><button onclick="showPossessivePronouns()">Pronombres posesivos</button></li>
        <li><button onclick="showReflexivePronouns()">Pronombres reflexivos</button></li>
        <li><button onclick="showDemonstrativPronouns()">Pronombres demostrativos</button></li>
        <li><button onclick="iniciarDesafio()">Desafío</button></li>

        <!-- <li><button>Desafío</button></li> -->
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
    
    <!-- ACÁ EL CHECKBOX -->
    <label>
      <input type="checkbox" id="negacionIndef"> Forma negativa
    </label>
    
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
  const usarNegacion = document.getElementById("negacionIndef").checked; // ← si está tildado
  const resultadoDiv = document.getElementById("resultadoIndef");

  const articulosIndef = {
    nominativ: { masc: "ein Hund", fem: "eine Katze", neut: "ein Haus", pl: "— Kinder" },
    akkusativ: { masc: "einen Hund", fem: "eine Katze", neut: "ein Haus", pl: "— Kinder" },
    dativ:    { masc: "einem Hund", fem: "einer Katze", neut: "einem Haus", pl: "— Kindern" },
    genitiv:  { masc: "eines Hundes", fem: "einer Katze", neut: "eines Hauses", pl: "— Kinder" }
  };

  const articulosNeg = {
    nominativ: { masc: "kein Hund", fem: "keine Katze", neut: "kein Haus", pl: "keine Kinder" },
    akkusativ: { masc: "keinen Hund", fem: "keine Katze", neut: "kein Haus", pl: "keine Kinder" },
    dativ:    { masc: "keinem Hund", fem: "keiner Katze", neut: "keinem Haus", pl: "keinen Kindern" },
    genitiv:  { masc: "keines Hundes", fem: "keiner Katze", neut: "keines Hauses", pl: "keiner Kinder" }
  };

  const ejemplo = usarNegacion 
    ? articulosNeg[caso][genero] 
    : articulosIndef[caso][genero];

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
// ----------- ARTÍCULOS POSESIVOS --------------
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
// ----------- PRONOMBRES REFLEXIVOS --------------

function showReflexivePronouns() {
  const contentDiv = document.getElementById("language-content");
  contentDiv.innerHTML = `
    <h3>Pronombres reflexivos</h3>
    
    <label for="pronombreRef">Pronombre personal:</label>
    <select id="pronombreRef">
      <option value="ich">ich (yo)</option>
      <option value="du">du (tú)</option>
      <option value="er">er (él)</option>
      <option value="sie">sie (ella)</option>
      <option value="es">es (ello)</option>
      <option value="wir">wir (nosotros)</option>
      <option value="ihr">ihr (vosotros)</option>
      <option value="sie_pl">sie (ellos)</option>
      <option value="Sie">Sie (usted/ustedes)</option>
    </select>
    
    <br><br>
    
    <label for="casoRef">Caso gramatical:</label>
    <select id="casoRef">
      <option value="acusativo">Akkusativ</option>
      <option value="dativo">Dativ</option>
    </select>
    
    <br><br>
    
    <button onclick="mostrarReflexivo()">Mostrar resultado</button>
    <div id="resultadoRef"></div>
    
    <br><br>
    <button onclick="showLanguage('aleman')">Volver al inicio</button>
  `;
}

function mostrarReflexivo() {
  const pronombre = document.getElementById("pronombreRef").value;
  const caso = document.getElementById("casoRef").value;
  const resultadoDiv = document.getElementById("resultadoRef");

  const reflexivos = {
    ich: { acusativo: "mich", dativo: "mir" },
    du: { acusativo: "dich", dativo: "dir" },
    er: { acusativo: "sich", dativo: "sich" },
    sie: { acusativo: "sich", dativo: "sich" },
    es: { acusativo: "sich", dativo: "sich" },
    wir: { acusativo: "uns", dativo: "uns" },
    ihr: { acusativo: "euch", dativo: "euch" },
    sie_pl: { acusativo: "sich", dativo: "sich" },
    Sie: { acusativo: "sich", dativo: "sich" }
  };

  const ejemplos = {
    ich: {
      acusativo: "Ich wasche mich. (Me lavo.)",
      dativo: "Ich wasche mir die Hände. (Me lavo las manos.)"
    },
    du: {
      acusativo: "Du siehst dich im Spiegel. (Te ves en el espejo.)",
      dativo: "Du kaufst dir ein Buch. (Te compras un libro.)"
    },
    er: {
      acusativo: "Er wäscht sich. (Él se lava.)",
      dativo: "Er zieht sich eine Jacke an. (Él se pone una campera.)"
    },
    sie: {
      acusativo: "Sie schminkt sich. (Ella se maquilla.)",
      dativo: "Sie kämmt sich die Haare. (Ella se peina el pelo.)"
    },
    es: {
      acusativo: "Es bewegt sich. (Ello se mueve.)",
      dativo: "Es stellt sich einen Stuhl vor. (Se imagina una silla.)"
    },
    wir: {
      acusativo: "Wir freuen uns. (Nos alegramos.)",
      dativo: "Wir nehmen uns Zeit. (Nos tomamos tiempo.)"
    },
    ihr: {
      acusativo: "Ihr seht euch im Spiegel. (Ustedes se ven en el espejo.)",
      dativo: "Ihr nehmt euch eine Pause. (Ustedes se toman un descanso.)"
    },
    sie_pl: {
      acusativo: "Sie setzen sich. (Ellos se sientan.)",
      dativo: "Sie kaufen sich ein Auto. (Ellos se compran un auto.)"
    },
    Sie: {
      acusativo: "Sie setzen sich, bitte. (Siéntese, por favor.)",
      dativo: "Sie nehmen sich Zeit. (Usted se toma tiempo.)"
    }
    };
  
  // const forma = reflexivos[pronombre]?.[caso];
  // const ejemplo = ejemplos[forma] || "";
  const forma = reflexivos[pronombre]?.[caso];
  const ejemplo = ejemplos[pronombre]?.[caso] || "";

  if (forma) {
    resultadoDiv.innerHTML = `<p><strong>Resultado:</strong> ${forma}<br>Ejemplo: ${ejemplo}</p>`;
  } else {
    resultadoDiv.innerHTML = `<p>No se encontró el pronombre reflexivo.</p>`;
  }
}
// ----------- PRONOMBRES DEMOSTRATIVOS --------------
function showDemonstrativPronouns() {
  const contentDiv = document.getElementById("language-content");
  contentDiv.innerHTML = `
    <h3>Pronombres demostrativos</h3>
    
    <label for="casoDem">Caso gramatical:</label>
    <select id="casoDem">
      <option value="nominativ">Nominativ</option>
      <option value="akkusativ">Akkusativ</option>
      <option value="dativ">Dativ</option>
      <option value="genitiv">Genitiv</option>
    </select>
    
    <br><br>
    
    <label for="generoDem">Género/Número:</label>
    <select id="generoDem">
      <option value="masc">Maskulin</option>
      <option value="fem">Feminin</option>
      <option value="neut">Neutrum</option>
      <option value="pl">Plural</option>
    </select>
    
    <br><br>
    
    <button onclick="mostrarDemostrativo()">Mostrar resultado</button>
    <div id="resultadoDem"></div>
    
    <br><br>
    <button onclick="showLanguage('aleman')">Volver al inicio</button>
  `;
}

function mostrarDemostrativo() {
  const caso = document.getElementById("casoDem").value;
  const genero = document.getElementById("generoDem").value;
  const resultadoDiv = document.getElementById("resultadoDem");

  const demostrativos = {
    nominativ: { masc: "dieser Hund", fem: "diese Katze", neut: "dieses Haus", pl: "diese Kinder" },
    akkusativ: { masc: "diesen Hund", fem: "diese Katze", neut: "dieses Haus", pl: "diese Kinder" },
    dativ: { masc: "diesem Hund", fem: "dieser Katze", neut: "diesem Haus", pl: "diesen Kindern" },
    genitiv: { masc: "dieses Hundes", fem: "dieser Katze", neut: "dieses Hauses", pl: "dieser Kinder" }
  };

  const ejemplo = demostrativos[caso][genero];
  resultadoDiv.innerHTML = `<p><strong>Resultado:</strong> ${ejemplo}</p>`;
}
//  ------- DESAFÍO------
function iniciarDesafio() {
  const contentDiv = document.getElementById("language-content");

  contentDiv.innerHTML = `
    <h3>Desafío de alemán</h3>
    <div id="pregunta"></div>
    <div id="opciones"></div>
    <div id="resultado"></div>
    <div id="puntos">Puntos: 0</div>
    <button id="btnResponder">Responder</button>
    <button id="btnSiguiente" disabled>Siguiente</button>
    <br><br>
    <button onclick="showLanguage('aleman')">← Volver al inicio</button>
  `;
}
// ----------- DESAFÍO ALEATORIO --------------

function generar_opciones_unicas(correcta, opciones_posibles, cantidad=3) {
  const opciones_filtradas = opciones_posibles.filter(o => o !== correcta);
  const opciones = [];

  while (opciones.length < cantidad - 1 && opciones_filtradas.length > 0) {
    const idx = Math.floor(Math.random() * opciones_filtradas.length);
    opciones.push(opciones_filtradas.splice(idx, 1)[0]);
  }

  opciones.push(correcta);

  while (opciones.length < cantidad) {
    const extra = opciones_posibles[Math.floor(Math.random() * opciones_posibles.length)];
    if (!opciones.includes(extra)) opciones.push(extra);
  }

  return opciones.sort(() => Math.random() - 0.5);
}

function generar_preguntas() {
  const casos = ["nominativ", "akkusativ", "dativ", "genitiv"];
  const generos = ["masc", "fem", "neut", "pl"];
  const pronombres = ["ich","du","er","sie","es","wir","ihr","sie_pl","Sie"];
  
  const pronombres_reflexivos = {
    ich: { akkusativ: "mich", dativ: "mir" },
    du: { akkusativ: "dich", dativ: "dir" },
    er: { akkusativ: "sich", dativ: "sich" },
    sie: { akkusativ: "sich", dativ: "sich" },
    es: { akkusativ: "sich", dativ: "sich" },
    wir: { akkusativ: "uns", dativ: "uns" },
    ihr: { akkusativ: "euch", dativ: "euch" },
    sie_pl: { akkusativ: "sich", dativ: "sich" },
    Sie: { akkusativ: "sich", dativ: "sich" }
  };

  const articulos_definidos = {
    nominativ: { masc: "der", fem: "die", neut: "das", pl: "die" },
    akkusativ: { masc: "den", fem: "die", neut: "das", pl: "die" },
    dativ: { masc: "dem", fem: "der", neut: "dem", pl: "den" },
    genitiv: { masc: "des", fem: "der", neut: "des", pl: "der" }
  };

  const articulos_indefinidos = {
    nominativ: { masc: "ein", fem: "eine", neut: "ein" },
    akkusativ: { masc: "einen", fem: "eine", neut: "ein" },
    dativ:    { masc: "einem", fem: "einer", neut: "einem" },
    genitiv:  { masc: "eines", fem: "einer", neut: "eines" }
  };

  const pronombres_demostrativos = {
    nominativ: { masc: "dieser", fem: "diese", neut: "dieses", pl: "diese" },
    akkusativ: { masc: "diesen", fem: "diese", neut: "dieses", pl: "diese" },
    dativ: { masc: "diesem", fem: "dieser", neut: "diesem", pl: "diesen" },
    genitiv: { masc: "dieses", fem: "dieser", neut: "dieses", pl: "dieser" }
  };

  const posesivos_base = {
    ich: "mein", du: "dein", er: "sein", sie: "ihr", es: "sein",
    wir: "unser", ihr: "euer", sie_pl: "ihr", Sie: "Ihr"
  };

  const posesivo_declinado = {
    nominativ: { masc: "", fem: "e", neut: "", pl: "e" },
    akkusativ: { masc: "en", fem: "e", neut: "", pl: "e" },
    dativ: { masc: "em", fem: "er", neut: "em", pl: "en" },
    genitiv: { masc: "es", fem: "er", neut: "es", pl: "er" }
  };

  const preguntas = [];

  while (preguntas.length < 10) {
    const tipo = ["definido","indefinido","demostrativo","posesivo","reflexivo"][Math.floor(Math.random()*5)];
    const caso = casos[Math.floor(Math.random()*casos.length)];
    const genero = generos[Math.floor(Math.random()*generos.length)];

    if (tipo === "reflexivo") {
      const pron = pronombres[Math.floor(Math.random()*pronombres.length)];
      const correcta = pronombres_reflexivos[pron][caso==="akkusativ"?"akkusativ":"dativ"];
      const opciones = generar_opciones_unicas(correcta, pronombres.map(p=>pronombres_reflexivos[p][caso==="akkusativ"?"akkusativ":"dativ"]));
      preguntas.push({texto:`¿Reflexivo para '${pron}' en ${caso}?`, respuesta: correcta, opciones});
    }
    else if (tipo === "definido") {
      const correcta = articulos_definidos[caso][genero];
      const opciones = generar_opciones_unicas(correcta, [].concat(...Object.values(articulos_definidos).map(g=>Object.values(g))));
      preguntas.push({texto:`Artículo definido en ${caso}, ${genero}:`, respuesta: correcta, opciones});
    }
    else if (tipo === "indefinido") {
      if(genero==="pl") continue;
      const correcta = articulos_indefinidos[caso][genero];
      const opciones = generar_opciones_unicas(correcta, [].concat(...Object.values(articulos_indefinidos).map(g=>Object.values(g))));
      preguntas.push({texto:`Artículo indefinido en ${caso}, ${genero}:`, respuesta: correcta, opciones});
    }
    else if (tipo === "demostrativo") {
      const correcta = pronombres_demostrativos[caso][genero];
      const opciones = generar_opciones_unicas(correcta, [].concat(...Object.values(pronombres_demostrativos).map(g=>Object.values(g))));
      preguntas.push({texto:`Pronombre demostrativo en ${caso}, ${genero}:`, respuesta: correcta, opciones});
    }
    else if (tipo === "posesivo") {
      const pron = pronombres[Math.floor(Math.random()*pronombres.length)];
      let base = posesivos_base[pron];
      const terminacion = posesivo_declinado[caso][genero];
      if(base.endsWith("euer") && terminacion && !terminacion.startsWith("e")) base="eur";
      const correcta = base + terminacion;
      const opciones = generar_opciones_unicas(correcta, pronombres.map(p=>{
        let b = posesivos_base[p];
        if(b.endsWith("euer") && terminacion && !terminacion.startsWith("e")) b="eur";
        return b + terminacion;
      }));
      preguntas.push({texto:`Pronombre posesivo para '${pron}' en ${caso}, ${genero}:`, respuesta: correcta, opciones});
    }
  }

  return preguntas;
}

function iniciarDesafio() {
  const contentDiv = document.getElementById("language-content");
  contentDiv.innerHTML = `
    <h3>Desafío de alemán</h3>
    <div id="pregunta"></div>
    <div id="opciones"></div>
    <div id="puntos">Puntos: 0</div>
    <div id="resultado"></div>
    <button id="botonResponder">Responder</button>
    <button id="botonSiguiente" disabled>Siguiente</button>
    <button id="botonReiniciar">Reiniciar</button>
    <button onclick="showLanguage('aleman')">← Volver al inicio</button>
  `;

  const preguntas = generar_preguntas();
  const estado = {indice:0, puntos:0};
  const preguntaDiv = document.getElementById("pregunta");
  const opcionesDiv = document.getElementById("opciones");
  const puntosDiv = document.getElementById("puntos");
  const resultadoDiv = document.getElementById("resultado");
  const botonResponder = document.getElementById("botonResponder");
  const botonSiguiente = document.getElementById("botonSiguiente");
  const botonReiniciar = document.getElementById("botonReiniciar");

  function mostrarPregunta() {
    opcionesDiv.innerHTML="";
    resultadoDiv.innerText="";
    botonResponder.disabled=false;
    botonSiguiente.disabled=true;

    if(estado.indice>=preguntas.length){
      preguntaDiv.innerText=`¡Fin del desafío! Puntos finales: ${estado.puntos}/${preguntas.length}`;
      botonResponder.style.display="none";
      botonSiguiente.style.display="none";
      return;
    }

    const actual = preguntas[estado.indice];
    preguntaDiv.innerText=`Pregunta ${estado.indice+1}: ${actual.texto}`;

    actual.opciones.forEach(op=>{
      const rb = document.createElement("input");
      rb.type="radio";
      rb.name="respuesta";
      rb.value=op;
      rb.id=op;
      const label = document.createElement("label");
      label.htmlFor=op;
      label.innerText=op;
      const br = document.createElement("br");
      opcionesDiv.appendChild(rb);
      opcionesDiv.appendChild(label);
      opcionesDiv.appendChild(br);
    });
  }

  botonResponder.onclick=function(){
    const selected = document.querySelector('input[name="respuesta"]:checked');
    if(!selected) return;
    botonResponder.disabled=true;
    botonSiguiente.disabled=false;
    const actual = preguntas[estado.indice];
    if(selected.value===actual.respuesta){
      estado.puntos++;
      resultadoDiv.innerText="✔ Correcto";
    } else {
      resultadoDiv.innerText=`✘ Incorrecto. Era: ${actual.respuesta}`;
    }
    puntosDiv.innerText=`Puntos: ${estado.puntos}`;
  };

  botonSiguiente.onclick=function(){
    estado.indice++;
    mostrarPregunta();
  };

  botonReiniciar.onclick=function(){
    estado.indice=0;
    estado.puntos=0;
    puntosDiv.innerText="Puntos: 0";
    mostrarPregunta();
  };

  mostrarPregunta();
}



