//selektar h1-elementen

$('h1').text('jQuery');


//selektar h1-elementet med id="hampus"
$('#hampus').text('Annan text');

//ändrar alla h1-elements färg till skyblue
// $('h1').css('color', 'skyblue');


// //ändrar bakgrundsfärgen på det sista h1-elementet
// const h1s = document.querySelectorAll('h1');
// h1s[h1s.length-1].style.backgroundColor = 'hotpink';


//ett annat sätt att ändra sista h1-lementets färg (enligt jQuery dokumentation)
$('h1:last').css('color', 'hotpink');


//ändrar sista h-elementets bakgrundsfärg
$('h1').last().css('backgroundColor', 'skyblue');

//test-övning:

//lägga till en knapp
//lägga till en eventlistener på knappen varje gång man ska ändra


//vi skapar en knapp:
const btn = $('<button>Klicka!</button>');
//appendar den till bodyn
$('body').append(btn);

//deklarerar 'clicks'
let clicks = 0;

//addar ett event på 'click'.
btn.click(evet => {
    clicks++;

    //en css-selektor.
    $('h1:nth-child(2)').text(clicks);

    //Går även att göra genom: Jquery-metod
    // $('h1').eq(1).text(clicks);
    console.log(clicks);
})

//Test-övning 2:

//hämta random hundbild med jQuery

const url = 'https://dog.ceo/api/breeds/image/random';

$.get(url).then(result => {

    //se skillnaden på dessa två:
    console.log(result);
    console.log(result.message);

    //skapa en bild:
    const img = $('<img>');
    img.attr('src', result.message);
    $('body').append(img);
})