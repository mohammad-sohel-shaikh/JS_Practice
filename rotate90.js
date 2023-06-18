const b = [
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [4 ,5, 6, 7],
];
const a = [
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [4 ,4, 4, 4],
];
console.log("a's 90 angle")
transpose(a);
console.log("after tranpose:",a);
rotate90(a);
console.log("after roate90:",a);

console.log("b's 180 angle");
transpose(b);
rotate90(b);

transpose(b);
rotate90(b);
console.log("after roate180:",b);



function transpose(arr) {
    
    for (let i = 0; i < 4; i++) {
    for (let j = i; j < 4; j++) {
        const tmp = arr[i][j];
        arr[i][j] = arr[j][i];
        arr[j][i] = tmp;
        
    }
}
}

function rotate90(arr) {
    
    for (let i= 0; i<4; i++) {
        for (let j = 0; j<4/2; j++){
            const temp=arr[i][j];
            arr[i][j]=arr[i][4-1-j];
            arr[i][4-1-j]=temp;
        }
    }
}

