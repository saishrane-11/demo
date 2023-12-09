  
function increaseCount(a, b, c) { 
  console.log("hey c here" + c)
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
  if (c == 'c1_p1') {
    c1_p1()
  }
  if (c == "c1_p2") {
    c1_p2()
  }
  if (c == "c1_p3") {
    c1_p3()
  }
  if (c == "c1_p4") {
    c1_p4()
  }
  /////////////////////////////////
  if (c == 'c2_p1') {
    c2_p1()
  }
  if (c == "c2_p2") {
    c2_p2()
  }
  if (c == "c2_p3") {
    c2_p3()
  }
  if (c == "c2_p4") {
    c2_p4()
  }
  ////////////////////////////////
  if (c == 'c3_p1') {
    c3_p1()
  }
  if (c == "c3_p2") {
    c3_p2()
  }
  if (c == "c3_p3") {
    c3_p3()
  }
  if (c == "c3_p4") {
    c3_p4()
  }

}
function decreaseCount(a, b, c) {

  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;

  }
  if (c == 'c1_p1') {
    c1_p1()
  }
  if (c == "c1_p2") {
    c1_p2()
  }
  if (c == "c1_p3") {
    c1_p3()
  }
  if (c == "c1_p4") {
    c1_p4()
  }
  /////////////////////////////////
  if (c == 'c2_p1') {
    c2_p1()
  }
  if (c == "c2_p2") {
    c2_p2()
  }
  if (c == "c2_p3") {
    c2_p3()
  }
  if (c == "c2_p4") {
    c2_p4()
  }
  ////////////////////////////////
  if (c == 'c3_p1') {
    c3_p1()
  }
  if (c == "c3_p2") {
    c3_p2()
  }
  if (c == "c3_p3") {
    c3_p3()
  }
  if (c == "c3_p4") {
    c3_p4()
  }
}

////////////////////////////////ALL C1 FUNCTIONS /////////////////////////////////
function c1_p1() {
  var val1 = document.getElementById('prize-of-product-c1p1').value;
  console.log(val1);
  var totalPrizeOfProduct1 = val1 * 150;
  console.log(totalPrizeOfProduct1)
  document.getElementById('total-prize-pr-c1p1').innerHTML = totalPrizeOfProduct1;

}
function c1_p2() {
  var val2 = document.getElementById('prize-of-product-c1p2').value;
  console.log(val2);
  var totalPrizeOfProduct2 = val2 * 250;
  console.log(totalPrizeOfProduct2)
  document.getElementById('total-prize-pr-c1p2').innerHTML = totalPrizeOfProduct2;
}
function c1_p3() {
  var val3 = document.getElementById('prize-of-product-c1p3').value;
  console.log(val3);
  var totalPrizeOfProduct3 = val3 * 200;
  console.log(totalPrizeOfProduct3)
  document.getElementById('total-prize-pr-c1p3').innerHTML = totalPrizeOfProduct3;
}
function c1_p4() {
  var val4 = document.getElementById('prize-of-product-c1p4').value;
  console.log(val4);
  var totalPrizeOfProduct4 = val4 * 100;
  console.log(totalPrizeOfProduct4)
  document.getElementById('total-prize-pr-c1p4').innerHTML = totalPrizeOfProduct4;
}

////////////////////////////////ALL C2 FUNCTIONS /////////////////////////////////

function c2_p1() {
  var val1 = document.getElementById('prize-of-product-c2p1').value;
  console.log(val1);
  var totalPrizeOfProduct1 = val1 * 150;
  console.log(totalPrizeOfProduct1)
  document.getElementById('total-prize-pr-c2p1').innerHTML = totalPrizeOfProduct1;
}
function c2_p2() {
  var val2 = document.getElementById('prize-of-product-c2p2').value;
  console.log(val2);
  var totalPrizeOfProduct2 = val2 * 250;
  console.log(totalPrizeOfProduct2)
  document.getElementById('total-prize-pr-c2p2').innerHTML = totalPrizeOfProduct2;
}
function c2_p3() {
  var val3 = document.getElementById('prize-of-product-c2p3').value;
  console.log(val3);
  var totalPrizeOfProduct3 = val3 * 200;
  console.log(totalPrizeOfProduct3)
  document.getElementById('total-prize-pr-c2p3').innerHTML = totalPrizeOfProduct3;
}
function c2_p4() {
  var val4 = document.getElementById('prize-of-product-c2p4').value;
  console.log(val4);
  var totalPrizeOfProduct4 = val4 * 100;
  console.log(totalPrizeOfProduct4)
  document.getElementById('total-prize-pr-c2p4').innerHTML = totalPrizeOfProduct4;
}


