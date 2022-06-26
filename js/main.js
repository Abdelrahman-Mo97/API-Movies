"use strict";
// const apiKey = 'eba8b9a7199efdcb0ca1f96879b83c44&fbclid'
// const IMGFirstTPath = 'https://image.tmdb.org/t/p/w500/'
let url = `https://api.themoviedb.org/3/trending/movie/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid`

// const searchall = `https://api.themoviedb.org/3/search/movie?api_key=d62e1adb9803081c0be5a74ca826bdbd&query=""`



let userInputName = document.getElementById('userInputName');
let userInputEmail = document.getElementById('userInputEmail');
let userInputPhone = document.getElementById('userInputPhone');
let userInputAge = document.getElementById('userInputAge');
let userInputPassword = document.getElementById('userInputPassword');
let userInputRePassword = document.getElementById('userInputRePassword');

let allInputs = document.querySelectorAll('.form-group .theinputs');
console.log(allInputs);
for(let i=0 ; i<allInputs.length ; i++){
    allInputs[i].addEventListener('keyup' , isAllTrue);
}


// console.log(allInputs); 
// let submitBtn = document.querySelector('#submitBtn');
// console.log(submitBtn);
// console.log(userInputName);

// let validationNameMessage = document.getElementById('validationNameMessage');
// console.log(validationNameMessage);


let resultsArray;


// let getMoviesByWord = document.getElementById("getMoviesByWord")
// getMoviesByWord.addEventListener('keyup',function(){
//     getApi() 
// })


let search = document.getElementById("search")
search.addEventListener('keyup', function(){
    searchall(search.value)
})


async function getApi (url){
    let firstResult = await fetch(url);
    // console.log(firstResult);
    let finalResult = await firstResult.json();
     resultsArray = await finalResult.results;
    // console.log(resultsArray);
    dispalyMovies(resultsArray)
}
getApi(`https://api.themoviedb.org/3/trending/movie/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid`)



async function searchall(searchUser){
let API =`https://api.themoviedb.org/3/search/movie?api_key=d62e1adb9803081c0be5a74ca826bdbd&query=${searchUser}`
let firstResult = await fetch(API);
let finalResult = await firstResult.json();
resultsArray = await finalResult.results;
dispalyMovies(resultsArray)
}




function dispalyMovies(sendArrays){
    // console.log(resultsArray);
    let cartona ='';
    for(let i=0 ; i<sendArrays.length ; i++){
        cartona += ` <div class="col-md-4">
        <div class="box position-relative overflow-hidden">
            <img class="w-100 rounded" src = "https://image.tmdb.org/t/p/w500${sendArrays[i].poster_path}">
            <div class="layer rounded text-center d-flex align-items-center position-absolute w-100 h-100  start-0">
                <div class="img-caption text-dark">
                    <h2 class ="fw-bold">${sendArrays[i].title}</h2>
                    <p>"${sendArrays[i].overview}"</p>
                    <p>rate: ${sendArrays[i].vote_average}</p>
                    <p>${sendArrays[i].release_date}</p>
                </div>
            </div>
       </div>
    </div>`
    }
document.getElementById('apiBox').innerHTML = cartona;
}




userInputName.addEventListener('keyup' , userNameValidation);
userInputEmail.addEventListener('keyup' , userEmailValidation);
userInputPhone.addEventListener('keyup' , userPhoneValidation);
userInputAge.addEventListener('keyup' , userAgeValidation);
userInputPassword.addEventListener('keyup' , userPasswordValidation);
userInputRePassword.addEventListener('keyup' , userRePasswordValidation)

function userNameValidation(){
    let regex = /^[A-Za-z]{1,30}\s?[A-Za-z]{1,30}\s?[A-Za-z]{1,30}$/
    if(regex.test(userInputName.value)){
        document.getElementById('validationNameMessage').classList.add('d-none');
        return true;
    }else{
        document.getElementById('validationNameMessage').classList.remove('d-none');
        return false;
    }
}


