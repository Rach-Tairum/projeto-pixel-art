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
        let linhas = document.createElement('div');
            linhas.className = 'linha'
            local.appendChild(linhas)
            let linha = document.querySelectorAll('.linha')
            
        for(let index = 0; index < 5; index += 1){
            let pixel = document.createElement('div');
            pixel.className = 'pixel'
            linha[i].appendChild(pixel)
            console.log(linha[i])
        }   
   }
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
                    event.target.style.backgroundColor = cores[i].style.backgroundColor
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
            criaGrade()

        } else if (board > 50){
            local.innerHTML = '';
            
            for(let i = 0; i < 50; i += 1){
                let linhas = document.createElement('div');
                    linhas.className = 'linha'
                    local.appendChild(linhas)
                    let linha = document.querySelectorAll('.linha')
                    
                for(let index = 0; index < 50; index += 1){
                    let pixel = document.createElement('div');
                    pixel.className = 'pixel'
                    linha[i].appendChild(pixel)
                }   
           }

    } else if (board >= 5 || board < 50) {
        local.innerHTML = '';

        for(let i = 0; i < board; i += 1){
            let linhas = document.createElement('div');
                linhas.className = 'linha'
                local.appendChild(linhas)
                let linha = document.querySelectorAll('.linha')
                
            for(let index = 0; index < board; index += 1){
                let pixel = document.createElement('div');
                pixel.className = 'pixel'
                linha[i].appendChild(pixel)
            }   
       }
    }
    
})
}
usuarioCriaGrade()

/* Referência:
https://pt.stackoverflow.com/questions/493278/como-gerar-cores-hexadecimais-aleat%C3%B3rias-com-javascript
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toString 
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/padStart */

function corAleatoria(){
    black.style.backgroundColor = 'black';
    darkBlue.style.backgroundColor = '#' + parseInt(Math.random() * 0x1000000).toString(16).padStart(6,'0');
    green.style.backgroundColor = '#' + parseInt(Math.random() * 0x1000000).toString(16).padStart(6,'0');
    darkPink.style.backgroundColor = '#' + parseInt(Math.random() * 0x1000000).toString(16).padStart(6,'0');
}
corAleatoria()