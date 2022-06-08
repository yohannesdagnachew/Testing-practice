const stringCount = require('./countname.js')

test('Count letters of name', ()=>{
   expect(stringCount("yohannes")).toBe(8);  
})
