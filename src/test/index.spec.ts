
describe('cualquier mrd',()=>{

    test('caulquiera',async ()=>{

        const res= await fetch('http://localhost:3000')

        expect(res.status).toBe(404)
        
    }
    )

})