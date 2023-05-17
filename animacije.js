// KOD ZA TEXT
const textTag = document.querySelector(".section1 h1");  
const text = textTag.textContent; // daje array

const splittedText = text.split(""); // preko array metode rastavili tekst na slova

textTag.innerHTML = ""; // izbrisan text 

for (let i = 0; i < splittedText.length; i++) {
    if (splittedText[i] === " ") {
        splittedText[i] ="&nbsp;";
    }

    textTag.innerHTML += `<span>${splittedText[i]}</span>`;
}

let spans = textTag.querySelectorAll("span");
let brojac = 0;
// u određenom intervalu će ponavljat neku radnju
const interval = setInterval(() => { 
    let singleSpan = spans[brojac];

    singleSpan.className = "fadeMove";
    brojac++;

    if (brojac === spans.length) {
        clearInterval(interval);  // funckija za gašenje intervala
    }
}, 70);

//KOD ZA LINIJU I SLIKE
const line = document.querySelector(".border-line");
let animationWidth = 0;

const onScroll = () => {
    if (this.oldScroll > this.scrollY) {
        animationWidth -= 2.5;
    } else {
        animationWidth += 2.5;
    }

    if (animationWidth === 100) {
        animationWidth = 100;
    } 

    if (animationWidth === 0) {
        animationWidth = 0;
    }

    line.style.width = animationWidth + "%";

    this.oldScroll = this.scrollY

    //SLIKE 
    imageAnimation(); // poziv funkcije odozdo
};

window.addEventListener("scroll", onScroll)

const imageAnimation = () => {
    const sectionForAnimation = document.querySelector(".section2 .images");
    const sectionPosition = sectionForAnimation.getBoundingClientRect().top; //koliko je section udaljen od vrha
    const screenPosition = window.innerHeight / 1.3; // visina slike(browsera) [ "/ 1.3", da se ucita tek nakon 30% sekcije]

    const leftImage = document.querySelector(".slideFromLeft");
    const rightImage = document.querySelector(".slideFromRight");

    if (sectionPosition < screenPosition) {
        leftImage.classList.add("animated"); // classList jer već imaju klasu
        rightImage.classList.add("animated");
    } else {
        leftImage.classList.remove("animated");
        rightImage.classList.remove("animated");
    }
}