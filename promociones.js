// ==========================
// PROMOCIONES Y CÁLCULOS
// ==========================

const PRODUCTOS = [
  { id: 1, nombre: "Liquid Brun", precio: 78000 },
  { id: 2, nombre: "Hawas Black", precio: 72000 },
  { id: 3, nombre: "Hawas for Him", precio: 62000 },
  { id: 4, nombre: "Hawas Ice", precio: 70000 },
  { id: 5, nombre: "Hawas Elixir", precio: 73000 },
  { id: 6, nombre: "Bharara King", precio: 94000 },
  { id: 7, nombre: "Amber Oud", precio: 92000 },
  { id: 8, nombre: "9PM", precio: 63000 },
  { id: 9, nombre: "9PM Rebel", precio: 69000 },
  { id: 10, nombre: "Art Of Arabia 1", precio: 69000 },
  { id: 11, nombre: "Honor and Glory", precio: 59000 },
  { id: 12, nombre: "Club de Nuit Iconic", precio: 72000 },
  { id: 13, nombre: "Club de Nuit Urban Man Elixir", precio: 69000 },
  { id: 14, nombre: "Lataffa Hayaati", precio: 54000 },
  { id: 15, nombre: "Ishq Al Shuyukh Gold", precio: 62000 },
  { id: 16, nombre: "Jean Lowe Immortal", precio: 52000 },
  { id: 17, nombre: "Khamrah Qahwa", precio: 67000 },
  { id: 18, nombre: "Lataffa Kingdom", precio: 71000 },
  { id: 19, nombre: "Lataffa Yara Rose", precio: 64000 },
  { id: 20, nombre: "Supremacy Not Only Intense", precio: 73000 },
  { id: 21, nombre: "Vintage Radio", precio: 69000 },
  { id: 22, nombre: "Lataffa Asad", precio: 58000 },
  { id: 23, nombre: "Asad Bourbon", precio: 66000 }
];

function fmt(n) {
  if (typeof n !== "number") n = Number(n) || 0;
  return n.toLocaleString("es-AR", { maximumFractionDigits: 0 });
}

// ==========================
// GENERACIÓN DE LÍNEAS DE PRODUCTO (solo si existen los elementos)
// ==========================
const lineasContainer = document.getElementById("lineasContainer");
const agregarBtn = document.getElementById("agregarLinea");
const limpiarBtn = document.getElementById("limpiar");
const calcularBtn = document.getElementById("calcularCarritoPromos");
const resultadoBox = document.getElementById("resultadoPromos");
const resSubtotal = document.getElementById("resSubtotal");
const resDescuentoDetalle = document.getElementById("resDescuentoDetalle");
const resTotal = document.getElementById("resTotal");
const resPromoAplicada = document.getElementById("resPromoAplicada");
const resAhorro = document.getElementById("resAhorro");
const promoAutoCheckbox = document.getElementById("promoAuto");
const promoContainer = document.getElementById("promo-container");
const detalleLineasDiv = document.getElementById("detalleLineas");

let lineaId = 0;
function crearLinea(productId = 1, cantidad = 1) {
  lineaId++;
  const id = lineaId;
  const div = document.createElement("div");
  div.className = "linea-producto";

  const select = document.createElement("select");
  PRODUCTOS.forEach(p => {
    const opt = document.createElement("option");
    opt.value = p.id;
    opt.textContent = `${p.nombre} — $${fmt(p.precio)}`;
    if (productId === p.id) opt.selected = true;
    select.appendChild(opt);
  });

  const inputQty = document.createElement("input");
  inputQty.type = "number";
  inputQty.min = "1";
  inputQty.value = cantidad;
  inputQty.className = "input-cant";

  const btnQuitar = document.createElement("button");
  btnQuitar.type = "button";
  btnQuitar.textContent = "✖";
  btnQuitar.className = "btn-quitar";
  btnQuitar.addEventListener("click", () => {
    div.remove();
    if (lineasContainer.children.length === 0) crearLinea();
  });

  div.append(select, inputQty, btnQuitar);
  lineasContainer.appendChild(div);
}

// ========== PROMOCIONES ==========
function promoA(precio, cantidad) {
  const pares = Math.floor(cantidad / 2);
  return pares * (precio * 0.5);
}
function promoB(precio, cantidad) {
  const grupos3 = Math.floor(cantidad / 3);
  return grupos3 * precio;
}
function promoC(subtotal) {
  return subtotal >= 30000 ? subtotal * 0.1 : 0;
}

function agruparPorProducto(filas) {
  const mapa = new Map();
  filas.forEach(fila => {
    const select = fila.querySelector("select");
    const input = fila.querySelector("input[type='number']");
    if (!select || !input) return;
    const pid = Number(select.value);
    const qty = Math.max(1, parseInt(input.value, 10) || 1);
    const producto = PRODUCTOS.find(p => p.id === pid);
    if (!producto) return;
    if (!mapa.has(pid)) mapa.set(pid, { producto, cantidad: qty });
    else mapa.get(pid).cantidad += qty;
  });
  return Array.from(mapa.values());
}

