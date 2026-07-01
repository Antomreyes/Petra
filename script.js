const productos = [
  { 
    id: 1, nombre: 'Billetera Burdeo', categoria: 'billeteras', precio: '23.000', 
    foto: './IMG_6118.JPG', 
    fotos: ['./IMG_6118.JPG', './IMG_6129.JPG', './IMG_6154.JPG', './IMG_6146.JPG'],
    desc: 'Color: Burdeo/Vino · Material: Cuero genuino print croco · Medidas: 19 x 10 cm · Billetera larga con porta documentos, múltiples bolsillos para tarjetas y bolsillo trasero con cierre.' 
  },
  { 
    id: 2, nombre: 'Billetera Julia', categoria: 'billeteras', precio: '23.000', 
    foto: './IMG_6131.JPG', fotos: ['./IMG_6131.JPG'],
    desc: 'Color: Burdeo · Material: Cuero genuino print croco · Medidas: 19 x 10 cm · Billetera larga compacta con múltiples compartimientos.' 
  },
  { 
    id: 3, nombre: 'Billetera Hombre', categoria: 'billeteras', precio: '18.000', 
    foto: './IMG_6308.JPG', 
    fotos: ['./IMG_6308.JPG', './IMG_6310.JPG', './IMG_6321.JPG', './IMG_6325.JPG'],
    desc: 'Color: Café oscuro · Material: Cuero natural envejecido · Medidas: 11 x 9 cm · Billetera compacta con 4 bolsillos para tarjetas y porta documentos.' 
  },
  { 
    id: 4, nombre: 'Chequera', categoria: 'billeteras', precio: '26.000', 
    foto: '', fotos: [], 
    desc: '' 
  },
  { 
    id: 5, nombre: 'Cartera Roma', categoria: 'carteras', precio: '52.000', 
    foto: './IMG_4663.JPG', fotos: ['./IMG_4663.JPG'],
    desc: 'Color: Camel · Material: Cuero natural · Medidas: 38 x 30 cm · Cartera tote espaciosa con asas largas y remaches decorativos. Ideal para el día a día.' 
  },
  { 
    id: 6, nombre: 'Cartera Sicilia', categoria: 'carteras', precio: '62.000', 
    foto: './IMG_4618.JPG', fotos: ['./IMG_4618.JPG'],
    desc: 'Color: Verde oliva · Material: Cuero natural · Medidas: 40 x 32 cm · Cartera tote con remaches plateados y asas largas. Diseño artesanal único.' 
  },
  { 
    id: 7, nombre: 'Cartera Bolonia', categoria: 'carteras', precio: '72.000', 
    foto: './IMG_4696.JPG', fotos: ['./IMG_4696.JPG'],
    desc: 'Color: Camel · Material: Cuero natural · Medidas: 38 x 30 cm · Cartera tote con estrella decorativa. Diseño exclusivo artesanal.' 
  },
  { 
    id: 8, nombre: 'Cartera para Celular', categoria: 'carteras', precio: '12.000', 
    foto: '', fotos: [], desc: '' 
  },
  { 
    id: 9, nombre: 'Neceser Grande', categoria: 'neceser', precio: '30.000', 
    foto: '', fotos: [], desc: '' 
  },
  { 
    id: 10, nombre: 'Neceser Mediano', categoria: 'neceser', precio: '25.000', 
    foto: './IMG_6239.JPG', fotos: ['./IMG_6239.JPG'],
    desc: 'Color: Café envejecido · Material: Cuero natural · Medidas: 22 x 14 cm · Neceser con cierre y asa de cuero. Perfecto para viaje o uso diario.' 
  },
  { 
    id: 11, nombre: 'Cosmetiquero Print', categoria: 'neceser', precio: '32.000', 
    foto: './IMG_6266.JPG', fotos: ['./IMG_6266.JPG'],
    desc: 'Color: Animal print blanco · Material: Cuero genuino estampado · Medidas: 20 x 14 cm · Cosmetiquero con cierre y asa lateral.' 
  },
  { 
    id: 12, nombre: 'Cosmetiquero Dorado', categoria: 'neceser', precio: '32.000', 
    foto: './IMG_6260.JPG', fotos: ['./IMG_6260.JPG'],
    desc: 'Color: Dorado/Champagne · Material: Cuero genuino · Medidas: 20 x 14 cm · Cosmetiquero elegante con cierre y asa lateral.' 
  },
  { 
    id: 13, nombre: 'Cosmetiquero Animal Print', categoria: 'neceser', precio: '32.000', 
    foto: './IMG_6252.JPG', fotos: ['./IMG_6252.JPG'],
    desc: 'Color: Leopardo café · Material: Cuero genuino estampado · Medidas: 20 x 14 cm · Cosmetiquero con cierre dorado y asa lateral.' 
  },
  { 
    id: 14, nombre: 'Tarjetero', categoria: 'accesorios', precio: '9.000', 
    foto: '', fotos: [], desc: '' 
  },
  { 
    id: 15, nombre: 'Porta Pasaporte', categoria: 'accesorios', precio: '12.000', 
    foto: './IMG_6280.JPG', 
    fotos: ['./IMG_6280.JPG', './IMG_6303.JPG', './IMG_6290.JPG', './IMG_6284.JPG'],
    desc: 'Color: Camel print croco · Material: Cuero genuino · Medidas: 14 x 10 cm · Porta pasaporte con bolsillos para tarjetas y documentos.' 
  },
  { 
    id: 16, nombre: 'Agenda Pequeña', categoria: 'accesorios', precio: '15.000', 
    foto: './IMG_6198.JPG', fotos: ['./IMG_6198.JPG'],
    desc: 'Color: Café vintage · Material: Cuero natural envejecido · Medidas: 15 x 11 cm · Agenda con funda de cuero y broche dorado. Libreta incluida.' 
  },
  { 
    id: 17, nombre: 'Agenda Grande', categoria: 'accesorios', precio: '20.000', 
    foto: './IMG_6172.JPG', fotos: ['./IMG_6172.JPG'],
    desc: 'Color: Café vintage · Material: Cuero natural envejecido · Medidas: 22 x 16 cm · Agenda grande con funda de cuero y broche dorado. Libreta incluida.' 
  },
  { 
    id: 18, nombre: 'Notebook Case', categoria: 'accesorios', precio: '40.000', 
    foto: '', fotos: [], desc: '' 
  },
  { 
    id: 19, nombre: 'Guantes Parrilleros', categoria: 'accesorios', precio: '15.000', 
    foto: './IMG_6277.JPG', fotos: ['./IMG_6277.JPG'],
    desc: 'Color: Camel · Material: Cuero natural resistente al calor · Medidas: Talla única · Guante artesanal ideal para parrilla o asado.' 
  },
  { 
    id: 20, nombre: 'Straps', categoria: 'accesorios', precio: '5.000', 
    foto: './IMG_6339.JPG', fotos: ['./IMG_6339.JPG'],
    desc: 'Color: Camel y Leopardo · Material: Cuero natural · Largos variables · Straps artesanales para carteras o accesorios.' 
  },
  { 
    id: 21, nombre: 'Babucha Creta', categoria: 'zapatos', precio: '60.000', 
    foto: '', fotos: [], desc: '' 
  },
  { 
    id: 22, nombre: 'Botín Estrella', categoria: 'zapatos', precio: '75.000', 
    foto: './IMG_6377.JPG', fotos: ['./IMG_6377.JPG'],
    desc: 'Color: Negro · Material: Cuero genuino con aplicaciones de gamuza · Medidas: Tallas 35-40 · Botín con estrellas decorativas y taco bajo.' 
  },
];

