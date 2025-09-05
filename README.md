<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tienda de Perfumes y Tecnología</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background: #f5f5f5;
            scroll-behavior: smooth;
        }
        nav {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background: #111;
            color: white;
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 0.8rem;
            z-index: 1000;
        }
        nav a {
            color: white;
            text-decoration: none;
            font-weight: bold;
            font-size: 0.95rem;
            transition: color 0.3s;
        }
        nav a:hover {
            color: #27ae60;
        }
        header {
            background: #111;
            color: white;
            padding: 4.5rem 1rem 1.5rem 1rem;
            text-align: center;
        }
        h2 {
            text-align: center;
            margin: 1rem 0;
        }
        .galeria {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
            gap: 1rem;
            padding: 1rem;
        }
        .producto {
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            padding: 0.8rem;
            text-align: center;
            transition: transform 0.2s ease-in-out;
        }
        .producto:hover {
            transform: translateY(-5px);
        }
        .producto img {
            max-width: 100%;
            height: 140px;
            object-fit: contain;
            border-radius: 10px;
        }
        .producto h3 {
            font-size: 0.9rem;
            margin: 0.5rem 0;
        }
        .producto p {
            margin: 0.3rem 0;
            font-size: 0.8rem;
        }
        .btn {
            margin-top: 0.4rem;
            padding: 0.4rem 0.8rem;
            border: none;
            background: #111;
            color: white;
            border-radius: 8px;
            cursor: pointer;
            font-size: 0.8rem;
            transition: background 0.3s;
        }
        .btn:hover {
            background: #444;
        }
        .pedido {
            background: white;
            padding: 1rem;
            margin: 1rem;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .pedido h2 {
            text-align: center;
            margin-bottom: 1rem;
        }
        .pedido label {
            display: block;
            margin: 0.5rem 0 0.2rem 0;
            font-weight: bold;
        }
        .pedido input, .pedido textarea, .pedido select {
            width: 100%;
            padding: 0.5rem;
            margin-bottom: 0.8rem;
            border-radius: 8px;
            border: 1px solid #ccc;
            font-size: 0.9rem;
        }
        .pedido button {
            width: 100%;
            padding: 0.7rem;
            background: #111;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1rem;
            transition: background 0.3s;
        }
        .pedido button:hover {
            background: #444;
        }
        .ir-pedido {
            display: block;
            width: fit-content;
            margin: 0 auto 1rem auto;
            padding: 0.5rem 1rem;
            background: #27ae60;
            color: white;
            border-radius: 8px;
            text-decoration: none;
            font-weight: bold;
            transition: background 0.3s;
        }
        .ir-pedido:hover {
            background: #219150;
        }
        @media (max-width: 600px) {
            nav {
                flex-direction: column;
                gap: 0.5rem;
            }
            .producto img {
                height: 120px;
            }
            .producto h3 {
                font-size: 0.85rem;
            }
            .producto p {
                font-size: 0.75rem;
            }
            .btn {
                font-size: 0.75rem;
                padding: 0.35rem 0.6rem;
            }
            .pedido input, .pedido textarea, .pedido select {
                font-size: 0.85rem;
            }
        }
    </style>
</head>
<body>
    <!-- NAV -->
    <nav>
        <a href="#tecnologia">Tecnología</a>
        <a href="#perfumes">Perfumes</a>
        <a href="#formulario">Pedido</a>
    </nav>

    <header>
        <h1>Tienda de Perfumes y Tecnología</h1>
        <p>Envíos a todo el país. Hacé tu pedido directo por WhatsApp o con el formulario.</p>
        <p>Se puede pagar al recibir el producto solo en CABA.</p>
        <a href="#formulario" class="ir-pedido">Hacé tu pedido</a>
    </header>

    <h2>Tecnología</h2>
    <section class="galeria" id="tecnologia">
        <div class="producto">
            <img src="https://www.apple.com/v/airpods-pro/n/images/meta/og__eui2mpgzwyaa_overview.png" alt="AirPods Pro 2">
            <h3>AirPods Pro 2 (Garantía de 1 Mes)</h3>
            <h3>Calidad PREMIUM!!</h3>
            <p>$35000</p>
            <button class="btn" onclick="pedir('AirPods Pro 2 - $35000')">Pedir</button>
        </div>
        <div class="producto">
            <img src="https://http2.mlstatic.com/D_NQ_NP_641270-MLA77137899388_062024-O.webp" alt="Cargador Iphone Certificado 20W">
            <h3>Cargador Iphone Certificado 20W</h3>
            <p>$21000</p>
            <button class="btn" onclick="pedir('Cargador Iphone Certificado 20W - $21000')">Pedir</button>
        </div>
        <div class="producto">
            <img src="https://www.mink.com.ar/qloud/ryr/fotos/23864-1.jpg" alt="Cargador portatil Magsafe">
            <h3>Cargador portatil Magsafe</h3>
            <p>$26000</p>
            <button class="btn" onclick="pedir('Cargador portatil Magsafe - $26000')">Pedir</button>
        </div>
        <div class="producto">
            <img src="https://http2.mlstatic.com/D_NQ_NP_902179-MLA90279728907_082025-O.webp" alt="Celular Redmi 15C">
            <h3>Celular Redmi 15C 128gb 8gb ram</h3>
            <p>$225000</p>
            <button class="btn" onclick="pedir('Redmi 15 C - $225000')">Pedir</button>
        </div>
        <div class="producto">
            <img src="https://http2.mlstatic.com/D_NQ_NP_963050-MLA87770878402_072025-O.webp" alt="Fundas Silicone Case Iphone">
            <h3>Fundas Silicone Case Iphone</h3>
            <p>$12000</p>
            <button class="btn" onclick="pedir('Fundas Silicone Case- $12000')">Pedir</button>
        </div>
    </section>

    <h2>Perfumes</h2>
    <section class="galeria" id="perfumes">
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
    </section>

    <!-- FORMULARIO PEDIDO -->
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

    <script>
        function pedir(producto) {
            const telefono = "541160065713";
            const direccion = prompt("Ingresá tu dirección:");
            const codigoPostal = prompt("Ingresá tu código postal:");
            if (direccion && codigoPostal) {
                const mensajeCompleto = `Hola, quiero hacer un pedido de: ${producto}\nDirección: ${direccion}\nCódigo Postal: ${codigoPostal}`;
                window.open(`https://api.whatsapp.com/send/?phone=${telefono}&text=${encodeURIComponent(mensajeCompleto)}`, "_blank");
            } else {
                alert("Por favor, ingresá tu dirección y código postal para continuar con el pedido.");
            }
        }
        function enviarPedido() {
            const nombre = document.getElementById("nombre").value.trim();
            const whatsapp = document.getElementById("whatsapp").value.trim();
            const direccion = document.getElementById("direccion").value.trim();
            const codigoPostal = document.getElementById("codigoPostal").value.trim();
            const producto = document.getElementById("producto").value.trim();
            const mensaje = `Hola, mi nombre es ${nombre}. Quiero hacer un pedido de: ${producto}\nDirección: ${direccion}\nCódigo Postal: ${codigoPostal}`;
            window.open(`https://api.whatsapp.com/send/?phone=541160065713&text=${encodeURIComponent(mensaje)}`, "_blank");
        }
    </script>
</body>
</html>