// ==========================
// EVENTOS PROMOCIONES (solo si existen los botones)
// ==========================
if (lineasContainer) {
  if (lineasContainer.children.length === 0) crearLinea();

  agregarBtn?.addEventListener("click", () => crearLinea());
  limpiarBtn?.addEventListener("click", () => {
    lineasContainer.innerHTML = "";
    crearLinea();
    resultadoBox.style.display = "none";
  });

  calcularBtn?.addEventListener("click", () => {
    const filas = Array.from(lineasContainer.children);
    if (filas.length === 0) {
      alert("Agregá al menos un producto.");
      return;
    }

    let subtotal = 0;
    const agrupados = agruparPorProducto(filas);
    const detalle = [];

    agrupados.forEach(item => {
      const p = item.producto;
      const c = item.cantidad;
      const lineSubtotal = p.precio * c;
      subtotal += lineSubtotal;

      const dA = promoA(p.precio, c);
      const dB = promoB(p.precio, c);
      const mejorAB = Math.max(dA, dB);

      detalle.push({ nombre: p.nombre, cantidad: c, precio: p.precio, lineSubtotal, dA, dB, mejorAB });
    });

    const descuentoABtotal = detalle.reduce((s, it) => s + it.mejorAB, 0);
    const descuentoC = promoC(subtotal);

    let descuentoFinal = 0;
    let promoTexto = "";
    if (promoAutoCheckbox?.checked) {
      if (descuentoC > descuentoABtotal) {
        descuentoFinal = descuentoC;
        promoTexto = `Se aplicó Promo C (10% sobre subtotal): $${fmt(descuentoC)}.`;
      } else {
        descuentoFinal = descuentoABtotal;
        promoTexto = `Se aplicaron Promo A/B por producto — total $${fmt(descuentoABtotal)}.`;
      }
    } else {
      descuentoFinal = descuentoABtotal;
      promoTexto = `Auto-aplicación desactivada — se aplican Promo A/B.`;
    }

    const total = subtotal - descuentoFinal;
    const ahorro = descuentoFinal;
    const pct = subtotal > 0 ? Math.round((ahorro / subtotal) * 100) : 0;

    const detalleTexto = detalle.map(d => {
      let aplicado = "Sin A/B";
      if (d.mejorAB > 0) {
        if (d.dB > d.dA) aplicado = `B (3x2) = $${fmt(d.dB)}`;
        else if (d.dA > d.dB) aplicado = `A (50% en 2do) = $${fmt(d.dA)}`;
        else aplicado = `A y B igualaron = $${fmt(d.mejorAB)}`;
      }
      return `${d.nombre} — ${d.cantidad} x $${fmt(d.precio)} = $${fmt(d.lineSubtotal)} → ${aplicado}`;
    }).join("\n");

    resultadoBox.style.display = "block";
    resSubtotal.textContent = ` Subtotal: $${fmt(subtotal)}`;
    resDescuentoDetalle.textContent = ` Descuento total: $${fmt(descuentoFinal)}`;
    resPromoAplicada.textContent = promoTexto;
    detalleLineasDiv.textContent = detalleTexto;
    resTotal.textContent = ` Total a pagar: $${fmt(total)}`;
    resAhorro.textContent = `Has ahorrado $${fmt(ahorro)} (${pct}%)`;
  });
}

// ==========================
// TARJETAS DE PROMOS FIJAS (solo si existe el contenedor)
// ==========================
if (promoContainer) {
  const promos = [
    { nombre: "Hawas Black", texto: "20% OFF esta semana en todas las presentaciones.", img: "https://d22fxaf9t8d39k.cloudfront.net/d4f256ba89932cfc21fd0fa7d8c13c80d65b40cb9a06428bba7813bfcc037d2d108925.webp" },
    { nombre: "Bharara King", texto: "Combo 100ml + decant 5ml a solo $99.000.", img: "https://http2.mlstatic.com/D_NQ_NP_991070-MLA81953006706_022025-O.webp" },
    { nombre: "9PM Rebel", texto: "Llevate el segundo decant al 50% de descuento.", img: "https://fimgs.net/mdimg/perfume/o.99238.jpg" },
    { nombre: "Supremacy Not Only Intense", texto: "Fragancia top del mes, envío gratis en CABA.", img: "https://http2.mlstatic.com/D_NQ_NP_886355-MLU74668053191_022024-O.webp" },
    { nombre: "Lataffa Kingdom", texto: "Nuevo lanzamiento: 10% de descuento por tiempo limitado.", img: "https://acdn-us.mitiendanube.com/stores/003/226/824/products/1024-x-1024-px-2025-05-08t201634-631-f0b893b56cadb00ad417467461990687-1024-1024.jpg" }
  ];
  promos.forEach(p => {
    const div = document.createElement("div");
    div.className = "card-promo";
    div.innerHTML = `
      <img src="${p.img}" alt="${p.nombre}">
      <div class="card-info">
        <h3>${p.nombre}</h3>
        <p>${p.texto}</p>
      </div>`;
    promoContainer.appendChild(div);
  });
}

// ==========================
// ENVÍO DE PEDIDOS POR WHATSAPP
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formPedido");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const whatsapp = document.getElementById("whatsapp").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const codigo = document.getElementById("codigoPostal").value.trim();
    const producto = document.getElementById("producto").value.trim();

    if (!nombre || !whatsapp || !direccion || !codigo || !producto) {
      alert("Por favor completá todos los campos antes de enviar.");
      return;
    }

    const telefono = "541160065713"; // tu número de destino

    const mensaje = encodeURIComponent(
      ` *Nuevo pedido desde Palermo Store*\n\n` +
      ` Nombre: ${nombre}\n` +
      ` WhatsApp: ${whatsapp}\n` +
      ` Dirección: ${direccion}\n` +
      ` Código Postal: ${codigo}\n` +
      ` Producto/s: ${producto}\n\n` +
      `Gracias por tu compra `
    );

    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${mensaje}`;
    window.open(url, "_blank");
  });
});
