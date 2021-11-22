let local = document.querySelector('#pixel-board');

function criaGrade(){
    for(let i = 0; i < 5; i += 1){
        for(let index = 0; index < 5; index += 1){
            let pixel = document.createElement('div');
            pixel.className = 'pixel'
            local.appendChild(pixel)
        }   

    let quebra = document.createElement('br');
    local.appendChild(quebra)
};
}
criaGrade();

let cores = document.getElementsByClassName('color');
cores[0].className = 'color selected';

let black = document.getElementById('black');
let darkBlue = document.getElementById('darkblue');
let green = document.getElementById('green');
let darkPink = document.getElementById('mediumvioletred');

function selecionaCirculo(){
    black.addEventListener('click',function(){
        black.className = 'color selected';
        darkBlue.classList.remove('selected');
        green.classList.remove('selected');
        darkPink.classList.remove('selected');
    });

    darkBlue.addEventListener('click',function(){
        darkBlue.className = 'color selected';
        black.classList.remove('selected');
        green.classList.remove('selected');
        darkPink.classList.remove('selected');
    });

    green.addEventListener('click',function(){
        green.className = 'color selected';
        black.classList.remove('selected');
        darkBlue.classList.remove('selected');
        darkPink.classList.remove('selected');
    });

    darkPink.addEventListener('click',function(){
        darkPink.className = 'color selected';
        black.classList.remove('selected');
        darkBlue.classList.remove('selected');
        green.classList.remove('selected');
    });
}

selecionaCirculo()


function pintar(){
    let pixels = document.getElementsByClassName('pixel');
    for(let index = 0; index < pixels.length; index += 1){
        pixels[index].addEventListener('click', function(event){
            for(let i = 0; i < cores.length; i += 1){
                if(cores[i].className === 'color selected'){
                    event.target.style.backgroundColor = cores[i].id
                }
            }
        })
    }
}

pintar()

