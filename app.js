let num = 0;
let icon = document.getElementById('changeclas');
    let cross = document.querySelector(".bar");
    let menu = document.querySelector(".menuitems");
    let overlay = document.querySelector(".overlay");
function popupmenu() {
    

    cross.classList.toggle("active");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
    if(num==0){
        icon.className='fas fa-times';
        num=1;
    }
    else if(num==1){
        icon.className='fas fa-bars';
        num=0;
    }
    
}

function handleclick(varia) {
    window.location=varia;
    popupmenu();
}