test (' devuelve la cantidad de venta por componente', () => {
    expect(cantidadVentasComponente('Motherboard ASUS 1500')).toBe(2)
  });

test(' devuelve el componente más vendido', () => {
    expect(componenteMasVendido()).toBe('Monitor GPRS 3000')
  });



const cantidadVentasComponente = require("./Ejercicio").cantidadVentasComponente;
const componenteMasVendido = require("./Ejercicio").componenteMasVendido;

