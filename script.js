function criaOMainDoHTML() {
    let main = document.getElementById('main');
    let limpaQuadro = document.createElement('div');
    limpaQuadro.id = 'clear-board';
    limpaQuadro.innerText = 'Limpar';
    main.appendChild(limpaQuadro);

    let localQuadro = document.createElement('div');
    localQuadro.id = 'pixel-board'
    main.appendChild(localQuadro)
}
criaOMainDoHTML()

let local = document.querySelector('#pixel-board');
let black = document.getElementById('black');
let darkBlue = document.getElementById('darkblue');
let green = document.getElementById('green');
let darkPink = document.getElementById('mediumvioletred');
let pixels = document.getElementsByClassName('pixel');

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

function reset(){
    
    let limpaQuadro = document.getElementById('clear-board')

    limpaQuadro.addEventListener('click', function(){
        for(let index = 0; index < pixels.length; index += 1){
            pixels[index].style.backgroundColor = 'rgb(255, 255, 255)'
        }
    })

}
reset()



function usuarioCriaGrade(){
    let limpaQuadro = document.getElementById('clear-board')
    let tamanhoQuadro = document.createElement('input')
    tamanhoQuadro.placeholder = 'tamanho do quadro'
    tamanhoQuadro.id = 'board-size'
    tamanhoQuadro.type = 'number'
    tamanhoQuadro.min = 1
    tamanhoQuadro.max = 50
    limpaQuadro.appendChild(tamanhoQuadro);

    let novoQuadro = document.createElement('button');
    novoQuadro.id = 'generate-board'
    novoQuadro.innerHTML = 'VQV'
    limpaQuadro.appendChild(novoQuadro)
    

    novoQuadro.addEventListener('click', function(){
        let board = tamanhoQuadro.value

        if(board === '') {
            alert('Board inválido!')

        } else if(board < 5) {
            local.innerHTML = '';
            
            for(let i = 0; i < 5; i += 1){
                for(let index = 0; index < 5; index += 1){
                    let pixel = document.createElement('div');
                    pixel.className = 'pixel'
                    pixel.addEventListener('click',pintar)
                    local.appendChild(pixel)
                }   
        
            let quebra = document.createElement('br');
            local.appendChild(quebra)
            }

        } else if (board > 50){
            local.innerHTML = '';
            
            for(let i = 0; i < 50; i += 1){
                for(let index = 0; index < 50; index += 1){
                    let pixel = document.createElement('div');
                    pixel.className = 'pixel'
                    pixel.addEventListener('click',pintar)
                    local.appendChild(pixel)
                }   
        
            let quebra = document.createElement('br');
            local.appendChild(quebra)
            }

    } else if (board >= 5 || board < 50) {
        local.innerHTML = '';

        for(let i = 0; i < board; i += 1){
          for(let index = 0; index < board; index += 1){
            let pixel = document.createElement('div');
            pixel.className = 'pixel'
            pixel.addEventListener('click',pintar)
            local.appendChild(pixel)
            }   

        let quebra = document.createElement('br');
        local.appendChild(quebra)
        }
    }
    
})
}
usuarioCriaGrade()