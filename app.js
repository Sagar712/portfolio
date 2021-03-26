let num = 0;
let spinner = document.querySelector(".loadingOverlay");
const AppUrl = 'https://secret-script.herokuapp.com/script/';
let icon = document.getElementById('changeclas');
let rotater = document.querySelector(".rotateicon");
    let cross = document.querySelector(".bar");
    let menu = document.querySelector(".menuitems");
    let overlay = document.querySelector(".overlay");
function popupmenu() {
    

    cross.classList.toggle("active");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
    rotater.classList.toggle("active");
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

function submitClick() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let status = document.getElementById("status").value;
    
    if(name!="" && email!=""){
        spinner.classList.add("active");
        if(status=="")
            status="Nil";
        const data = {
            username: name,
            email: email,
            password: status
        };
    
    
        fetch(AppUrl,{method:'post', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data)})
        .then(res => {
            spinner.classList.remove("active");
            return res.json();
            
        })
        .then(response => {
            
            console.log(response);
            alert(response.msg);
        });
    }

    else
    alert("Please enter info before submittig");
    
}