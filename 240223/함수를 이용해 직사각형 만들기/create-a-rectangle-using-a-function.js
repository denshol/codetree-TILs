const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split(" ");

let [rowNum, colNum] = input.map(Number);

function printRect(rowNum,colNum){
    for(let i=0;i<rowNum;i++){
        let str='';
        for(let j=0;j<colNum;j++){
            str+='1';
        }
        console.log(str);
    }
}

printRect(rowNum,colNum);