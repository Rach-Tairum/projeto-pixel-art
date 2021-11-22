let local = document.querySelector('#pixel-board');

for(let i = 0; i <= 5; i += 1){
    let pixel = document.createElement('div');
    pixel.className = 'pixel'
    local.appendChild(pixel)

}