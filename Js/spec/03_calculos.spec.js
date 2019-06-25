const f = require('../03_calculos.js')

fdescribe('Función suma', () => {

    const aErrores =['pepe', '3', true, NaN, undefined, null, [], {}];

    it('should be 5 when sumar 2 + 3', () => {
        expect(f.sumar(2,3)).toEqual(5);

    });
    it('should be 2 when sumar 2', () => {
        expect(f.sumar(2)).toEqual(2);

    });

    it('should be 0 when sumar nada', () => {
        expect(f.sumar()).toEqual(0);

    });

    it('should be 5 when sumar -2 + 7', () => {
        expect(f.sumar(-2, 7)).toEqual(5);

    });

    it('should be 5.4 when sumar 2.1 + 3.3', () => {
        expect(f.sumar(2.1, 3.3)).toEqual(5.4);

    });

    it('should be 5 when sumar 2 + "3"', () => {
        expect(f.sumar(2, "3")).toEqual(5);

    });

    for (let i = 0; i < aErrores.length; i++) {
        const element = aErrores[i];
        
    }

    it('should be error when sumar 2 + no numbers', () => {
        const item = aErrores[i];
        it('should be error with sumar 2 + no numbers', () => {
            
        });
        expect(f.sumar('pepe', 'come')).toEqual('pepecome');

    });

});