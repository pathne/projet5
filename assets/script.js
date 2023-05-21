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

let slideIndex = 0;

function initLeftArrow(){
    document.getElementById('banner-left-arrow').addEventListener('click', (e) => {
        if (e.button === 0){
            e.preventDefault()
            let index = slideIndex - 1
            if (index < 0){
                index = slides.length - 1
            }
            displaySlide(index)
        }
    })
}

function initRightArrow(){
    document.getElementById('banner-right-arrow').addEventListener('click', (e) => {
        if (e.button === 0){
            e.preventDefault()
            let index = slideIndex + 1
            if (index === slides.length){
                index = 0
            }
            displaySlide(index)
        }
    })
}

function initBulletPoints(){
    let dots = document.getElementById('dots');
    for (let i=0; i<slides.length; i++){
        addBulletPoint(dots, i);
    }
}

function addBulletPoint(dots, index){
    let dot = document.createElement('div')
    if (index === 0){
        dot.className = 'dot dot_selected'
    }
    else {
        dot.className = 'dot'
    }
    dot.addEventListener('click', (e) => {
        if (e.button === 0){
            e.preventDefault()
            displaySlide(index)
        }
    });
    dots.appendChild(dot)
}

function displaySlide(index){
    slideIndex = index;
    document.getElementById('banner-img').src = './assets/images/slideshow/' + slides[index].image
    document.getElementById('banner-text').innerHTML = slides[index].tagLine
    let dots = document.getElementById('dots');
    for (let i=0; i<slides.length; i++){
        let className = 'dot';
        if (i === index){
            className += ' dot_selected';
        }
        dots.children[i].className = className;
    }
}

initLeftArrow()
initRightArrow()
initBulletPoints()
