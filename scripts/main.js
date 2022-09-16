let img = document.querySelector("img");
let originImgSrc = img.getAttribute("src");
img.addEventListener("click",()=>{
    if(img.getAttribute("src")==originImgSrc){
        img.setAttribute("src","images/firefox2.png");
    }else{
        img.setAttribute("src",originImgSrc);
    }
});

localStorage.clear();
let h1 = document.querySelector("h1");

window.onload = ()=>{
if(!localStorage.getItem("userName")){
    h1.textContent += "," + getUserName();
}else{
    h1.textContent += "," + localStorage.getItem("userName");
}
}

let setNameBtn = document.querySelector("#user-name-btn");
setNameBtn.onclick = function(){
   h1.textContent = "Cool," + getUserName();
}

function getUserName(){
    let userName = prompt("你的名字？");
    if(!userName)
        getUserName();
    else{
        localStorage.setItem("userName",userName);
        return userName;
    }
}

