
// COLUMN 1
var function1 = function(){
const column1 = [$(`<img src="Images/icons/3bar.png">`), $(`<img src="Images/icons/berry.jpg">`), $(`<img src="Images/icons/7.png">`), $(`<img src="Images/icons/W.png">`),$(`<img src="Images/icons/clover.jpg">`),$(`<img src="Images/icons/melon.png">`),$(`<img src="Images/icons/cherry.png">`)];


var first = column1.slice();

randomCol1 = function(){
var arr = []
while(arr.length < 3){
var r = generateRandomNumber() ;
if(arr.indexOf(r) === -1) arr.push(r);
}
return arr
}
 generateRandomNumber = function(){
   return first[Math.floor((Math.random() * first.length))]
};



const randomArr1 = randomCol1()
var i = 0;
function loop(){
        if (++i < randomArr1.length) {
            setTimeout(loop, 800); 
            $('#n1').html(randomArr1[0]);
            $('#n2').html(randomArr1[1]);
            $('#n3').html(randomArr1[2]);
         }
    }
    loop(); 


};
// function1();
// ----------------------------------------------------

var function2 = function(){
const column2 = [$(`<img src="Images/icons/3bar.png">`), $(`<img src="Images/icons/berry.jpg">`), $(`<img src="Images/icons/7.png">`), $(`<img src="Images/icons/I.png">`),$(`<img src="Images/icons/clover.jpg">`),$(`<img src="Images/icons/melon.png">`),$(`<img src="Images/icons/cherry.png">`)];

var second = column2.slice();

randomCol2 = function(){
var arr = []
while(arr.length < 3){
var r = generateRandomNumber() ;
if(arr.indexOf(r) === -1) arr.push(r);
}
return arr
}
 generateRandomNumber = function(){
   return second[Math.floor((Math.random() * second.length))]
};



const randomArr2 = randomCol2()
var i = 0;
function loop(){
        if (++i < randomArr2.length) {
            setTimeout(loop, 800); 
            $('#n4').html(randomArr2[0]);
            $('#n5').html(randomArr2[1]);
            $('#n6').html(randomArr2[2]);
         }
    }
    loop(); 
};
// function2();

//     // ------------------------------------------------------


var function3 = function(){
    const column3 = [$(`<img src="Images/icons/3bar.png">`), $(`<img src="Images/icons/berry.jpg">`), $(`<img src="Images/icons/7.png">`), $(`<img src="Images/icons/N.png">`),$(`<img src="Images/icons/clover.jpg">`),$(`<img src="Images/icons/melon.png">`),$(`<img src="Images/icons/cherry.png">`)];

var third = column3.slice();

randomCol3 = function(){
var arr = []
while(arr.length < 3){
var r = generateRandomNumber() ;
if(arr.indexOf(r) === -1) arr.push(r);
}
return arr
}
 generateRandomNumber = function(){
   return third[Math.floor((Math.random() * third.length))]
};



const randomArr3 = randomCol3()
var i = 0;
function loop(){
        if (++i < randomArr3.length) {
            setTimeout(loop, 800); 
            $('#n7').html(randomArr3[0]);
            $('#n8').html(randomArr3[1]);
            $('#n9').html(randomArr3[2]);
         }
    }
    loop(); 
};




$('#handle, .spin').on('click', function(){

    function1();
    function2();
    function3();
    $('#handle').addClass("drag").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
              $('#handle').removeClass("drag");
            });
});


