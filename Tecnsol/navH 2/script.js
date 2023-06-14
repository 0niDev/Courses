theme = false

function onClick(){
    if(!theme){
        theme = true
        const body = document.getElementsByTagName('body')[0];
        body.style.backgroundColor = 'black';
        const img = document.getElementById('img');
        img.innerHTML = '<img src="LogoW.png" alt="Home" height="70px">'
        const elements = document.getElementsByTagName('a');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.color = 'white';
        }
        const sun = document.getElementById('theme');
        sun.innerHTML = `<img src="sun.png" alt="dark theme" height="40px">`
        const page = document.getElementById('page');
        page.style.color = 'white';
    } else {
        theme = false
        const body = document.getElementsByTagName('body')[0];
        body.style.backgroundColor = 'white';
        const img = document.getElementById('img');
        img.innerHTML = '<img src="LogoB.png" alt="Home" height="70px">'
        const elements = document.getElementsByTagName('a');
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.color = 'black';
        }
        const sun = document.getElementById('theme');
        sun.innerHTML = `<img src="moon.png" alt="dark theme" height="40px">`
        const page = document.getElementById('page');
        page.style.color = 'black';
    }
}