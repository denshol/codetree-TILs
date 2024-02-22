const fs = require('fs');

let input = fs.readFileSync(0).toString().trim();

let N = +input;

function draw(n){
    let cnt=0;
    for(let i=0;i<n;i++){
        let str='';
        for(let j=0;j<n;j++){
            if(cnt==9)cnt=0;
            cnt++;
            str+=cnt+" ";

        }
        console.log(str);
    }
}
draw(N);