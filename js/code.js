function AlertSoon(){
    alert("Im sorry. Its will be able soon");
}
function AlertJoke(){
    alert("hahahah. Its joke!");
}

function GoToHome(){
    window.location.href = '/pages/index.html'
}

var i11 = document.getElementById("i11");
var i12 = document.getElementById("i12");
var i21 = document.getElementById("i21");
var i22 = document.getElementById("i22");
var i31 = document.getElementById("i31");
var i32 = document.getElementById("i32");
var i41 = document.getElementById("i41");
var i42 = document.getElementById("i42");

var table11 = document.getElementById("t11");
var table12 = document.getElementById("t12");
var table21 = document.getElementById("t21");
var table22 = document.getElementById("t22");
var table31 = document.getElementById("t31");
var table32 = document.getElementById("t32");
var table41 = document.getElementById("t41");
var table42 = document.getElementById("t42");

function switchrad(){
    if(i11.checked == true){
        table11.style.display = "table";
        table12.style.display = "none";
        table21.style.display = "none";
        table22.style.display = "none";
        table31.style.display = "none";
        table32.style.display = "none";
        table41.style.display = "none";
        table42.style.display = "none";
    }
    else if(i12.checked == true){
        table11.style.display = "none";
        table12.style.display = "table";
        table21.style.display = "none";
        table22.style.display = "none";
        table31.style.display = "none";
        table32.style.display = "none";
        table41.style.display = "none";
        table42.style.display = "none";
    }
    else if(i21.checked == true){
        table11.style.display = "none";
        table12.style.display = "none";
        table21.style.display = "table";
        table22.style.display = "none";
        table31.style.display = "none";
        table32.style.display = "none";
        table41.style.display = "none";
        table42.style.display = "none";
    }
    else if(i22.checked == true){
        table11.style.display = "none";
        table12.style.display = "none";
        table21.style.display = "none";
        table22.style.display = "table";
        table31.style.display = "none";
        table32.style.display = "none";
        table41.style.display = "none";
        table42.style.display = "none";
    }
    else if(i31.checked == true){
        table11.style.display = "none";
        table12.style.display = "none";
        table21.style.display = "none";
        table22.style.display = "none";
        table31.style.display = "table";
        table32.style.display = "none";
        table41.style.display = "none";
        table42.style.display = "none";
    }
    else if(i32.checked == true){
        table11.style.display = "none";
        table12.style.display = "none";
        table21.style.display = "none";
        table22.style.display = "none";
        table31.style.display = "none";
        table32.style.display = "table";
        table41.style.display = "none";
        table42.style.display = "none";
    }
    else if(i41.checked == true){
        table11.style.display = "none";
        table12.style.display = "none";
        table21.style.display = "none";
        table22.style.display = "none";
        table31.style.display = "none";
        table32.style.display = "none";
        table41.style.display = "table";
        table42.style.display = "none";
    }
    else if(i42.checked == true){
        table11.style.display = "none";
        table12.style.display = "none";
        table21.style.display = "none";
        table22.style.display = "none";
        table31.style.display = "none";
        table32.style.display = "none";
        table41.style.display = "none";
        table42.style.display = "table";
    }
    else{
        console.log("END")
    }
}

var radioButtons = document.querySelectorAll('input[type="radio"]');

radioButtons.forEach(function(radioButton) {
    radioButton.addEventListener('change', switchrad);
});
