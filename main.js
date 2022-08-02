document.getElementById("Home-link").style.borderBottom="2px solid white";
const pageLinks=document.querySelectorAll("#nav-bar a");

function changePage(e){
    const pages=document.getElementById("main-body").children;
    for(let i=0;i<pages.length;i++){
        if(e.target.text===pages[i].id){
            pages[i].style.display="flex";
            document.getElementById(pages[i].id+"-link").style.borderBottom="2px solid white";
        }else{
            pages[i].style.display="none";
            document.getElementById(pages[i].id+"-link").style.borderBottom="";
        }
    }
}


for(let i=0;i<pageLinks.length;i++){
    pageLinks[i].addEventListener("click",changePage)
}

const skillPercentage=document.getElementsByClassName("skill-percentage");
const skillStatus=document.getElementsByClassName("skill-completed");

for(let i=0;i<skillPercentage.length;i++){
    skillStatus[i].style.width=skillPercentage[i].innerHTML;
    console.log(skillStatus[i]+"  "+skillPercentage[i].innerHTML)
}