const capital = require('./capitalization.js')

test('Check if the first latter is capital', ()=>{
    const full = capital('book')
    expect(full).toBe('Book')
})