
let btnnombre = document.querySelector("#btnnombre");
let inputform = document.querySelector("#inputform")
let btn = document.querySelector('#btngenerate');
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");


const minuscule = "azertyuiopqsdfghjklmwxcvbn";
const majuscule = "AZERTYUIOPQSDFGHJKLMWXCVBN";
const number = "123456789"
const special = "&(-_ç)=-/:@$^<>";
let motdepass 




function generatepassword() {
    let characterefinal =""
    if (btn1.checked==true) {
        characterefinal=characterefinal+majuscule
        
    }
    if (btn2.checked==true){
        characterefinal=characterefinal+minuscule
        
    }
    if (btn3.checked==true){
        characterefinal=characterefinal+number
        
    }
    if (btn4.checked==true){
        characterefinal=characterefinal+special
        
    }
    motdepass ="";
    for (let index = 0; index < btnnombre.value; index++) {
        let indexcaract = Math.floor(Math.random()* characterefinal.length);
        motdepass += characterefinal[indexcaract];
    }
    
    inputform.value = motdepass
    console.log(motdepass);
}
// console.log(inputform.value);

// inputform.value.execCommand()





btn.addEventListener('click', generatepassword)