////////////////////////////////ALL C3 FUNCTIONS /////////////////////////////////

function c3_p1() {
  var val1 = document.getElementById('prize-of-product-c3p1').value;
  console.log(val1);
  var totalPrizeOfProduct1 = val1 * 150;
  console.log(totalPrizeOfProduct1)
  document.getElementById('total-prize-pr-c3p1').innerHTML = totalPrizeOfProduct1;
}
function c3_p2() {
  var val2 = document.getElementById('prize-of-product-c3p2').value;
  console.log(val2);
  var totalPrizeOfProduct2 = val2 * 250;
  console.log(totalPrizeOfProduct2)
  document.getElementById('total-prize-pr-c3p2').innerHTML = totalPrizeOfProduct2;
}
function c3_p3() {
  var val3 = document.getElementById('prize-of-product-c3p3').value;
  console.log(val3);
  var totalPrizeOfProduct3 = val3 * 200;
  console.log(totalPrizeOfProduct3)
  document.getElementById('total-prize-pr-c3p3').innerHTML = totalPrizeOfProduct3;
}
function c3_p4() {
  var val4 = document.getElementById('prize-of-product-c3p4').value;
  console.log(val4);
  var totalPrizeOfProduct4 = val4 * 100;
  console.log(totalPrizeOfProduct4)
  document.getElementById('total-prize-pr-c3p4').innerHTML = totalPrizeOfProduct4;
}


var new_c1_p1_count, new_c1_p2_count, new_c1_p3_count, new_c1_p4_count;
var new_c2_p1_count, new_c2_p2_count, new_c2_p3_count, new_c2_p4_count;
var new_c3_p1_count, new_c3_p2_count, new_c3_p3_count, new_c3_p4_count;
setStartVal()
function setStartVal(){ 
  new_c1_p1_count = 0, new_c1_p2_count = 0, new_c1_p3_count = 0, new_c1_p4_count = 0;
  new_c2_p1_count = 0, new_c2_p2_count = 0, new_c2_p3_count = 0, new_c2_p4_count = 0;
  new_c3_p1_count = 0, new_c3_p2_count = 0, new_c3_p3_count = 0, new_c3_p4_count = 0;
}
/////////////////////////////////////////C1////////////////////////////////////////////
var getc1p1=localStorage.getItem("inputValuec1p1");
if(getc1p1== 0){
  new_c1_p1_count=0
}else{
  new_c1_p1_count=getc1p1;
}
var getc1p2=localStorage.getItem("inputValuec1p2");
if(getc1p2== 0){
  new_c1_p2_count=0
}else{
  new_c1_p2_count=getc1p2;
}
var getc1p3=localStorage.getItem("inputValuec1p3");
if(getc1p3== 0){
  new_c1_p3_count=0
}else{
  new_c1_p3_count=getc1p3;
}
var getc1p4=localStorage.getItem("inputValuec1p4");
if(getc1p4== 0){
  new_c1_p4_count=0
}else{
  new_c1_p4_count=getc1p4;
}

/////////////////////////////////////////C2////////////////////////////////////////////
var getc2p1=localStorage.getItem("inputValuec2p1");
if(getc2p1== 0){
  new_c2_p1_count=0
}else{
  new_c2_p1_count=getc2p1;
}
var getc2p2=localStorage.getItem("inputValuec2p2");
if(getc2p2== 0){
  new_c2_p2_count=0
}else{
  new_c2_p2_count=getc2p2;
}
var getc2p3=localStorage.getItem("inputValuec2p3");
if(getc2p3== 0){
  new_c2_p3_count=0
}else{
  new_c2_p3_count=getc2p3;
}
var getc2p4=localStorage.getItem("inputValuec2p4");
if(getc2p4== 0){
  new_c2_p4_count=0
}else{
  new_c2_p4_count=getc2p4;
}

