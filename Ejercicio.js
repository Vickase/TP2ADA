


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

/* ventasVendedora(nombre): recibe por parámetro el nombre de una vendedora y retorna el importe total de ventas realizadas por dicha vendedora.
console.log( ventasVendedora("Grace") ); // 990 */

const ventasVendedora = nombre => {
  const ventasDeVendedora = ventas.filter(venta => venta[4] == nombre);
  const valorVentasVendedora = sucursalesVendedora.map(venta => {
    return precioMaquina(venta[6]);
  });
  return valorVentasVendedora.reduce((acc, numero) => acc + numero, 0);
};

/* ventasSucursal(sucursal): recibe por parámetro el nombre de una sucursal y retorna el importe de las ventas totales realizadas por una sucursal sin límite de fecha.
 console.log( ventasSucursal("Centro"); */

const ventasSucursal = sucursal => {
  const sucursalesFiltradas = ventas.filter(venta => venta[5] == sucursal);
  const valorVentas = sucursalesFiltradas.map(venta => {
    return precioMaquina(venta[6]);
  });
  return valorVentas.reduce((acc, numero) => acc + numero, 0);
};

/*6 - mejorVendedora(): Devuelve el nombre de la vendedora que más ingresos generó */

const mejorVendedora = () => {
  let nombreVendedora;
  let maxVentas = 0;
  for (let vendedora of vendedoras) {
    let cantidadVentas = ventasVendedora(vendedora);
    if (maxVentas < cantidadVentas) {
      maxVentas = cantidadVentas;
      nombreVendedora = vendedora;
    }
  }
  return nombreVendedora;
};


// ventaPromedio(): Debe retornar el importe promedio por venta, 
// como un número entero sin decimales redondeado siempre para abajo.


ventaPromedio = () => {
  valor = 0;
  let preciosComponentes = ventas.map(venta => {
    return precioMaquina(venta[6]);
  })
  let total = preciosComponentes.reduce((acumulador, venta) =>{
    return acumulador + venta
  });
  let resultado = total/ventas.length;
    return Math.floor(resultado)
}

//obtenerIdVenta(): Tiene que retornar un número aleatorio
//entre 100000000 y 999999999

obtenerIdVenta = () => {
  let min = 100000000;
  let max = 999999999;
  let venta = Math.round(Math.random() * (max +1) - min) + min;
  return venta;
}

//agregarVenta(dia, mes, anio, vendedora, sucursal, componentes): 
//recibe por parámetro todos los datos de una venta, 
//y los agrega en el array de ventas. 
//Al igual que las ventas que ya están previamente creadas, 
//además de estos datos necesitamos agregar el primer dato 
//que es un identificador de la venta. Para agregar este dato, 
//tenemos que usar la función desarrollada en el punto 
//anterior obtenerIdVenta

agregarVenta = (dia, mes, año, nombreVendedora, sucursal, componente) => {
  let id = obtenerIdVenta()
  return ventas.push([id, dia, mes, año, nombreVendedora, sucursal, componente]);
}

module.exports = {
  ventas,
  vendedoras,
  precios,
  precioMaquina,
  ventasVendedora,
  ventasSucursal,
  mejorVendedora
};

