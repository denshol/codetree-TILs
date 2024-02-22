const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(" ");

let [n,m]= input.map(Number);

function fuc(n,m){

let max = Number.MIN_SAFE_INTEGER;


for(let i=1;i<=100;i++){
    if(n%i===0 && m%i===0){
        if(max<i)max=i;
    }
}
console.log(max);
}

fuc(n,m);