/////////////////////////////////////////C3////////////////////////////////////////////
var getc3p1=localStorage.getItem("inputValuec3p1");
if(getc3p1== 0){
  new_c3_p1_count=0
}else{
  new_c3_p1_count=getc3p1;
}
var getc3p2=localStorage.getItem("inputValuec3p2");
if(getc3p2== 0){
  new_c3_p2_count=0
}else{
  new_c3_p2_count=getc3p2;
}
var getc3p3=localStorage.getItem("inputValuec3p3");
if(getc3p3== 0){
  new_c3_p3_count=0
}else{
  new_c3_p3_count=getc3p3;
}
var getc3p4=localStorage.getItem("inputValuec3p4");
if(getc3p4== 0){
  new_c3_p4_count=0
}else{
  new_c3_p4_count=getc3p4;
}






































// ADD TO CART FUNCTION

function addtocart(product) {
  if (product == 'c1_p1') {
    console.log('in c1p1')
    new_c1_p1_count = document.getElementById('prize-of-product-c1p1').value;
    var localStorage_c1p1=new_c1_p1_count;
    localStorage.setItem("inputValuec1p1",localStorage_c1p1);
    console.log(new_c1_p1_count)
  } else if (product == 'c1_p2') {
    console.log('in c1p2')
    new_c1_p2_count = document.getElementById('prize-of-product-c1p2').value;
    var localStorage_c1p2=new_c1_p2_count;
    localStorage.setItem("inputValuec1p2",localStorage_c1p2);
    console.log(new_c1_p2_count)
  } else if (product == 'c1_p3') {
    console.log('in c1p3')
    new_c1_p3_count = document.getElementById('prize-of-product-c1p3').value;
    var localStorage_c1p3=new_c1_p3_count;
    localStorage.setItem("inputValuec1p3",localStorage_c1p3);
    console.log(new_c1_p3_count)
  } else if (product == 'c1_p4') {
    console.log('in c1p4')
    new_c1_p4_count = document.getElementById('prize-of-product-c1p4').value;
    var localStorage_c1p4=new_c1_p4_count;
    localStorage.setItem("inputValuec1p4",localStorage_c1p4);
    console.log(new_c1_p4_count)
  }
  else if (product == 'c2_p1') {
    console.log('in c2p1')
    new_c2_p1_count = document.getElementById('prize-of-product-c2p1').value;
    var localStorage_c2p1=new_c2_p1_count;
    localStorage.setItem("inputValuec2p1",localStorage_c2p1);
    console.log(new_c2_p1_count)
  } else if (product == 'c2_p2') {
    console.log('in c2p2')
    new_c2_p2_count = document.getElementById('prize-of-product-c2p2').value;
    var localStorage_c2p2=new_c2_p2_count;
    localStorage.setItem("inputValuec2p2",localStorage_c2p2);
    console.log(new_c2_p2_count)
  } else if (product == 'c2_p3') {
    console.log('c2p3')
    new_c2_p3_count = document.getElementById('prize-of-product-c2p3').value;
    var localStorage_c2p3=new_c2_p3_count;
    localStorage.setItem("inputValuec2p3",localStorage_c2p3);
  } else if (product == 'c2_p4') {
    console.log('c2p4')
    new_c2_p4_count = document.getElementById('prize-of-product-c2p4').value;
    var localStorage_c2p4=new_c2_p4_count;
    localStorage.setItem("inputValuec2p4",localStorage_c2p4);
  }
  else if (product == 'c3_p1') {
    console.log('in c3p1')
    new_c3_p1_count = document.getElementById('prize-of-product-c3p1').value;
    var localStorage_c3p1=new_c3_p1_count;
    localStorage.setItem("inputValuec3p1",localStorage_c3p1);
    console.log(new_c3_p1_count)
  } else if (product == 'c3_p2') {
    console.log('in c3p2')
    new_c3_p2_count = document.getElementById('prize-of-product-c3p2').value;
    var localStorage_c3p2=new_c3_p2_count;
    localStorage.setItem("inputValuec3p2",localStorage_c3p2);
    console.log(new_c3_p2_count)
  } else if (product == 'c3_p3') {
    console.log('c3p3')
    new_c3_p3_count = document.getElementById('prize-of-product-c3p3').value;
    var localStorage_c3p3=new_c3_p3_count;
    localStorage.setItem("inputValuec3p3",localStorage_c3p3);
  } else if (product == 'c3_p4') {
    console.log('c3p4')
    new_c3_p4_count = document.getElementById('prize-of-product-c3p4').value;
    var localStorage_c3p4=new_c3_p4_count;
    localStorage.setItem("inputValuec3p4",localStorage_c3p4);
  }
  updateDatabase(new_c1_p1_count, new_c1_p2_count, new_c1_p3_count, new_c1_p4_count, new_c2_p1_count, new_c2_p2_count, new_c2_p3_count, new_c2_p4_count, new_c3_p1_count, new_c3_p2_count, new_c3_p3_count, new_c3_p4_count)
  //   var new_c2_p1_count=0,new_c2_p2_count=0,new_c2_p3_count=0,new_c2_p4_count=0;
}

