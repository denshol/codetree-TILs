const fs = require("fs");

// 0번 파일 기술자에서 입력값을 동기적으로 읽어와서 문자열로 변환
const input = fs.readFileSync(0, "utf8").trim();
let n = Number(input); // 입력값을 숫자로 변환
let str="";

for(let i=1;i<=n;i++){
    
    if(i%2!==0){

    console.log("* ".repeat(n-Math.floor(i/2)));
    }else{
        console.log("* ".repeat(i-1));
    }
    
}

for(let i=n;i<2*n;i++){
    
    if(i%2===0){

    console.log("* ".repeat(n-Math.floor(i/2)));
    }else{
        console.log("* ".repeat(Math.floor(i/2)+1));
    }
}