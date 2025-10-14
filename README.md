<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Palermo Store</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
:root {
  --color-primario: #0e100e;
  --color-acento: #000000;
  --color-fondo: #f9fafb;
  --color-blanco: #fff;
  --color-texto: #545353;
  --color-gris: #777;
  --borde: #e0e0e0;
  --sombra-suave: 0 4px 20px rgba(0,0,0,0.06);
  --fuente: 'Inter', 'Segoe UI', Roboto, sans-serif;
}

body {
  margin: 0;
  font-family: var(--fuente);
  background: var(--color-fondo);
  color: var(--color-texto);
  line-height: 1.6;
  scroll-behavior: smooth;
}

/* HEADER */
header {
  background: var(--color-blanco);
  color: var(--color-texto);
  padding: 20px 5%;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
header h1 {
  margin: 0;
  font-size: 1.9rem;
  font-weight: 700;
}
header nav a {
  margin-left: 20px;
  text-decoration: none;
  color: var(--color-texto);
  font-weight: 600;
  transition: color 0.3s;
}
header nav a:hover {
  color: var(--color-acento);
}
.ir-pedido {
  color: var(--blanco);
  background: var(--color-primario);
  padding: 12px 26px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.3s, transform 0.2s;
}
.ir-pedido:hover {
  background: var(--color-acento);
  transform: translateY(-2px);
}

/* SECCIONES */
section {
  width: 92%;
  margin: 50px auto 0 auto;
  max-width: 1200px;
}
h2 {
  color: var(--color-texto);
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
  font-weight: 600;
}

/* NOSOTROS */
.nosotros {
  background: var(--color-blanco);
  border-radius: 18px;
  padding: 40px;
  box-shadow: var(--sombra-suave);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 40px;
  justify-content: center;
}
.nosotros img {
  width: 340px;
  border-radius: 14px;
  box-shadow: var(--sombra-suave);
}
.nosotros-text {
  flex: 1 1 340px;
  max-width: 600px;
  color: var(--color-gris);
  font-size: 1.1rem;
  line-height: 1.8;
}

/* PRODUCTOS */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 30px;
}
.producto {
  text-align: center;
  background: var(--color-blanco);
  padding: 24px 16px 30px;
  border-radius: 16px;
  box-shadow: var(--sombra-suave);
  transition: transform 0.25s, box-shadow 0.25s;
  border: 1px solid var(--borde);
}
.producto:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.08);
  border-color: var(--color-acento);
}
.producto img {
  width: 100%;
  max-width: 160px;
  height: 160px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 14px;
}
.producto h3 {
  margin: 16px 0 8px;
  color: var(--color-texto);
  font-size: 1.15rem;
  font-weight: 600;
}
.producto p {
  color: var(--color-primario);
  font-weight: bold;
  margin: 6px 0;
  font-size: 1rem;
}
.producto .btn {
  margin-top: 12px;
  background: var(--color-primario);
  color: var(--blanco);
  border: none;
  padding: 10px 28px;
  border-radius: 7px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background 0.3s, transform 0.2s;
}
.producto .btn:hover {
  background: var(--color-acento);
  transform: translateY(-2px);
}