function userEmailValidation(){
    let regex = /^([\w_\-\.]+)@(gmail|yahoo|outlook)\.([a-zA-Z]{2,5})$/
    if(regex.test(userInputEmail.value)){
        document.getElementById('validationEmailMessage').classList.add('d-none');
        return true;
    }else{
        document.getElementById('validationEmailMessage').classList.remove('d-none');
        return false; 
    }
}


function userPhoneValidation(){
    let regex =/^[0-9]{9,12}$/
    if(regex.test(userInputPhone.value)){
        document.getElementById('validationPhoneMessage').classList.add('d-none');
        return true;
    }else{
        document.getElementById('validationPhoneMessage').classList.remove('d-none');
        return false;
    }
}


function userAgeValidation(){
    let regex =/^[1-7][0-9]|(80)$/ 
    if(regex.test(userInputAge.value)){
        document.getElementById('validationAgeMessage').classList.add('d-none');
        return true;
    }else{
        document.getElementById('validationAgeMessage').classList.remove('d-none');
        return false;
    }
}


function userPasswordValidation(){
    let regex =/([a-z]{1,5}[0-9]{1,5})|([0-9]{1,5}[a-z]{1,5})/
    if(regex.test(userInputPassword.value)){
        document.getElementById('validationpasswordMessage').classList.add('d-none');
        return true;
    }else{
        document.getElementById('validationpasswordMessage').classList.remove('d-none');
        return false;
    }
}



function userRePasswordValidation(){
    if(userInputPassword.value == userInputRePassword.value){
        document.getElementById('validationRepasswordMessage').classList.add('d-none');
        return true;
    }else if(userInputPassword.value != userInputRePassword.value){
        document.getElementById('validationRepasswordMessage').classList.remove('d-none');
        return false;
    } if(userInputRePassword.value==''){
        document.getElementById('validationRepasswordMessage').classList.add('d-none');
        return false;
    }
}



// for(let i=0 ; i<allInputs.length ; i++){
//     allInputs[i].addEventListener('keyup' , isAllTrue);
//     console.log(allInputs);
// }

function isAllTrue(){
    if(userNameValidation()===true && userEmailValidation()===true && userPhoneValidation()===true
    && userAgeValidation()===true && userPasswordValidation()===true && userRePasswordValidation()===true){
        document.getElementById('submitBtn').removeAttribute('disabled'); 
    }else{
        document.getElementById('validationNameMessage').classList.add('d-none');
        document.getElementById('validationEmailMessage').classList.add('d-none');
        document.getElementById('validationPhoneMessage').classList.add('d-none');
        document.getElementById('validationAgeMessage').classList.add('d-none');
        document.getElementById('validationpasswordMessage').classList.add('d-none');
        document.getElementById('validationRepasswordMessage').classList.add('d-none');
        document.getElementById('submitBtn').setAttribute('disabled',''); 
    }
}











// function allValidations(){
//     if(userNameValidation()===true && userEmailValidation()===true && userPhoneValidation()===true
//     && userAgeValidation()===true && userPasswordValidation()===true && userRePasswordValidation()===true){
// document.getElementById('submitBtn').classList.remove('disabled');
// return true;
//     }else{
//         return false;
//     }
// }

// if(allValidations()==true){
//     return true;
// }

// if(userInputPassword.value != userInputRePassword.value){
//     document.getElementById('validationRepasswordMessage').classList.remove('d-none');
//     return false
// }
let getMoviesByWord = document.getElementById("getMoviesByWord")
getMoviesByWord.addEventListener('keyup', function(){
    searchProductsName(getMoviesByWord.value)
})

function searchProductsName(searchParameter){
    let searchSamePage = [];
    for (let i = 0; i < resultsArray.length; i++) {
            if (resultsArray[i].title.toLowerCase().includes(searchParameter.toLowerCase())) {  
                // console.log(productsList[i].name);
                // productsList[i].modifiedName = productsList[i].name.replace(searchParameter, `<span class ="text-danger fw-bolder">${searchParameter}</span>`)
                searchSamePage.push(resultsArray[i]);
            }
            
        }
        dispalyMovies(searchSamePage); 
}
