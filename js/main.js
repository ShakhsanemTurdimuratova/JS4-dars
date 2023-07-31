
/* DOM in JS*/


/*let  headTag = document.head;*/
/*let bodyTag = document.body;*/
/*let havola = document.documentURI;*/
/*let formalar = document.forms;*/
/*let rasmlar = document.images;*/
/*console.log(rasmlar)*/

/*Events in JS; onclick,ondblclick,onchange,onfocus.onblur,oninput*/

/*
function meniBirMartaBos(){
    alert("Siz battonni bir marta bosdingiz!");
}*/
/*function meniIkkiMartaBos(){
    alert("Siz battonni ikkimarta bosdingiz!");
}*/
/*function tanlash(event){
    alert("Siz  " + event.target.value + "ni tanladingiz!");
}*/
/*function inputgaBosish(){
    console.log("Inputga bosildi!");
}*/
/*function inputdanChiqish(){
    console.log("Inputdan chiqildi!")
}*/
/*function yozish(event){
    console.log(event.target.value)
}*/
/*document.querySelector(".matnTegi").addEventListener("copy",function (event){
    console.log("Diqaat! Diqqat! Sizdan" +  event.target.value +" noml;i maxfiy hujjatlar ko'chirilyapti!")
});*/
function harakatlanish(e){
    console.log(e.clientX,e.clientY)
}
function kirish(){
    console.log("Hududga kirildi!")
}
function chiqish(){
    console.log("Hududdan chiqildi!")
}
