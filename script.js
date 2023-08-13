'use strict';
//Working with classes...
//querySelector is have an Limitations and ot will selects the only first one 

//querySelectorAll is have an no Limitations and ot will selects all classes which we give

let show_model = document.querySelectorAll('.show-modal');

console.log(show_model);

let modal = document.querySelector(".modal");


let overLay = document.querySelector('.overlay');

let closeBtn = document.querySelector('.close-modal');

// let model_window=  document.querySelector('.hidden');

//Here we do Refactoring
const openModel = 
    function(){
        console.log('Button Clicked');
        // Dont Use the '.' here becacuse we are removing the class right..
        //Here we removing Class 
       modal.classList.remove('hidden');
       overLay.classList.remove('hidden');
    }


for(let i = 0; i < show_model.length; i++){
    show_model[i].addEventListener('click',openModel );

}

//Here we do Refactoring
const hideContent = function(){
    //Here we Add Class 
   modal.classList.add('hidden');
   overLay.classList.add('hidden');

}


//Here We hideContent is a function but we do not give any {'()'} over there because with {'()'} function will excuted fastly...... When we write without {'()'} it will run after condition is satisfied.... 

closeBtn.addEventListener('click', hideContent)

overLay.addEventListener('click', hideContent);







