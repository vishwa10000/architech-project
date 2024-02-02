function fixedicon(){
    let box = document.getElementById("box");
    if(box.style.display === "none" || box.style.display === ""){
        box.style.display = "block";
    }
    else{ 
        box.style.display = "none";
    }
}
//message bot completed

 function homebtns(){
    window.location.href="signup-card.html"
 }
 
//  !home sec btn completed

const carosel=document.querySelector('.carosel');
const btns=document.querySelectorAll('.btn');
const imglist=["home2","home3","home4","home5","home6","home7","home8",]

let index=0;
btns.forEach((twobtn)=>{
    twobtn.addEventListener('click',()=>{
        if(twobtn.classList.contains('btn-left')){
            index--;
            if(index<0){
                 index = imglist.length-1;
            }
            carosel.style.background =`url(assert/${imglist[index]}.jpg) center/cover fixed no-repeat`
        }
        else{
            index++;
            if(index===imglist.length){
                 index = 0;
            }
            carosel.style.background =`url(assert/${imglist[index]}.jpg)center/cover fixed no-repeat`
        }
    });
});
//carosel completed
function uploadbtn(){
    window.location.href="signup-card.html"
}
//!upload plan btn completed
function browsefile(){
    window.location.href="signup-card.html"
}
//!browse file btn completed
function startlearningbtn(){
    window.location.href="signup-card.html"
}
//!start learning btn completed
function sign(){
    window.location.href="signup-card.html"
}
function x1(){
    // window.location.href = document.referrer;
    window.history.back();
}
// two signup page start
function signup(){
    window.location.href="signup.html"
}
function x(){
    window.history.back();
}

// sidebar start
function sidebar(){
    window.location.href="sidebar.html"
}

function menubar(){
    window.location.href="sidebar.html"
}

function sidebarx(){
    window.history.back();
}

// phone menu bar  list function
function planner(){
    window.location.href="index.html"
}
function getideas(){
    window.location.href="get-idea.html"
}
function uploadplan(){
    window.location.href="uploadplan.html"
}
function designschool(){
    window.location.href="designschl.html"
}
function usecases(){
    window.location.href="use-cases.html"
}
function joinpro(){
    window.location.href="join.html"
}