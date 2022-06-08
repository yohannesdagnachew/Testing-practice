const Calculetor = require('./claculetor.js')

describe('My calculetor', () => {
    test('subtract test', ()=>{
        expect(Calculetor.subtract(10,5)).toBe(5)
        expect(Calculetor.subtract(5,5)).toBe(0)
        expect(Calculetor.subtract(5,10)).toBe(-5)
        }) 
  });

  describe('My calculetor', () => {
    test('add test', ()=>{
        expect(Calculetor.add(10,5)).toBe(15)
        expect(Calculetor.add(-5,5)).toBe(0)
        expect(Calculetor.add(-5,10)).toBe(5)
        }) 
  });
  describe('My calculetor', () => {
    test('Multiplication test', ()=>{
        expect(Calculetor.multiply(10,5)).toBe(50)
        expect(Calculetor.multiply(-5,5)).toBe(-25)
        expect(Calculetor.multiply(-5,-10)).toBe(50)
        }) 
  });

  describe('My calculetor', () => {
    test('Multiplication test', ()=>{
        expect(Calculetor.division(10,5)).toBe(2)
        expect(Calculetor.division(-5,5)).toBe(-1)
        expect(Calculetor.division(-50,-10)).toBe(5)
        }) 
  });


  
  
    

