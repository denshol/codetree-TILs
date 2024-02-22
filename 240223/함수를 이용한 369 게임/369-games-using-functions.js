const fs = require('fs');

let input = fs.readFileSync(0).toString().trim().split(" ");

let [a,b] = input.map(Number);

function three(n){
    return n%3===0;
}

function isSam(n){
    let strN=n.toString();

    for(let i=0;i<strN.length;i++){
        if(strN[i]==='3' || strN[i] ==='6' || strN[i] ==='9'){
            return true;
        }
    }
   
}


let cnt=0;
for(let i=a;i<=b;i++){
    if(isSam(i) || three(i))cnt++;
}
console.log(cnt);