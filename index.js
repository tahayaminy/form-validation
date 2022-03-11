const numberValue=document.getElementById('numbervalue');
const p=document.getElementsByClassName('p');
const passif=document.getElementsByClassName('passcheck');
const Lanime=document.getElementsByClassName('Lanime');
function down(){
    if(eval(numberValue.value) - 1 >= 1){
        numberValue.value--;
        numberValue.classList.remove('outOfRange');
    }else{
        numberValue.classList.add('outOfRange');
    }
}
function up(){
    if(eval(numberValue.value) + 1 <= 5){
        numberValue.value++;
        numberValue.classList.remove('outOfRange');
    }else{
        numberValue.classList.add('outOfRange');
    }
}
function label(el,child){
    if(el.value.length > 0){
        Lanime[child].classList.add('A0');
        Lanime[child].classList.remove('A1');
    }else{
        Lanime[child].classList.remove('A0');
        Lanime[child].classList.add('A1');
    }
}
function namecheck(el,child){
    if(!el.checkValidity()){
        p[child].style.display='block';
        el.parentElement.style=`margin-top:0px;margin-bottom:10px;`;
    }else{
        p[child].style.display='none';
        el.parentElement.style=`margin-top:40px;margin-bottom:40px;`;
    }
    label(el,child);
}
function searchbox(el,child){
    label(el,child);
}
function emailcheck(el,child){
    if(!el.checkValidity() && el.value.search(/\./g)== -1){
        p[child].style.display='block';
        el.parentElement.style=`margin-top:0px;margin-bottom:10px;`;
    }else{
        p[child].style.display='none';
        el.parentElement.style=`margin-top:40px;margin-bottom:40px;`;
    }
    label(el,child);
    
}
function passcheck(el,child){
    let number=/[0-9]/g;
    let low=/[a-z]/g;
    let up=/[A-Z]/g;
    let symbol=/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    let WS=/\s/g;

    if(el.value.length >=6){
        passif[0].style.display="none";
    }else{
        passif[0].style.display="block";
    }

    if(el.value.match(number)){
        passif[1].style.display="none";
    }else{
        passif[1].style.display="block";
    }

    if(el.value.match(low)){
        passif[3].style.display="none";
    }else{
        passif[3].style.display="block";
    }

    if(el.value.match(up)){
        passif[2].style.display="none";
    }else{
        passif[2].style.display="block";
    }

    if(el.value.match(symbol) || el.value.match(WS)){
        passif[4].style.display="none";
    }else{
        passif[4].style.display="block";
    }
    label(el,child);
}
function showPass(){
    var password=document.getElementById('password');
    var eye=document.getElementById('eye');
    if(password.type==="password"){
        password.type="text";        
        eye.classList.remove('fa-eye-slash');
        eye.classList.add('fa-eye');
    }else{
        password.type="password";        
        eye.classList.add('fa-eye-slash');
        eye.classList.remove('fa-eye');
    }
}

var selectId=0;
function select(el,id,group){
    var options = group? el.parentElement.parentElement:el.parentElement;
    var optionList=options.querySelectorAll('span');
    document.querySelector('.selectedValue').innerText=optionList[id].innerText;
    optionList[selectId].classList.remove('selected');
    optionList[id].classList.add('selected');
    selectId=id;
    options.parentElement.blur();
}