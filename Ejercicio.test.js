const ventas = require("./Ejercicio").ventas;
const vendedoras = require("./Ejercicio").vendedoras;
const precios = require("./Ejercicio").precios;
const precioMaquina = require("./Ejercicio").precioMaquina;
const ventasSucursal=require("./Ejercicio").ventasSucursal;

test("Recibe un array de componentes y devuelve la suma de los precios", () => {
  const componentes = ["Monitor GPRS 3000", "Motherboard ASUS 1500"];
  const resultado = precioMaquina(componentes);
  expect(resultado).toBe(320);
});


test ("Recibe una sucursal y devuelve el total de ventas de esta",()=>{
const sucursal= "Centro";
const resultado2=ventasSucursal(sucursal);
expect(resultado2).toBe(4195);
});