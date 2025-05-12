const {test , expect} = require('@playwright/test');

let userid;

test('Get Users', async({request}) =>{

const response =  await request.get('https://reqres.in/api/users?page=2')
console.log(await response.json())
expect(response.status()).toBe(200);
})

test('Create Users', async({request}) =>{

    const response =  await request.post('https://reqres.in/api/users',
        {
            data:{"name": "kumar", "job": "trainer"},
            headers:{"Content-Type": "application/json",
                      "x-api-key": "reqres-free-v1"
            },
        } );
        console.log(await response.json())
        expect(response.status()).toBe(201)

        var res = await response.json()
        userid = res.id
   
})

test('Update Users', async({request}) =>{
    const response =  await request.put('https://reqres.in/api/users/'+userid,
        {
            data:{"name": "kumar", "job": "Engineer"},
            headers:{"Content-Type": "application/json",
                      "x-api-key": "reqres-free-v1"
            },
        } );
        console.log(await response.json())
        expect(response.status()).toBe(200)
    })


test('Delete Users', async({request}) =>{
    const response =  await request.delete('https://reqres.in/api/users/'+userid,
       
            {
                data:{"name": "kumar", "job": "Engineer"},
                headers:{"Content-Type": "application/json",
                          "x-api-key": "reqres-free-v1"
                },
            } )
        expect(response.status()).toBe(204)
});