const vendedoras = require('./Ejercicio').vendedora;
const ventas = require('./Ejercicio').ventas;
const precios = require('./Ejercicio').precios;
const sucursales = require('./Ejercicio').sucursales;

beforeEach(()=>{

    const vendedoras = ["Fio", "Vick", "Hermenegilda", "Julia"];

    const ventas = [
        [ 100000000, 4, 2, 2019, 'Vick', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500'] ],
        [ 100000001, 1, 1, 2019, 'Hermenegilda', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500'] ],
        [ 100000002, 2, 1, 2019, 'Fio', 'Caballito', ['Monitor ASC 543', 'Motherboard MZI', 'HDD Toyiva'] ],
        [ 100000003, 10, 1, 2019, 'Vick', 'Centro', ['Monitor ASC 543', 'Motherboard ASUS 1200'] ],
        [ 100000004, 12, 1, 2019, 'Julia', 'Caballito', ['Monitor GPRS 3000', 'Motherboard ASUS 1200'] ],
        [ 100000005, 21, 3, 2019, 'Fio', 'Caballito', ['Monitor ASC 543', 'Motherboard ASUS 1200', 'RAM Quinston'] ]
    ];

    const precios = [
        [ 'Monitor GPRS 3000', 200 ],
        [ 'Motherboard ASUS 1500', 120 ],
        [ 'Monitor ASC 543', 250 ],
        [ 'Motherboard ASUS 1200', 100 ],
        [ 'Motherboard MZI', 30 ],
        [ 'HDD Toyiva', 90 ],
        [ 'HDD Wezter Dishital', 75 ],
        [ 'RAM Quinston', 110 ],
        [ 'RAM Quinston Fury', 230 ]
      ];
      
});



test("devuelve un importe promedio por venta", () =>{
    const ventas = [
        [ 100000000, 4, 2, 2019, 'Vick', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500'] ],
        [ 100000001, 1, 1, 2019, 'Hermenegilda', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500'] ],
        [ 100000002, 2, 1, 2019, 'Fio', 'Caballito', ['Monitor ASC 543', 'Motherboard MZI', 'HDD Toyiva'] ],
        [ 100000003, 10, 1, 2019, 'Vick', 'Centro', ['Monitor ASC 543', 'Motherboard ASUS 1200'] ],
        [ 100000004, 12, 1, 2019, 'Julia', 'Caballito', ['Monitor GPRS 3000', 'Motherboard ASUS 1200'] ],
        [ 100000005, 21, 3, 2019, 'Fio', 'Caballito', ['Monitor ASC 543', 'Motherboard ASUS 1200', 'RAM Quinston'] ]
    ];
    const precios = [
        [ 'Monitor GPRS 3000', 200 ],
        [ 'Motherboard ASUS 1500', 120 ],
        [ 'Monitor ASC 543', 250 ],
        [ 'Motherboard ASUS 1200', 100 ],
        [ 'Motherboard MZI', 30 ],
        [ 'HDD Toyiva', 90 ],
        [ 'HDD Wezter Dishital', 75 ],
        [ 'RAM Quinston', 110 ],
        [ 'RAM Quinston Fury', 230 ]
      ];
    expect(ventaPromedio()).toBe(353);
});

test("devuelve un número random entre 100000000 y 999999999", () => {
    let venta = Math.round(Math.random() * (999999999 +1) - 100000000) + 100000000;
    expect(obtenerIdVenta(venta)).toBeGreaterThan(99999999)
    expect(obtenerIdVenta(venta)).toBeLessThan(1000000000)
});

test("agrega una nueva venta al array de ventas", () =>{
    let id = obtenerIdVenta();
    ventas.push([id, dia= 4, mes= 6, año= 1871, nombreVendedora= "Hermenegilda", sucursal= "Flores", componente= "sdgasaj"]);
    expect(ventas.length).toBe(7);
});

