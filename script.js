const productos = [
  {
    id: 1,
    nombre: 'Billetera Burdeo Lisa',
    categoria: 'billeteras',
    precio: '',
    foto: 'https://drive.google.com/uc?export=view&id=15jBb0BsDF1Je6t20ndNnWzpO_Kd_pGdc',
    fotos: [],
    desc: 'Cuero genuino · Color bordo/vino',
  },
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
      <img class="card-img" src="${p.foto}" alt="${p.nombre}">
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
