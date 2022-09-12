const service = document.querySelector(".a-services")
const div = document.querySelector(".div-services");
// service.addEventListener('mouseover',function(){
//     div.style.display = "block";
//     div.classList.add("pos");
//     document.querySelector(".fa.fa-caret-down").className = "fa fa-caret-up";
// })
service.addEventListener('focusin',function(){
    div.style.display = "block";
    div.classList.add("pos");
    document.querySelector(".fa.fa-caret-down").className = "fa fa-caret-up";
})
service.addEventListener('focusout',function(){
    div.style.display = "none";
    document.querySelector(".fa.fa-caret-up").className = "fa fa-caret-down";
})
// service.addEventListener('click',function(){
//     div.style.display = "none";
//     document.querySelector(".fa.fa-caret-up").className = "fa fa-caret-down";
// })
// service.addEventListener('dblclick',function(){
//     div.style.display = "none";
//     document.querySelector(".fa.fa-caret-up").className = "fa fa-caret-down";
// })

const login = document.querySelector(".a-login");
login.addEventListener('click', function(){
    document.querySelector(".div-form").style.display = "block";
    // document.querySelector(".div-form").classList.add("div-form-pos");
    // document.querySelector("body").style.opacity = "0.5";
    // document.querySelector(".div-form").style.opacity = "1";
    // document.querySelector("form").style.opacity = "2";
})
document.querySelector(".cross").addEventListener('click',function(){
    document.querySelector(".div-form").style.display = "none";
})