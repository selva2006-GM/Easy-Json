const fs = require('fs');

const obj = {"a":{"a" : "A"}, "b":"B"};

let space = 0;
function printer(obj){

        Object.entries(obj).forEach(([key, value])=>{
           
             if(typeof value === "object" && value !== null){
                 console.log(" ".repeat(space) + key + ":");
                 space++;
                printer(value);
                space--;
             } else{
                console.log(" ".repeat(space) + key + " : " + value);
             }
        });
}
// fs.readFile('data.json', 'utf8', (err, data) =>{
//     if(err) throw err;

//     const obj = JSON.parse(data);

//     console.log(obj);
// })

printer(obj);