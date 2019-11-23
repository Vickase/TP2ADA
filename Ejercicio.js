const vendedoras = ["Ada", "Grace", "Hedy", "Sheryl"];

const ventas = [
  [
    100000000,
    4,
    2,
    2019,
    "Grace",
    "Centro",
    ["Monitor GPRS 3000", "Motherboard ASUS 1500"]
  ],
  [
    100000001,
    1,
    1,
    2019,
    "Ada",
    "Centro",
    ["Monitor GPRS 3000", "Motherboard ASUS 1500"]
  ],
  [
    100000002,
    2,
    1,
    2019,
    "Grace",
    "Caballito",
    ["Monitor ASC 543", "Motherboard MZI", "HDD Toyiva"]
  ],
  [
    100000003,
    10,
    1,
    2019,
    "Ada",
    "Centro",
    ["Monitor ASC 543", "Motherboard ASUS 1200"]
  ],
  [
    100000004,
    12,
    1,
    2019,
    "Grace",
    "Caballito",
    ["Monitor GPRS 3000", "Motherboard ASUS 1200"]
  ],
  [
    100000005,
    21,
    3,
    2019,
    "Hedy",
    "Caballito",
    ["Monitor ASC 543", "Motherboard ASUS 1200", "RAM Quinston"]
  ]
];

const precios = [
  ["Monitor GPRS 3000", 200],
  ["Motherboard ASUS 1500", 120],
  ["Monitor ASC 543", 250],
  ["Motherboard ASUS 1200", 100],
  ["Motherboard MZI", 30],
  ["HDD Toyiva", 90],
  ["HDD Wezter Dishital", 75],
  ["RAM Quinston", 110],
  ["RAM Quinston Fury", 230]
];

const sucursales = ["Centro", "Caballito"];

//precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]);
//1

const precioMaquina = componentes => {
  let valor = 0;
  for (let componente of componentes) {
    precios.forEach(precio => {
      if (precio[0] == componente) {
        valor += precio[1];
      }
    });
  }
  return valor;
};
/* 
const _ = componentes => {
  return componentes.map(componente => {
    const precioArrEncontrado = precios.find(precio => precio[0] == componente)
    if (!precioArrEncontrado) {
      throw Error('Invalid component name');
    }
    return precioArrEncontrado[1];
  }).reduce((acc, precio) => acc + precio, 0)
} */

/* 
const __ = componentes => {
  return componentes.reduce((acc, componente) => {
    const precioArrEncontrado = precios.find(precio => precio[0] == componente)
    if (!precioArrEncontrado) {
      throw Error('Invalid component');
    }
    return acc + precioArrEncontrado[1];
  }, 0)
}
 */

/* ventasSucursal(sucursal): recibe por parámetro el nombre de una sucursal y retorna el importe de las ventas totales realizadas por una sucursal sin límite de fecha.
 console.log( ventasSucursal("Centro") ); // 4195 */
 
const ventasSucursal = sucursal => {
  let ventasTotales = 0;
  const sucursalesFiltradas = ventas.filter(venta => venta[3] == sucursal);
  const componentes = sucursalesFiltradas.map(venta => {
    return venta[6];
  });
   return ventasTotales=precioMaquina(componentes);
};

module.exports = {
  ventas,
  vendedoras,
  precios,
  precioMaquina,
  ventasSucursal
};
