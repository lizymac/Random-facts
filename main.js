let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');


//event listener
let numberInput = document.querySelector('#numberInput');
numberInput.addEventListener('input', getYearFactFetch);

// function getFactAjax(){
//     let year = yearInput.value;
//     // console.log(year);

//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', 'http://numbersapi.com/'+year + '/year');

//     xhr.onload = function(){
//         if(this.status==200 && year!= ''){
//             fact.style.display = 'block';
//             factText.innerText = this.responseText;
//         }
//     }

//     xhr.send();
// }

function selectType(){
    if(document.getElementById('yearRadio').checked){
        getYearFactFetch();
    }else if(document.getElementById('numberRadio').checked){
        getNumberFactFetch();
    }
}

function getYearFactFetch(){
    let number = numberInput.value;
    fetch('http://numbersapi.com/'+number+ '/year')
    .then(response => response.text())
    .then(data => {
        if(number!= ''){
                fact.style.display = 'block';
                factText.innerText = data;
        }
    })
    .catch(err => console.log(err));
}

numberInput.addEventListener('input',getNumberFactFetch);

function getNumberFactFetch(){
    let number = numberInput.value;
    fetch('http://numbersapi.com/'+number)
    .then(response =>response.text())
    .then(data => {
        if(number != ''){
            fact.style.display = 'block';
            factText.innerText = data;
        }
    })
    .catch(err => console.log(err));
}