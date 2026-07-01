const productos = [
  { id: 1, nombre: 'Billetera Burdeo', categoria: 'billeteras', precio: '23.000', foto: './IMG_6118.JPG' },
  { id: 2, nombre: 'Billetera Julia', categoria: 'billeteras', precio: '23.000', foto: './IMG_6131.JPG' },
  { id: 3, nombre: 'Billetera Hombre', categoria: 'billeteras', precio: '18.000', foto: './IMG_6308.JPG' },
  { id: 4, nombre: 'Chequera', categoria: 'billeteras', precio: '26.000', foto: '' },
  { id: 5, nombre: 'Cartera Roma', categoria: 'carteras', precio: '52.000', foto: './IMG_4663.JPG' },
  { id: 6, nombre: 'Cartera Sicilia', categoria: 'carteras', precio: '62.000', foto: './IMG_4618.JPG' },
  { id: 7, nombre: 'Cartera Bolonia', categoria: 'carteras', precio: '72.000', foto: './IMG_4696.JPG' },
  { id: 8, nombre: 'Cartera para Celular', categoria: 'carteras', precio: '12.000', foto: '' },
  { id: 9, nombre: 'Neceser Grande', categoria: 'neceser', precio: '30.000', foto: '' },
  { id: 10, nombre: 'Neceser Mediano', categoria: 'neceser', precio: '25.000', foto: './IMG_6239.JPG' },
  { id: 11, nombre: 'Cosmetiquero Print', categoria: 'neceser', precio: '32.000', foto: './IMG_6266.JPG' },
  { id: 12, nombre: 'Cosmetiquero Dorado', categoria: 'neceser', precio: '32.000', foto: './IMG_6260.JPG' },
  { id: 13, nombre: 'Cosmetiquero Animal Print', categoria: 'neceser', precio: '32.000', foto: './IMG_6252.JPG' },
  { id: 14, nombre: 'Tarjetero', categoria: 'accesorios', precio: '9.000', foto: '' },
  { id: 15, nombre: 'Porta Pasaporte', categoria: 'accesorios', precio: '12.000', foto: './IMG_6280.JPG' },
  { id: 16, nombre: 'Agenda Pequeña', categoria: 'accesorios', precio: '15.000', foto: './IMG_6198.JPG' },
  { id: 17, nombre: 'Agenda Grande', categoria: 'accesorios', precio: '20.000', foto: './IMG_6172.JPG' },
  { id: 18, nombre: 'Notebook Case', categoria: 'accesorios', precio: '40.000', foto: '' },
  { id: 19, nombre: 'Guantes Parrilleros', categoria: 'accesorios', precio: '15.000', foto: './IMG_6277.JPG' },
  { id: 20, nombre: 'Straps', categoria: 'accesorios', precio: '5.000', foto: './IMG_6339.JPG' },
  { id: 21, nombre: 'Babucha Creta', categoria: 'zapatos', precio: '60.000', foto: '' },
  { id: 22, nombre: 'Botín Estrella', categoria: 'zapatos', precio: '75.000', foto: './IMG_6377.JPG' },
];

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
  document.getElementById('modal-fotos').innerHTML = p.fotos
    ? p.fotos.map(f => `<img src="${f}" alt="${p.nombre}">`).join('')
    : `<img src="${p.foto}" alt="${p.nombre}">`;

  document.getElementById('modal').style.display = 'flex';
}

function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
}

renderProductos();
