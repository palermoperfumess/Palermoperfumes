<DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Perfumes Árabes - Tienda Online</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      margin: 0;
      background-color: #f8f8f8;
    }

    header, footer {
      background-color: #1c1c1c;
      color: white;
      padding: 20px;
      text-align: center;
    }

    h1, h2 {
      margin-top: 0;
    }

    .galeria {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: 20px;
      gap: 20px;
    }

    .producto {
      background: white;
      width: 220px;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      text-align: center;
      transition: transform 0.3s ease;
    }

    .producto:hover {
      transform: translateY(-8px);
    }

    .producto img {
      width: 100%;
      height: 250px;
      object-fit: cover;
    }

    .producto h3 {
      margin: 10px 0 5px;
    }

    .producto p {
      margin: 5px 0;
      color: #444;
    }

    .formulario {
      max-width: 500px;
      margin: 40px auto;
      background: white;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }

    input, select, textarea {
      width: 100%;
      padding: 12px;
      margin-top: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
    }

    button {
      background-color: #27ae60;
      color: white;
      border: none;
      padding: 12px;
      margin-top: 15px;
      width: 100%;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
    }

    button:hover {
      background-color: #219150;
    }

    ul {
      padding-left: 20px;
    }

    a {
      color: white;
      text-decoration: underline;
    }

    .whatsapp-float {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 999;
    }

    .whatsapp-float img {
      width: 60px;
      height: 60px;
    }

    #precio {
      margin-top: 10px;
      font-weight: bold;
      color: #27ae60;
    }

    @media (max-width: 600px) {
      .galeria {
        flex-direction: column;
        align-items: center;
      }

      .producto {
        width: 90%;
      }

      input, select, textarea {
        font-size: 14px;
      }

      button {
        font-size: 15px;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>Perfumes Árabes Originales y decants</h1>
    <p>Envíos a todo el país - Entrega inmediata en CABA </p>
  </header>

  <section class="galeria">
    <div class="producto">
      <img src="https://http2.mlstatic.com/D_Q_NP_852085-MLA80071541612_102024-O.webp" alt="Perfume Liquid Brun 100ml">
      <h3>Liquid Brun</h3>
      <p>Botella 100ml: $ 69000</p>
    </div>

    <div class="producto">
      <img src="https://d22fxaf9t8d39k.cloudfront.net/d4f256ba89932cfc21fd0fa7d8c13c80d65b40cb9a06428bba7813bfcc037d2d108925.webp" alt="Perfume Hawas Black">
      <h3>Hawas Black</h3>
      <p>Botella 100ml: $ 64000</p>
      <p>Decant 5ml: $ 9500</p>
    </div>

    <div class="producto">
      <img src="https://http2.mlstatic.com/D_609475-MLU77667701668_072024-C.jpg" alt="Perfume Hawas for Him">
      <h3>Hawas for Him</h3>
      <p>Botella 100ml: $ 55000</p>
      <p>Decant 5ml: $ 9000</p>
    </div>

    <div class="producto">
      <img src="https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/1f1b8d9a1b49678555bea203c2f52e39/1/5/155854-b-hawas-ice-men-edp-100ml.jpg" alt="Perfume Hawas Ice">
      <h3>Hawas Ice</h3>
      <p>Botella 100ml: $ 62000</p>
    </div>

    <div class="producto">
      <img src="https://fimgs.net/mdimg/perfume-thumbs/375x500.110808.jpg" alt="Perfume Hawas Elixir">
      <h3>Hawas Elixir</h3>
      <p>Botella 100ml: $ 66000</p>
    </div>

    <div class="producto">
      <img src="https://http2.mlstatic.com/D_NQ_NP_991070-MLA81953006706_022025-O.webp" alt="Perfume Bharara King">
      <h3>Bharara King</h3>
      <p>Botella 100ml: $ 88000</p>
      <p>Decant 5ml: $ 12000</p>
    </div> 

    <div class="producto">
      <img src="https://http2.mlstatic.com/D_843651-MLU76296948587_052024-C.jpg" alt="Perfume Amber Oud Gold Edition">
      <h3>Amber Oud</h3>
      <p>Botella 100ml: $ 85000</p>
    </div>
  
    <div class="producto">
      <img src="https://http2.mlstatic.com/D_NQ_NP_855959-MLA53669241732_022023-O.webp" alt="Perfume 9PM">
      <h3>9PM</h3>
      <p>100ml: $57000 </p>
      <p>Decant 5ml: $ 7500</p>
    </div>
    

    <div class="producto">
      <img src="https://fimgs.net/mdimg/perfume/o.99238.jpg" alt="Perfume 9PM Rebel">
      <h3>9PM Rebel</h3>
      <p>100ml: $ 62000</p>
      <p>Decant 5ml: $ 9000</p>
    </div>
    

    <div class="producto">
      <img src="https://u.makeup.com.ua/k/k8/k8hxu147fzcl.jpg" alt="Art Of Arabia 1">
      <h3>Art Of Arabia 1</h3>
      <p>100ml: $ 62000</p>
      <p>Decant 5ml: $ 9000</p>
    </div>
    

    <div class="producto">
      <img src="https://fimgs.net/mdimg/perfume/o.78475.jpg" alt="Club de Nuit Iconic">
      <h3>Club de Nuit Iconic</h3>
      <p>100ml: $ 63000</p>
      <p>Decant 5ml: $ 9000</p>
    </div>
    

    <div class="producto">
      <img src="https://acdn-us.mitiendanube.com/stores/004/878/940/products/03-a-36b6bee3b801d1e1b817214141637364-1024-1024.jpg" alt="Perfume Club de Nuit Urban Man Elixir">
      <h3>Club de Nuit Urban Man Elixir</h3>
      <p>100ml: $ 61000</p>
      <p>Decant 5ml: $ 8600</p>
    </div>
    

    <div class="producto">
      <img src="https://acdn-us.mitiendanube.com/stores/004/407/494/products/hayaati-c6426e81b3e9f6bd3b17101000099209-640-0.webp" alt="Perfume Hayatti">
      <h3>Lataffa Hayaati</h3>
      <p>100ml: $ 47000</p>
      <p>Decant 5ml: $ 7000</p>
    </div>
    

    <div class="producto">
      <img src="https://perfumescardales.com.ar/wp-content/uploads/2023/06/ishq-gold-1.jpg" alt="Perfume Ishq Al Shuyukh Gold">
      <h3>Ishq Al Shuyukh Gold</h3>
      <p>100ml: $ 54000 </p>
      <p>Decant 5ml: $ 7500</p>
    </div>
    

    <div class="producto">
      <img src="https://http2.mlstatic.com/D_NQ_NP_794813-MLA82979797869_032025-O.webp" alt="Perfume Jean Lowe Immortal">
      <h3>Jean Lowe Immortal</h3>
      <p>100ml: $ 45000</p>
      <p>Decant 5ml: $ 7000</p>
    </div>
    

    <div class="producto">
      <img src="https://d3cdlnm7te7ky2.cloudfront.net/media/catalog/product/cache/1f1b8d9a1b49678555bea203c2f52e39/1/5/155511-b-khamrah-qahwa-edp-100ml.jpg" alt="Perfume Khamrah Qahwa">
      <h3>Khamrah Qahwa</h3>
      <p>100ml: $ 59000</p>
      <p>Decant 5ml: $ 8500</p>
    </div>
    

    <div class="producto">
      <img src="https://acdn-us.mitiendanube.com/stores/003/226/824/products/1024-x-1024-px-2025-05-08t201634-631-f0b893b56cadb00ad417467461990687-1024-1024.jpg" alt="Perfume Lataffa Kingdom">
      <h3>Lataffa Kingdom</h3>
      <p>100ml: $ 60000</p>
      <p>Decant 5ml: $ 9000</p>
    </div>
    

    <div class="producto">
      <img src="https://layla-andco.com/cdn/shop/files/DE4B3489-D89C-4E1B-AC03-DCA2FB1D1378.jpg?v=1710768589" alt="Perfume Lataffa Yara Rose">
      <h3>Lataffa Yara Rose</h3>
      <p>100ml: $ 55000</p>
      <p>Decant 5ml: $ 8000</p>
    </div>
    

    <div class="producto">
      <img src="https://http2.mlstatic.com/D_NQ_NP_886355-MLU74668053191_022024-O.webp" alt="Perfume Supremacy Not Only Intense">
      <h3>Supremacy Not Only Intense</h3>
      <p>100ml: $ 63000</p>
      <p>Decant 5ml: $ 10000</p>
    </div>
    

    <div class="producto">
      <img src="https://http2.mlstatic.com/D_NQ_NP_706392-CBT83047220019_032025-O.webp" alt="Perfume Vintage Radio">
      <h3>Vintage Radio</h3>
      <p>100ml: $ 62000</p>
      <p>Decant 5ml: $ 9000</p>
    </div>
    <div class="producto">
      <img src="https://acdn-us.mitiendanube.com/stores/004/407/494/products/asad-d1a6c449c4071fd13017149465284044-480-0.webp" alt="Lataffa Asad">
      <h3>Lataffa asad</h3>
      <p>100ml: $ 50000</p>
    </div>
    <div class="producto">
      <img src="https://acdn-us.mitiendanube.com/stores/004/407/494/products/asad-bourbon-8333192b3cc78bfa1017364419270910-1024-1024.jpg" alt="Asad Bourbon">
      <h3>Asad Bourbon</h3>
      <p>100ml: $ 59000</p>
    </div>

    <div class="producto">
      <img src="https://www.apple.com/v/airpods-pro/n/images/meta/og__eui2mpgzwyaa_overview.png" alt="AirPods Pro 2">
      <h3>AirPods Pro 2(Triple A,La mejor calidad.)</h3>
      <p>$ 33000</p>
    </div>
    <div class="producto">
      <img src="https://http2.mlstatic.com/D_NQ_NP_641270-MLA77137899388_062024-O.webp" alt="Cargador Iphone Certificado 20W">
      <h3>Cargador Iphone Certificado 20W </h3>
      <p>$ 21000</p>
    </div>
     <div class="producto">
      <img src="https://puntotienda.com.py/wp-content/uploads/2023/11/le-male.jpg" alt="Perfumes de diseñador Tester">
      <h3>Perfumes de diseñador Tester(consultar precio en Whatsapp</h3>
      <p>100ml: $ </p>
    </div>

    
</section>

  <section class="formulario">
    <h2>Hacer un pedido</h2>
    <form action="#" method="POST">
      <label for="nombre">Nombre y Apellido</label>
      <input type="text" id="nombre" name="nombre" required>

      <label for="telefono">Teléfono</label>
      <input type="tel" id="telefono" name="telefono" required>

      <label for="perfume">Perfume elegido</label>
      <select name="perfume" id="perfume" required>
        <option value="" disabled selected>Seleccionar perfume</option>
        <!-- Botellas -->
        <option value="$ 69000">Liquid Brun - Botella 100ml</option>
        <option value="$ 55000">Hawas for Him - Botella 100ml</option>
        <option value="$ 64000">Hawas Black - Botella 100ml</option>
        <option value="$ 62000">Hawas Ice - Botella 100ml</option>
        <option value="$ 66000">Hawas Elixir - Botella 100ml</option>
        <option value="$ 88000">Bharara King - Botella 100ml</option>
        <option value="$ 85000">Amber Oud - Botella 100ml</option>
        <option value="$ 57000">9PM - Botella 100ml </option>
        <option value="$ 62000">9PM Rebel - Botella 100ml </option>
        <option value="$ 62000">Art of Arabia 1 - 100ml</option>
        <option value="$ 63000">Club de Nuit Iconic - 100ml</option>
        <option value="$ 61000">Club de Nuit Urban Man Elixir - 100ml</option>
        <option value="$ 47000">Hayatti - 100ml</option>
        <option value="$ 55000">Hawas for Him - 100ml</option>
        <option value="$ 54000">Ishq Al Shuyukh Gold - 100ml</option>
        <option value="$ 46000">Jean Lowe Immortal - 100ml</option>
        <option value="$ 59000">Khamrah Qahwa - 100ml</option>
        <option value="$ 60000">Lataffa Kingdom - 100ml</option>
        <option value="$ 57000">Lataffa Yara Rose - 100ml</option>
        <option value="$ 63000">Supremacy Not Only Intense - 100ml</option>
        <option value="$ 62000">Vintage Radio - 100ml</option>
        <option value="$ 50000">Asad Botella 100ml</option>
        <option value="$ 59000">Asad Bourbon 100ml - </option>
        <option value="$ 33000">AirPods Pro 2(con garantia apple de 1 año)</option>
        <option value="$ 21000">Cargador Iphone Certificado 20W</option>
        <!-- Decants -->
        <option value="$ 7500">9PM - Decant 5ml</option>
        <option value="$ 9000">9PM Rebel - Decant 5ml</option>
        <option value="$ 9000">Art of Arabia 1 - Decant 5ml</option>
        <option value="$ 12000">Bharara King - Decant 5ml</option>
        <option value="$ 9000">Club de Nuit Iconic - Decant 5ml</option>
        <option value="$ 8600">Club de Nuit Urban Man Elixir - Decant 5ml</option>
        <option value="$ 7000">Hayatti - Decant 5ml</option>
        <option value="$ 8000">Hawas for Him - Decant 5ml</option>
        <option value="$ 7500">Ishq Al Shuyukh Gold - Decant 5ml</option>
        <option value="$ 7000">Jean Lowe Immortal - Decant 5ml</option>
        <option value="$ 8500">Khamrah Qahwa - Decant 5ml</option>
        <option value="$ 9000">Lataffa Kingdom - Decant 5ml</option>
        <option value="$ 8000">Lataffa Yara Rose - Decant 5ml</option>
        <option value="$ 10000">Supremacy Not Only Intense - Decant 5ml</option>
        <option value="$ 9000">Vintage Radio - Decant 5ml</option>
      </select>

      <p id="precio"></p>

      <label for="pago">Forma de pago</label>
      <select name="pago" id="pago" required>
        <option value="Transferencia bancaria">Transferencia bancaria</option>
        <option value="Mercado Pago">Mercado Pago</option>
      </select>

      <label for="direccion">Dirección de envío</label>
      <textarea name="direccion" id="direccion" rows="3" required></textarea>

      <p><strong>CBU para transferencias:</strong> 0000003100095256660678</p>

      <button type="submit">Enviar pedido</button>
    </form>

    <h2>Decants disponibles (5ml)</h2>
    <ul>
      <li>9PM - $ 7500</li>
      <li>9PM Rebel - $ 9000 </li>
      <li>Art of Arabia 1 - $ 9000</li>
      <li>Bharara King - $ 12000</li>
      <li>Club de Nuit Iconic - $ 9000</li>
      <li>Club de Nuit Urban Man Elixir - $ 8600</li>
      <li>Hayatti - $ 7000</li>
      <li>Hawas for Him - $ 8000</li>
      <li>Ishq Al Shuyukh Gold - $ 7500</li>
      <li>Jean Lowe Immortal - $ 7000</li>
      <li>Khamrah Qahwa - $ 8500</li>
      <li>Lataffa Kingdom - $ 9000</li>
      <li>Lataffa Yara Rose - $ 8000</li>
      <li>Supremacy Not Only Intense - $ 10000</li>
      <li>Vintage Radio - $ 9000</li>
    </ul>
  </section>

  <footer>
    <p>&copy; 2025 Perfumes Árabes. Todos los derechos reservados.</p>
    <p>WhatsApp: <a href="https://wa.me/541160065713" target="_blank">+54 11 6006-5713</a></p>
  </footer>

  <a href="https://wa.me/541160065713" class="whatsapp-float" target="_blank">
    <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp">
  </a>

  <script>
    document.getElementById("perfume").addEventListener("change", function() {
      const precio = this.options[this.selectedIndex].value;
      document.getElementById("precio").textContent = precio ? "Precio: " + precio : "";
    });

    document.querySelector('.formulario form').addEventListener('submit', function(e) {
      e.preventDefault();
      const nombre = document.getElementById('nombre').value;
      const telefono = document.getElementById('telefono').value;
      const perfume = document.getElementById('perfume').options[document.getElementById('perfume').selectedIndex].text;
      const pago = document.getElementById('pago').value;
      const direccion = document.getElementById('direccion').value;

      const mensaje = encodeURIComponent(
        `Nuevo pedido:%0A%0ANombre: ${nombre}%0ATeléfono: ${telefono}%0APerfume: ${perfume}%0AForma de pago: ${pago}%0ADirección: ${direccion}`
      );

      window.location.href = `https://wa.me/541160065713?text=${mensaje}`;
    });
  </script>
</body>
</html>
