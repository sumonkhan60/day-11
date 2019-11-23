

var btnElement = document.getElementById('btn');

btnElement.onclick = function () {
    var firstNameValue = document.getElementById('firstName').value;

    var lastNameValue = document.getElementById('lastName').value;

    var fullNameValue = firstNameValue +' '+lastNameValue;

    document.getElementById('fullName').value = fullNameValue;
};



var additionBtnElement = document.getElementById('addition');

additionBtnElement.onclick = function () {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);

    var addition = firstNumber+secondNumber;
    document.getElementById('result').value = addition;
};
var subtractionBtnElement = document.getElementById('subtraction');

subtractionBtnElement.onclick = function () {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);

    var subtraction = firstNumber-secondNumber;
    document.getElementById('result').value = subtraction;
};
var multiplicationBtnElement = document.getElementById('multiplication');

multiplicationBtnElement.onclick = function () {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);

    var multiplication = firstNumber*secondNumber;
    document.getElementById('result').value = multiplication;
};

var divisionBtnElement = document.getElementById('division');

divisionBtnElement.onclick = function () {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);

    var division = firstNumber/secondNumber;
    document.getElementById('result').value = division;
};

var remainderBtnElement = document.getElementById('remainder');

remainderBtnElement.onclick = function () {
    var firstNumber = Number(document.getElementById('firstNumber').value);
    var secondNumber = Number(document.getElementById('secondNumber').value);

    var remainder = firstNumber%secondNumber;
    document.getElementById('result').value = remainder;
};













// function sumon() {
//     var firstName = 'Sumon';
//     var lastName = 'Khan';
//     var fullName = firstName+' '+lastName;
//     document.write(fullName);
// }

// function sumon(firstName, lastName) {
//     var fullName = firstName+' '+lastName;
//     document.write(fullName);
// }
//
//
// document.write('<br/>===================<br/>');
// sumon('Sumon', 'Khan');
// document.write('<br/>===================<br/>');
// sumon('Ashraful', 'Islam');
// document.write('<br/>===================<br/>');
// sumon('Brendan', 'Eich');













// var paragraphElement= document.getElementsByTagName('p');
// // document.write(paragraphElement[0].innerHTML+'<br/>');
//
// document.write(paragraphElement.length+'<br/>');
// for (var key=0; key<paragraphElement.length; key++){
//
//     document.write(paragraphElement[key].innerHTML+'<br/>');
// }



// var a=new Array();
// var b=new Array();
// var data=[];

// data[0]=10;
// data[1]=20;
// data[2]=30;

// var data=['sumon','pabna','bangladesh'];
// document.write(data.length);
// data['name']='Sumon';
// data['city']='Pabna';
// data['country']='Bangladesh';

// document.write(data[2]);
// document.write('<br/>');
// document.write(data['name']);

// for (var key in data){
//     document.write(data[key]);
//     document.write('<br/>');
// }