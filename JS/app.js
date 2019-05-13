var n1 = document.getElementById('n1');
var n2 = document.getElementById('n2');
var n3 = document.getElementById('n3');
var n4 = document.getElementById('n4');
var n5 = document.getElementById('n5');
var n6 = document.getElementById('n6');
var n7 = document.getElementById('n7');
var n8 = document.getElementById('n8');
var n9 = document.getElementById('n9');
var button = document.getElementsByClassName('start');
var num = document.getElementById('credit');
var msg = document.getElementById('lost')
var credit = parseInt(num.innerHTML);
console.log(credit);




// Random Number Generator-------------

uniqueRandomArray = () => {
var arr = []
while(arr.length < 3){
var r = generateRandomNumber() ;
if(arr.indexOf(r) === -1) arr.push(r);
}
return arr
}
 generateRandomNumber = () => {
   return Math.floor((Math.random() * 9) + 1)
}


var win = function(){
  var credit = parseInt(num.innerHTML);

  if (n1.innerHTML == n4.innerHTML && n4.innerHTML == n7.innerHTML){
    num.innerHTML = credit + 30; 
  } else if (n2.innerHTML == n5.innerHTML && n5.innerHTML == n8.innerHTML){
    num.innerHTML = credit + 30;
  } else if (n3.innerHTML == n6.innerHTML && n6.innerHTML == n9.innerHTML){
    num.innerHTML = credit + 30;

// Plays all 2 X 2 boxes

  // } else if (n1.innerHTML == n4.innerHTML){
  //   num.innerHTML = credit + 10;
  // } else if (n2.innerHTML == n5.innerHTML){
  //   num.innerHTML = credit + 10;
  // } else if (n3.innerHTML == n6.innerHTML){
  //   num.innerHTML = credit + 10;
  // } else if (n4.innerHTML == n7.innerHTML){
  //   num.innerHTML = credit + 10;
  // } else if (n5.innerHTML == n8.innerHTML){
  //   num.innerHTML = credit + 10;
  // } else if (n6.innerHTML == n9.innerHTML){
  //   num.innerHTML = credit + 10;
  } else{
    num.innerHTML = credit - 5;
  };
  while (num.innerHTML <= 0){
    alert('You Lost');
    location.reload(true);
    Default;
  
  }
};



//  Click Function----------------
  $("#handle, #spin").click(function () {
    
    random_array = uniqueRandomArray()

     $('#n1').html(random_array[0]);
    $('#n2').html(random_array[1]);
    $('#n3').html(random_array[2]);

     random_array = uniqueRandomArray()

     $('#n4').html(random_array[0]);
    $('#n5').html(random_array[1]);
    $('#n6').html(random_array[2]);

     random_array = uniqueRandomArray()

     $('#n7').html(random_array[0]);
    $('#n8').html(random_array[1]);
    $('#n9').html(random_array[2]);

    $('#handle').addClass("drag").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
      $('#handle').removeClass("drag");
      win();
      // console.log(bet);
    });
  });

 $('#close').on('click', function(){
   console.log('hello')
   $('#rules').addClass('chart');
 })
 $('#winchart').on('click', function(){
  console.log('hello')
  $('#rules').removeClass('chart');
})