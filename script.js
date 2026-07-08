const NAME = "Florence Taele";
const TAGLINE = "Hi, I'm an Software Engineer Student, interested in making an impact with my skills in coding and also infrastructure management with AWS and currently exploring Microsoft Azure!";
const HEADLINE = "Available for Summer Internships & Graduate Programmes!"

function typeText(el, text, speed, delay){
    setTimeout(() => {
        let i = 0;
        const interval = setInterval(() => {
            el.textContent = text.slice(0, i + 1);
            i++;
            if (i >= text.length) clearInterval(interval);
        }, speed);
    }, delay);
}

typeText(document.getElementById("typed-name"), NAME, 60, 300);
typeText(document.getElementById("typed-tagline"), TAGLINE, 25, 300 + NAME.length * 60 + 400);
typeText(document.getElementById("typed-headline"), HEADLINE,30,300 + NAME.length * 60 + 400 + TAGLINE.length * 25 + 400);        