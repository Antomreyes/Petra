const productos = [
  { id: 1, nombre: 'Billetera Burdeo', categoria: 'billeteras', precio: '23.000', foto: './IMG_6118.JPG' },
  { id: 2, nombre: 'Billetera Julia', categoria: 'billeteras', precio: '23.000', foto: '' },
  { id: 3, nombre: 'Billetera Hombre', categoria: 'billeteras', precio: '18.000', foto: '' },
  { id: 4, nombre: 'Chequera', categoria: 'billeteras', precio: '26.000', foto: '' },
  { id: 5, nombre: 'Cartera Roma', categoria: 'carteras', precio: '52.000', foto: '' },
  { id: 6, nombre: 'Cartera Sicilia', categoria: 'carteras', precio: '62.000', foto: '' },
  { id: 7, nombre: 'Cartera Bolonia', categoria: 'carteras', precio: '72.000', foto: '' },
  { id: 8, nombre: 'Cartera para Celular', categoria: 'carteras', precio: '12.000', foto: '' },
  { id: 9, nombre: 'Neceser Grande', categoria: 'neceser', precio: '30.000', foto: '' },
  { id: 10, nombre: 'Neceser Mediano', categoria: 'neceser', precio: '25.000', foto: '' },
  { id: 11, nombre: 'Cosmetiquero Print', categoria: 'neceser', precio: '32.000', foto: '' },
  { id: 12, nombre: 'Cosmetiquero Dorado', categoria: 'neceser', precio: '32.000', foto: '' },
  { id: 13, nombre: 'Cosmetiquero Animal Print', categoria: 'neceser', precio: '32.000', foto: '' },
  { id: 14, nombre: 'Tarjetero', categoria: 'accesorios', precio: '9.000', foto: '' },
  { id: 15, nombre: 'Porta Pasaporte', categoria: 'accesorios', precio: '12.000', foto: '' },
  { id: 16, nombre: 'Agenda Pequeña', categoria: 'accesorios', precio: '15.000', foto: '' },
  { id: 17, nombre: 'Agenda Grande', categoria: 'accesorios', precio: '20.000', foto: '' },
  { id: 18, nombre: 'Notebook Case', categoria: 'accesorios', precio: '40.000', foto: '' },
  { id: 19, nombre: 'Guantes Parrilleros', categoria: 'accesorios', precio: '15.000', foto: '' },
  { id: 20, nombre: 'Babucha Creta', categoria: 'zapatos', precio: '60.000', foto: '' },
  { id: 21, nombre: 'Botín Estrella', categoria: 'zapatos', precio: '75.000', foto: '' },
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
  alert('Aquí abriremos el detalle del producto ' + id);
}

renderProductos();
