/** vòng lặp lồng nhau- Nested loop */
// var myArray = [
//     [1,2],
//     [3,4],
//     [5,6],
// ];
// for ( var i = 0; i<myArray.length; i++) {// lấy ra các phần tử của mảng con
//    for (var j = 0; j <myArray[i].length; j++) {// lấy từng số trong mảng
//        console.log(myArray[i][j]);
//    }
// }
// demo:
for (var a = 100;a> 0; a--) {
    console.log(a)// in ra từ 1 -> 100
}
for (var i = 0; i<= 100;i +=7) {// in ra từ 0-> 7->14->...100
    console.log(i)
}
for (var b = 100; b >=0; b -= 5){// in ra từ 100-> 95 -> 90...0
    console.log(b);
}
/** LOOP
 *for - lặp với điều kiện đúng
 *for/in -lặp qua key của đối tượng
 * for/ of - lăp qua value của đối tượng
 * while- lặp khi điều kiện đúng
 * do/wile-lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
 */
//FOR LOOP:
// demo://i =1 chạy duy nhất 1 lần
// for (var  i =1; i<=100; i++) {// tăng lên 1 giá trị từ 1 đến 100
//     console.log(i);
//}
var  myArray = [
    'one',
    'two',
    'three',
    'four',
];// sử dụng length để kiểm tra độ dài của mảng
console.log(myArray[3])// cách lấy phần tử trong array( mảng):
//FOR -IN:
var mylove = 'js';
var languaes ='js';
for (var key in languaes){
    console.log(languaes[key]);// lấy ra từng chữ cái, phần tử trong mảng
}
// FOR -OF: lấy ra key, value từ array
var handsome = {
    neme:'javascript',
    age: 19,
};
for (var value of Object.keys(handsome)) {
    console.log(value);// lấy ra từ neme, age
}
// console.log(Object.values(handsome));// trả lại array là các value

// console.log(Object.keys(handsome));//trả lại array là các từ trước :
// for (var value of handsome)
//     console.log(handsome);// lấy ra phần tử của string
// WHILE LOOP:
var i =0;
while (i <1000){
    i++;
    console.log(i);// in ra từ 1- 1000
}
var mylove =[
    'js',
    'php',
    'java',
];
var i = 0;
while (i<mylove.length){
    console.log(mylove[i]);// in ra các phần tử
    i++;
}
// DO/WHILE:
var c = 0;
do {
    c++;
    console.log(c);// in ra từ 1-10
} while (c<10);
// BREAK & CONTINUE IN LOOP: sử dụng break khi muốn thoát khỏi vòng lăp, sdung continue khi muốn bỏ qua 1 vài vòng lặp
// demo
for (var d=0;d<10;d++){
    if (d%2 !== 0) {
        continue; // in ra các số chẵn, bỏ qua số lẻ
    }
    console.log(d);
    // if (d>=5) {
    //     break;// thoát khỏi vòng lặp
    // }
}
// VÒNG LẶP LỒNG NHAU- NESTED LOOP
var myarray = [
    [1,2],
    [3,4],
    [5,6]

];
for (var e =0; e<myarray.length;e++){
    // console.log(myarray[i]);//in ra các phần tử của mảng
    // for (var j = 0; j <myarray[e].length;) j++;
    // console.log(myarray[e][j]); lấy ra từng phần tử trong mảng con
}
for ( 1;2;4) {
    3;
}


















/** Array methods :(mảng)*/
 // forEach() : in ra từng phần tử của mảng, duyệt qua
var conrses = [
        {
            id : 1,
            name : 'js',
            coin : 250
        },
        {
            id: 2,
            name:'html,css',
            coin :0,
        },
        {
            id: 3,
            name:'ruby',
            coin: 0,
        },
        {
            id:4,
            name:'php',
            coin: 400,
        },
        {
            id:5,
            name:'Java',
            coin: 500,
        },
    ];
conrses.forEach(function (conrse,index){
    console.log(index,conrse);// in ra từng phần tử của mảng

});
// every : kiểm tra tất cả có các phần tử mãn hay không, gần giống vòng lặp
//some:  chỉ cần 1 phần tử đúng -> sẽ đúng
//find: tìm kiếm phần tử , chỉ trả lại 1 phần tử trong array
// filtrer: tìm kiếm phần tử và trả về nhiều phần tử trong array
// map:
//reduce