# lingumap
Guía de aprendizaje de idiomas
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <title>Declinador Alemán</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <h1>Proyecto Deutsch Toolkit</h1>

  <label for="tipo">Qué querés practicar:</label>
  <select id="tipo">
    <option>Artículos definidos</option>
    <option>Artículos indefinidos</option>
    <option>Pronombres posesivos</option>
    <option>Pronombres reflexivos</option>
    <option>Pronombres demostrativos</option>
  </select>

  <div id="opciones">
    <!-- Campos dinámicos aquí -->
  </div>

  <button id="mostrar">Mostrar resultado</button>

  <h2 id="resultado"></h2>
  <p id="ejemplo"></p>
  <p id="explicacion"></p>

  <script src="app.js"></script>
</body>
</html>
