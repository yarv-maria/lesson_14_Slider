$(window).ready(function() {

    setTimeout(function (){
        $('.wrapper').animate({opacity: 1}, 500)
    },500);

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true
    });

});


/*------ Разница между суммой квадратов и квадратом суммы -------*/

var sumOfSquares = 0;
var squareOfTheSum = 0;
var sumNumber = 0;

for (var i = 1;  i <= 100; i++) {
    sumOfSquares += Math.pow(i, 2);
    sumNumber += i;
}
squareOfTheSum = Math.pow(sumNumber, 2);

result = squareOfTheSum - sumOfSquares;

console.log (result);