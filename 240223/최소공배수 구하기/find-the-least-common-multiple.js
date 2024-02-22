const fs = require('fs');

let input = fs.readFileSync(0).toString().trim().split(" ");

let [n,m]= input.map(Number);
let min = Number.MAX_SAFE_INTEGER;
function fuc(n,m){
    for(let i=1;i<=n*m;i++){
        if(i%m ===0 && i%n ===0)
        {
            if(min>i)min=i;
        }
    }
    console.log(min);
}
fuc(n,m);