/* FORMULARIO */
.pedido {
  background: var(--color-blanco);
  border-radius: 16px;
  padding: 30px;
  box-shadow: var(--sombra-suave);
  max-width: 420px;
  margin: 60px auto 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.pedido label {
  font-weight: 600;
  color: var(--color-texto);
}
.pedido input, .pedido select, .pedido textarea {
  padding: 12px;
  border: 1.5px solid var(--borde);
  border-radius: 7px;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.2s;
}
.pedido input:focus, .pedido textarea:focus {
  border-color: var(--color-primario);
  outline: none;
}
.pedido button {
  background: var(--color-primario);
  color: var(--blanco);
  border: none;
  padding: 13px;
  border-radius: 7px;
  cursor: pointer;
  font-size: 1.1rem;
  margin-top: 10px;
  font-weight: 600;
  transition: background 0.3s, transform 0.2s;
}
.pedido button:hover {
  background: var(--color-acento);
  transform: translateY(-2px);
}

/* FOOTER */
footer {
  background: var(--color-blanco);
  color: var(--color-texto);
  text-align: center;
  padding: 24px 0;
  margin-top: 60px;
  border-top: 1px solid var(--borde);
  font-size: 1rem;
  letter-spacing: 0.3px;
}

/* Responsive */
@media (max-width: 900px) {
  header {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
  h2 {
    font-size: 1.6rem;
  }
  .producto img {
    max-width: 130px;
    height: 130px;
  }
  .nosotros {
    padding: 24px;
  }
}
</style>
</head>
<body>

<header>
  <h1>Palermo Store</h1>
  <nav>
    <a href="#nosotros">Inicio</a>
    <a href="#productos">Productos</a>
    <a href="#formulario">Hacé tu pedido</a>
  </nav>
</header>

<section class="nosotros" id="nosotros">
  <img src="https://inversionesmontoya.hn/cdn/shop/files/397E4DCB-41D5-4537-B578-20830D084B77.webp?v=1737404854" alt="Nosotros">
  <div class="nosotros-text">
    <h2>Nosotros</h2>
    <p>
      Cada perfume que se crea nace de una combinación de pasión, arte y detalle. Detrás de cada frasco hay una búsqueda: capturar momentos, despertar recuerdos y reflejar la personalidad de quien lo lleva.<br>
      Seleccionamos las mejores notas florales, frutales y amaderadas de distintas partes del mundo, fusionándolas en fragancias únicas que transmiten emociones auténticas. Porque un buen perfume no solo se lleva en la piel, se lleva en el alma.
    </p>
  </div>
</section>

<section id="productos">
  <h2>Perfumes</h2>
  <div class="grid">
    <div class="producto">
        <img src="https://http2.mlstatic.com/D_Q_NP_852085-MLA80071541612_102024-O.webp" alt="Liquid Brun">
        <h3>Liquid Brun</h3>
        <p>Botella 100ml: $78000</p>
        <button class="btn" onclick="pedir('Liquid Brun - $78000')">Pedir</button>
      </div>
      <div class="producto">
        <img src="https://d22fxaf9t8d39k.cloudfront.net/d4f256ba89932cfc21fd0fa7d8c13c80d65b40cb9a06428bba7813bfcc037d2d108925.webp" alt="Hawas Black">
        <h3>Hawas Black</h3>
        <p>Botella 100ml: $72000</p>
        <p>Decant 5ml: $9500</p>
        <button class="btn" onclick="pedir('Hawas Black - Botella 100ml')">Pedir</button>
      </div>
      <div class="producto">
        <img src="https://http2.mlstatic.com/D_609475-MLU77667701668_072024-C.jpg" alt="Hawas for Him">
        <h3>Hawas for Him</h3>
        <p>Botella 100ml: $62000</p>
        <p>Decant 5ml: $9000</p>
        <button class="btn" onclick="pedir('Hawas for Him - Botella 100ml')">Pedir</button>
      </div>
      <div class="producto">
        <img src="https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/1f1b8d9a1b49678555bea203c2f52e39/1/5/155854-b-hawas-ice-men-edp-100ml.jpg" alt="Hawas Ice">
        <h3>Hawas Ice</h3>
        <p>Botella 100ml: $70000</p>
        <button class="btn" onclick="pedir('Hawas Ice - Botella 100ml')">Pedir</button>
      </div>
      <div class="producto">
        <img src="https://fimgs.net/mdimg/perfume-thumbs/375x500.110808.jpg" alt="Hawas Elixir">
        <h3>Hawas Elixir</h3>
        <p>Botella 100ml: $73000</p>
        <button class="btn" onclick="pedir('Hawas Elixir - Botella 100ml')">Pedir</button>
      </div>
      <div class="producto">
        <img src="https://http2.mlstatic.com/D_NQ_NP_991070-MLA81953006706_022025-O.webp" alt="Bharara King">
        <h3>Bharara King</h3>
        <p>Botella 100ml: $94000</p>
        <p>Decant 5ml: $12000</p>
        <button class="btn" onclick="pedir('Bharara King - Botella 100ml')">Pedir</button>
      </div>
      <div class="producto">
        <img src="https://http2.mlstatic.com/D_843651-MLU76296948587_052024-C.jpg" alt="Amber Oud">
        <h3>Amber Oud</h3>
        <p>Botella 100ml: $92000</p>
        <button class="btn" onclick="pedir('Amber Oud - Botella 100ml')">Pedir</button>
      </div>
      <div class="producto">
        <img src="https://http2.mlstatic.com/D_NQ_NP_855959-MLA53669241732_022023-O.webp" alt="9PM">
        <h3>9PM</h3>
        <p>Botella 100ml: $63000</p>
        <p>Decant 5ml: $7500</p>
        <button class="btn" onclick="pedir('9PM - Botella 100ml')">Pedir</button>
      </div>
      <div class="producto">
        <img src="https://fimgs.net/mdimg/perfume/o.99238.jpg" alt="9PM Rebel">
        <h3>9PM Rebel</h3>
        <p>Botella 100ml: $69000</p>
        <p>Decant 5ml: $9000</p>
        <button class="btn" onclick="pedir('9PM Rebel - Botella 100ml')">Pedir</button>
      </div>
      <div class="producto">
        <img src="https://u.makeup.com.ua/k/k8/k8hxu147fzcl.jpg" alt="Art of Arabia 1">
        <h3>Art Of Arabia 1</h3>
        <p>Botella 100ml: $69000</p>
        <p>Decant 5ml: $9000</p>
        <button class="btn" onclick="pedir('Art Of Arabia 1 - Botella 100ml')">Pedir</button>
      </div>
      <div class="producto">
        <img src="https://simplicityar.vtexassets.com/arquivos/ids/187568/242461_edp-lattafa-badee-al-oud-honor-glory-x-100-ml_imagen-2.jpg?v=638793894569830000" alt="Honor and Glory">
        <h3>Honor and Glory</h3>
        <p>Botella 100ml: $59000</p>
        <button class="btn" onclick="pedir('Honor and Glory - Botella 100ml')">Pedir</button>
      </div>
      <div class="producto">
        <img src="https://fimgs.net/mdimg/perfume/o.78475.jpg" alt="Club de Nuit Iconic">
        <h3>Club de Nuit Iconic</h3>
        <p>Botella 100ml: $72000</p>
        <p>Decant 5ml: $9000</p>
        <button class="btn" onclick="pedir('Club de Nuit Iconic - Botella 100ml')">Pedir</button>
      </div>
      <div class="producto">
        <img src="https://acdn-us.mitiendanube.com/stores/004/878/940/products/03-a-36b6bee3b801d1e1b817214141637364-1024-1024.jpg" alt="Club de Nuit Urban Man Elixir">
        <h3>Club de Nuit Urban Man Elixir</h3>
        <p>Botella 100ml: $69000</p>
        <p>Decant 5ml: $8600</p>
        <button class="btn" onclick="pedir('Club de Nuit Urban Man Elixir - Botella 100ml')">Pedir</button>
      </div>
      <div class="producto">
        <img src="https://acdn-us.mitiendanube.com/stores/004/407/494/products/hayaati-c6426e81b3e9f6bd3b17101000099209-640-0.webp" alt="Lataffa Hayaati">
        <h3>Lataffa Hayaati</h3>
        <p>Botella 100ml: $54000</p>
        <p>Decant 5ml: $7000</p>
        <button class="btn" onclick="pedir('Lataffa Hayaati - Botella 100ml')">Pedir</button>
      </div>
      <div class="producto">
        <img src="https://perfumescardales.com.ar/wp-content/uploads/2023/06/ishq-gold-1.jpg" alt="Ishq Al Shuyukh Gold">
        <h3>Ishq Al Shuyukh Gold</h3>
        <p>Botella 100ml: $62000</p>
        <p>Decant 5ml: $7500</p>
        <button class="btn" onclick="pedir('Ishq Al Shuyukh Gold - Botella 100ml')">Pedir</button>
      </div>
      <div class="producto">
        <img src="https://http2.mlstatic.com/D_NQ_NP_794813-MLA82979797869_032025-O.webp" alt="Jean Lowe Immortal">
        <h3>Jean Lowe Immortal</h3>
        <p>Botella 100ml: $52000</p>
        <p>Decant 5ml: $7000</p>
        <button class="btn" onclick="pedir('Jean Lowe Immortal - Botella 100ml')">Pedir</button>
      </div>
      <div class="producto">
        <img src="https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/1f1b8d9a1b49678555bea203c2f52e39/1/5/155511-b-khamrah-qahwa-edp-100ml.jpg" alt="Khamrah Qahwa">
        <h3>Khamrah Qahwa</h3>
        <p>Botella 100ml: $67000</p>
        <p>Decant 5ml: $8500</p>
        <button class="btn" onclick="pedir('Khamrah Qahwa - Botella 100ml')">Pedir</button>
      </div>
      <div class="producto">
        <img src="https://acdn-us.mitiendanube.com/stores/003/226/824/products/1024-x-1024-px-2025-05-08t201634-631-f0b893b56cadb00ad417467461990687-1024-1024.jpg" alt="Lataffa Kingdom">
        <h3>Lataffa Kingdom</h3>
        <p>Botella 100ml: $71000</p>
        <p>Decant 5ml: $9000</p>
        <button class="btn" onclick="pedir('Lataffa Kingdom - Botella 100ml')">Pedir</button>
      </div>
      <div class="producto">
        <img src="https://layla-andco.com/cdn/shop/files/DE4B3489-D89C-4E1B-AC03-DCA2FB1D1378.jpg?v=1710768589" alt="Lataffa Yara Rose">
        <h3>Lataffa Yara Rose</h3>
        <p>Botella 100ml: $64000</p>
        <p>Decant 5ml: $8000</p>
        <button class="btn" onclick="pedir('Lataffa Yara Rose - Botella 100ml')">Pedir</button>
      </div>
      <div class="producto">
        <img src="https://http2.mlstatic.com/D_NQ_NP_886355-MLU74668053191_022024-O.webp" alt="Supremacy Not Only Intense">
        <h3>Supremacy Not Only Intense</h3>
        <p>Botella 100ml: $73000</p>
        <p>Decant 5ml: $10000</p>
        <button class="btn" onclick="pedir('Supremacy Not Only Intense - Botella 100ml')">Pedir</button>
      </div>
      <div class="producto">
        <img src="https://http2.mlstatic.com/D_NQ_NP_706392-CBT83047220019_032025-O.webp" alt="Vintage Radio">
        <h3>Vintage Radio</h3>
        <p>Botella 100ml: $69000</p>
        <p>Decant 5ml: $9000</p>
        <button class="btn" onclick="pedir('Vintage Radio - Botella 100ml')">Pedir</button>
      </div>
      <div class="producto">
        <img src="https://acdn-us.mitiendanube.com/stores/004/407/494/products/asad-d1a6c449c4071fd13017149465284044-480-0.webp" alt="Lataffa Asad">
        <h3>Lataffa Asad</h3>
        <p>Botella 100ml: $58000</p>
        <button class="btn" onclick="pedir('Lataffa Asad - Botella 100ml')">Pedir</button>
      </div>
      <div class="producto">
        <img src="https://acdn-us.mitiendanube.com/stores/004/407/494/products/asad-bourbon-8333192b3cc78bfa1017364419270910-1024-1024.jpg" alt="Asad Bourbon">
        <h3>Asad Bourbon</h3>
        <p>Botella 100ml: $66000</p>
        <button class="btn" onclick="pedir('Asad Bourbon - Botella 100ml')">Pedir</button>
      </div>
  </div>
</section>

<section class="pedido" id="formulario">
  <h2>Hacé tu pedido</h2>
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" placeholder="Tu nombre">

  <label for="whatsapp">WhatsApp:</label>
  <input type="text" id="whatsapp" placeholder="Número con código país, ej: 5411...">

  <label for="direccion">Dirección:</label>
  <input type="text" id="direccion" placeholder="Tu dirección">

  <label for="codigoPostal">Código Postal:</label>
  <input type="text" id="codigoPostal" placeholder="Tu código postal">

  <label for="producto">Producto:</label>
  <textarea id="producto" placeholder="Nombre del producto y cantidad"></textarea>

  <label for="cbu">CBU para pago:</label>
  <input type="text" id="cbu" value="0000003100095256660678" readonly style="background:#eee;">

  <label for="comprobante">Foto del comprobante:</label>
  <input type="file" id="comprobante" accept="image/*">

  <button onclick="enviarPedido()">Enviar por WhatsApp</button>
</section>

<footer>
  Palermo Store &copy; 2025. Todos los derechos reservados.
</footer>

<script>
function pedir(producto) {
  const telefono = "541160065713";
  const direccion = prompt("Ingresá tu dirección:");
  const codigoPostal = prompt("Ingresá tu código postal:");
  if(direccion && codigoPostal){
    const mensaje = `Hola, quiero hacer un pedido de: ${producto}\nDirección: ${direccion}\nCódigo Postal: ${codigoPostal}`;
    window.open(`https://api.whatsapp.com/send/?phone=${telefono}&text=${encodeURIComponent(mensaje)}`, "_blank");
  } else {
    alert("Por favor, ingresá tu dirección y código postal.");
  }
}

function enviarPedido() {
  const nombre = document.getElementById("nombre").value.trim();
  const whatsapp = document.getElementById("whatsapp").value.trim();
  const direccion = document.getElementById("direccion").value.trim();
  const codigoPostal = document.getElementById("codigoPostal").value.trim();
  const producto = document.getElementById("producto").value.trim();
  const comprobante = document.getElementById("comprobante");

  if(!nombre || !whatsapp || !direccion || !codigoPostal || !producto){
    alert("Por favor, completá todos los campos antes de enviar.");
    return;
  }

  const mensaje = `Hola, mi nombre es ${nombre}. Quiero hacer un pedido de: ${producto}\nWhatsApp: ${whatsapp}\nDirección: ${direccion}\nCódigo Postal: ${codigoPostal}`;

  if(comprobante.files.length > 0){
    alert("No es posible enviar la imagen automáticamente por WhatsApp Web. Adjuntá la foto manualmente en el chat.");
  }

  window.open(`https://api.whatsapp.com/send/?phone=541160065713&text=${encodeURIComponent(mensaje)}`, "_blank");
}
</script>

</body>
</html>
