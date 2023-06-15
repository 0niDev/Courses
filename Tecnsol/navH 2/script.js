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
        const divs = document.getElementsByTagName('div');
        for (let i = 0; i < divs.length; i++) {
            divs[i].style.borderColor = 'white';
        }
        const sun = document.getElementById('theme');
        sun.innerHTML = `<img src="sun.png" alt="dark theme" height="40px">`
        const lastchild = document.getElementById('lastchild');
        lastchild.style.right = "22px";
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
        const divs = document.getElementsByTagName('div');
        for (let i = 0; i < divs.length; i++) {
            divs[i].style.borderColor = 'black';
        }
        const sun = document.getElementById('theme');
        sun.innerHTML = `<img src="moon.png" alt="dark theme" height="40px">`
        const lastchild = document.getElementById('lastchild');
        lastchild.style.right = "20px";
        const page = document.getElementById('page');
        page.style.color = 'black';
    }
}