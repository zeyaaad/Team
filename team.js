let btn=document.querySelector(".btn");
let page=document.querySelector(".page1");
let imgDiv=document.querySelector(".mama");
btn.onclick=function(){
    var newdiv=document.createElement("div");
    let areatext=document.createElement("textarea");
    let submit=document.createElement("button");
    let textsub=document.createTextNode("Submit")
    submit.appendChild(textsub);
    newdiv.className="lol"
    areatext.placeholder="Write Your Project here..."
    areatext.style.color="black";
    newdiv.appendChild(areatext);
    newdiv.appendChild(submit);
    imgDiv.appendChild(newdiv);
    submit.onclick=function(){
    newdiv.style.display="none";
}
}
let btntop=document.querySelector(".to-top");
window.onscroll=function(){
    if(scrollY>=500){
        btntop.style.display="block"
    } else{
        btntop.style.display="none"
    }
}
btntop.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
} 
