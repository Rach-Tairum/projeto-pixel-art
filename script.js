let local = document.querySelector('#pixel-board');

for(let i = 0; i < 5; i += 1){
    for(let index = 0; index < 5; index += 1){
        let pixel = document.createElement('div');
        pixel.className = 'pixel'
        local.appendChild(pixel)
    }   
    let quebra = document.createElement('br');
    local.appendChild(quebra)
}