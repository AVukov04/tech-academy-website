
var btn = document.getElementById("button");

var searchButton = document.getElementById("searchButton");


let nameField = document.getElementById("name");
let emailField = document.getElementById("email");
let phoneField = document.getElementById("phone");
let submitButton = document.getElementById("submitButton");


let colorToggle = document.getElementById("colorToggle");
let information = document.getElementById("information");


window.addEventListener("scroll", function(){
    if (window.scrollY > 300){
        btn.classList.add("show");
    }else{
        btn.classList.remove("show");
    }
     
}); 


btn.addEventListener("click",function(e){
    e.preventDefault();
    window.scrollTo({top: 0, behavior:"smooth"});
});


searchButton.addEventListener("click",function(e){
    e.preventDefault();
    
    var searchText = prompt ("Въведи текст за търсене:");

    
    if(searchText){
        findTextOnPage(searchText);
    }
});


function findTextOnPage(text) {
    if (window.find && text) {
        window.find(text);
    } else {
        alert("Търсенето не е възможно в този браузър или текстът е невалиден.");
    }
};



submitButton.addEventListener("click",function() {
    
    let name = nameField.value;
    let email = emailField.value;
    let phone = phoneField.value;

    
    console.log("Име: " + name);
    console.log("Имейл: " + email);
    console.log("Телефон: " + phone);
    nameField.value = "";
    emailField.value = "";
    phoneField.value = "";
    
});


function changeColor() {
    if (colorToggle.checked) {
        if(window.getComputedStyle(information).backgroundColor == 'rgb(2, 255, 10)'){//оранжево
        information.style.backgroundColor = "rgb(175,71,210)"; // лилаво    
    }
    if(information.style.backgroundColor == 'rgb(175,71,210)'){
       information.style.backgroundColor = 'rgb(145,221,207)'; // зелено
   }
    if(information.style.backgroundColor == 'rgb(145,221,207)'){
       information.style.backgroundColor = 'rgb(231,41,41)'; // червено
   }
   else{
       information.style.backgroundColor = 'rgb(213, 2, 255)';
   }
}   
}