const WHATSAPP = '+56944785614';

let categoriaActiva = 'todos';

function filtrar(cat, btn) {
  categoriaActiva = cat;
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProductos();
}

function renderProductos() {
  const grid = document.getElementById('grid');
  const lista = categoriaActiva === 'todos'
    ? productos
    : productos.filter(p => p.categoria === categoriaActiva);

  if (lista.length === 0) {
    grid.innerHTML = '<p style="text-align:center;padding:60px;color:#7A5A3A;">Próximamente...</p>';
    return;
  }

  grid.innerHTML = lista.map(p => `
    <div class="card" onclick="abrirProducto(${p.id})">
      ${p.foto
        ? `<img class="card-img" src="${p.foto}" alt="${p.nombre}">`
        : `<div class="card-img-placeholder">📷</div>`}
      <div class="card-body">
        <div class="card-name">${p.nombre}</div>
        <div class="card-price">${p.precio ? '$ ' + p.precio : 'Consultar precio'}</div>
      </div>
    </div>
  `).join('');
}

function abrirProducto(id) {
  const p = productos.find(x => x.id === id);
  if (!p) return;

  document.getElementById('modal-nombre').textContent = p.nombre;
  document.getElementById('modal-precio').textContent = p.precio ? '$ ' + p.precio : 'Consultar precio';
  document.getElementById('modal-desc').textContent = p.desc || '';

  const fotosHTML = p.fotos && p.fotos.length > 0
    ? p.fotos.map(f => `<img src="${f}" alt="${p.nombre}">`).join('')
    : p.foto
      ? `<img src="${p.foto}" alt="${p.nombre}">`
      : '<p style="color:#7A5A3A;text-align:center;padding:40px;">📷 Fotos próximamente</p>';

  document.getElementById('modal-fotos').innerHTML = fotosHTML;

  const msg = encodeURIComponent('Hola! Me interesa: ' + p.nombre);
  document.getElementById('btn-wa').href = 'https://wa.me/' + WHATSAPP + '?text=' + msg;

  document.getElementById('modal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
  document.body.style.overflow = '';
}

renderProductos();
