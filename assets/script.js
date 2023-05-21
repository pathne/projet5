const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

var slideIndex = 0;

function initLeftArrow(){
    document.getElementById('banner-left-arrow').addEventListener('click', (e) => {
        if (e.button === 0){
            e.preventDefault()
            displaySlide(slideIndex - 1);
        }
    })
}

function initRightArrow(){
    document.getElementById('banner-right-arrow').addEventListener('click', (e) => {
        if (e.button === 0){
            e.preventDefault()
            displaySlide(slideIndex + 1);
        }
    })
}

function displaySlide(index){
    slideIndex = index;
    document.getElementById('banner-img').src = './assets/images/slideshow/' + slides[index].image
    document.getElementById('banner-text').innerHTML = slides[index].tagLine
}

initLeftArrow();
initRightArrow();
