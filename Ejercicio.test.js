const cantidadVentasComponente = require("./Ejercicio").cantidadVentasComponente;
const componenteMasVendido = require("./Ejercicio").componenteMasVendido;
const ventas = require("./Ejercicio").ventas;
const vendedoras = require("./Ejercicio").vendedoras;
const precios = require("./Ejercicio").precios;
const sucursales = require("./Ejercicio").sucursales;
const precioMaquina = require("./Ejercicio").precioMaquina;
const ventasSucursal = require("./Ejercicio").ventasSucursal;
const ventasVendedora = require("./Ejercicio").ventasVendedora;
const mejorVendedora = require("./Ejercicio").mejorVendedora;
const ventaPromedio = require("./Ejercicio").ventaPromedio;
const obtenerIdVenta = require("./Ejercicio").obtenerIdVenta;
const agregarVenta = require("./Ejercicio").agregarVenta;

test("Recibe un array de componentes y devuelve la suma de los precios", () => {
  const componentes = ["Monitor GPRS 3000", "Motherboard ASUS 1500"];
  const resultado = precioMaquina(componentes);
  expect(resultado).toBe(320);
});

test (' devuelve la cantidad de venta por componente', () => {
    expect(cantidadVentasComponente('Motherboard ASUS 1500')).toBe(2)
  });

test("Recibe un nombre de una vendedora y devuelve el total de ventas de esta", () => {
  const nombre = "Fio";
  const resultado3 = ventasVendedora(nombre);
  expect(resultado3).toBe(830);
});

test(' devuelve el componente más vendido', () => {
    expect(componenteMasVendido()).toBe('Monitor GPRS 3000')
  });

test("Recibe una sucursal y devuelve el total de ventas de esta", () => {
  const sucursal = "Centro";
  const resultado2 = ventasSucursal(sucursal);
  expect(resultado2).toBe(990);
});

test("Devuelve el nombre de la vendedora que más ingresos tuvo", () => {
  const rdo1 = ventasVendedora("Fio");
  const rdo2 = ventasVendedora("Vick");
  const rdo3 = ventasVendedora("Hermenegilda");
  const rdo4 = ventasVendedora("Julia");
  const funcion = mejorVendedora();
  expect(funcion).toBe("Fio");
});

test("devuelve un importe promedio por venta", () => {
  expect(ventaPromedio()).toBe(353);
});

test("devuelve un número random entre 100000000 y 999999999", () => {
  let venta =
    Math.round(Math.random() * (999999999 + 1) - 100000000) + 100000000;
  expect(obtenerIdVenta(venta)).toBeGreaterThan(99999999); // Este test devuelve error porque 
  // venta deberia ser = Math.round(Math.random() * (100000000 - 999999999) + 100000000);
  expect(obtenerIdVenta(venta)).toBeLessThan(1000000000);
});

test("agrega una nueva venta al array de ventas", () => {
  let id = obtenerIdVenta();
  ventas.push([
    id,
    (dia = 4),
    (mes = 6),
    (año = 1871),
    (nombreVendedora = "Hermenegilda"),
    (sucursal = "Flores"),
    (componente = "sdgasaj")
  ]);
  expect(ventas.length).toBe(7);
});

