const ventas = require("./Ejercicio").ventas;
const vendedoras = require("./Ejercicio").vendedoras;
const precios = require("./Ejercicio").precios;
const precioMaquina = require("./Ejercicio").precioMaquina;
const ventasSucursal=require("./Ejercicio").ventasSucursal;
const ventasVendedora=require("./Ejercicio").ventasVendedora;
const mejorVendedora=require("./Ejercicio").mejorVendedora;


test("Recibe un array de componentes y devuelve la suma de los precios", () => {
  const componentes = ["Monitor GPRS 3000", "Motherboard ASUS 1500"];
  const resultado = precioMaquina(componentes);
  expect(resultado).toBe(320);
});
test ("Recibe un nombre de una vendedora y devuelve el total de ventas de esta",()=>{
    const nombre= "Fio";
    const resultado3=ventasVendedora(nombre);
    expect(resultado3).toBe(830);
    });

test ("Recibe una sucursal y devuelve el total de ventas de esta",()=>{
const sucursal= "Centro";
const resultado2=ventasSucursal(sucursal);
expect(resultado2).toBe(990)
});

test ("Devuelve el nombre de la vendedora que más ingresos tuvo",()=>{
const rdo1=ventasVendedora("Fio");
const rdo2=ventasVendedora("Vick");
const rdo3=ventasVendedora("Hermenegilda");
const rdo4=ventasVendedora("Julia");
const funcion=mejorVendedora();
expect(funcion).toBe("Fio");

});