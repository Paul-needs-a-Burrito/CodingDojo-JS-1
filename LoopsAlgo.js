// 1. Print odds 1-20
for( var x = 1; x <= 20; x++){
    if( x % 2 != 0) {
        console.log(x);
    }
}
// OUTPUT:
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// 17
// 19

// 2. Sum and Print 1-5
var sum = 0;
for( var x = 1; x <= 5; x++){
    sum += x;
    console.log("Num: " + x + ", Sum: " +   sum);
}
// OUTPUT:
// "Num: 1, Sum: 1"
// "Num: 2, Sum: 3"
// "Num: 3, Sum: 6"
// "Num: 4, Sum: 10"
// "Num: 5, Sum: 15"