/////////////////////////////BASE PRIZE OF PRODUCTS///////////////////////////
const c1_p1_base_prize = 150;
const c1_p2_base_prize = 250;
const c1_p3_base_prize = 200;
const c1_p4_base_prize = 100;

const c2_p1_base_prize = 150;
const c2_p2_base_prize = 250;
const c2_p3_base_prize = 200;
const c2_p4_base_prize = 100;

const c3_p1_base_prize = 150;
const c3_p2_base_prize = 250;
const c3_p3_base_prize = 200;
const c3_p4_base_prize = 100;
////////////////////////////////////////////////////////////////////////////////

var val=localStorage.getItem("inputValue");
var uniqueId = val;

function updateDatabase(new_c1_p1_count, new_c1_p2_count, new_c1_p3_count, new_c1_p4_count, new_c2_p1_count, new_c2_p2_count, new_c2_p3_count, new_c2_p4_count, new_c3_p1_count, new_c3_p2_count, new_c3_p3_count, new_c3_p4_count) {
  console.log("in update database")

  firebase.database().ref("student/" + uniqueId).set(
    {
      id: uniqueId,
      products:{
        c1:{
          c1_p1: {
            noOfProducts: new_c1_p1_count,
            prize: new_c1_p1_count * c1_p1_base_prize
          },
          c1_p2: {
            noOfProducts: new_c1_p2_count,
            prize: new_c1_p2_count * c1_p2_base_prize
          },
          c1_p3: {
            noOfProducts: new_c1_p3_count,
            prize: new_c1_p3_count * c1_p3_base_prize
          }, c1_p4: {
            noOfProducts: new_c1_p4_count,
            prize: new_c1_p4_count * c1_p4_base_prize
          }
        },
        c2:{
          c2_p1: {
            noOfProducts: new_c2_p1_count,
            prize: new_c2_p1_count * c2_p1_base_prize
          },
          c2_p2: {
            noOfProducts: new_c2_p2_count,
            prize: new_c2_p2_count * c2_p2_base_prize
          },
          c2_p3: {
            noOfProducts: new_c2_p3_count,
            prize: new_c2_p3_count * c2_p3_base_prize
          },
          c2_p4: {
            noOfProducts: new_c2_p4_count,
            prize: new_c2_p4_count * c2_p4_base_prize
          },
        },
        c3:{
          c3_p1: {
            noOfProducts: new_c3_p1_count,
            prize: new_c3_p1_count * c3_p1_base_prize
          },
          c3_p2: {
            noOfProducts: new_c3_p2_count,
            prize: new_c3_p2_count * c3_p2_base_prize
          },
          c3_p3: {
            noOfProducts: new_c3_p3_count,
            prize: new_c3_p3_count * c3_p3_base_prize
          },
          c3_p4: {
            noOfProducts: new_c3_p4_count,
            prize: new_c3_p4_count * c3_p4_base_prize
          },
        }
      },
      totalprize: (new_c1_p1_count * c1_p1_base_prize) + (new_c1_p2_count * c1_p2_base_prize) + (new_c1_p3_count * c1_p3_base_prize) + (new_c1_p4_count * c1_p4_base_prize) + (new_c2_p1_count * c2_p1_base_prize) + (new_c2_p2_count * c2_p2_base_prize) + (new_c2_p3_count * c2_p3_base_prize) + (new_c2_p4_count * c2_p4_base_prize) + (new_c3_p1_count * c3_p1_base_prize) + (new_c3_p2_count * c3_p2_base_prize) + (new_c3_p3_count * c3_p3_base_prize) + (new_c3_p4_count * c3_p4_base_prize)
    }
  );
  alert("Data inserted 2");
  cartData()
}

// cartData()
window.onload = function() {
  cartData()
};
function cartData(){

  firebase.database().ref("student/" + uniqueId).on("value", function(snap){
    var demo = snap.val(); 
    console.log('this is '+demo.totalprize);
    document.getElementById('prize-of-cart').innerText=demo.totalprize;
    // document.getElementById('prize-of-cart').style.color=blur;
}
);

  
}

