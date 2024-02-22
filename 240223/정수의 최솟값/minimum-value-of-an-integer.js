function fuc(a,b,c){
    if(a>b && c>b){
        return b;
    }else if(a>c && b>c){
        return c;
    }else{
        return a;
    }
}

const fs = require('fs');

let input =fs.readFileSync(0).toString().trim().split(" ");

let [a,b,c]= input.map(Number);

console.log(fuc(a,b,c));