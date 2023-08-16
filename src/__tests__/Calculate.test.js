import calculate from "../logic/Calculate"

describe('should return correct object', ()=>{
    test('returns null as values', ()=>{
        
        const object = {
            total: 8,
            next: 2,
            operation: '+',
          }
        const btnName = 'AC'
        const result = calculate(object, btnName)
        expect(result).toMatchObject({
            "next": null,
            "operation": null,
            "total": null,
          })
    })

    test('returns 10 as total', ()=>{
        
        const object = {
            total: 8,
            next: 2,
            operation: '+',
          }
        const btnName = '='
        const result = calculate(object, btnName)
        expect(result).toMatchObject({
            "next": null,
            "operation": null,
            "total": '10',
          })
    })
})