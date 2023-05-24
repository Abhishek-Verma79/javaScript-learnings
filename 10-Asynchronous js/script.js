'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
/*
const getContryData = function(country){
const request = new XMLHttpRequest();
request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
request.send();
// console.log(request.responseText);
request.addEventListener('load',function(){
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    const html = `
    <article class="country">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${+(data.population / 1000000).toFixed(1)}M People</p>
        <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
        <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
        </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend',html);
    countriesContainer.style.opacity = '1'
})
};

getContryData('india');
getContryData('usa');
getContryData('sweden');
getContryData('russia');
*/



// Callback hell
const renderCountry = function(data, className=""){
    const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flags.png}" />
            <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${+(data.population / 1000000).toFixed(1)}M People</p>
            <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
            <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
            </div>
        </article>
        `;
        countriesContainer.insertAdjacentHTML('beforeend',html);
        // countriesContainer.style.opacity = '1'
}


/*
const getContryAndNeighbour = function(country){
    //AJAX call country 1
    const request = new XMLHttpRequest();
    request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
    request.send();
    // console.log(request.responseText);
    request.addEventListener('load',function(){
        const [data] = JSON.parse(this.responseText);
        console.log(data);
        //render country
        renderCountry(data);

        // Get neighbour country
        const [neighbour] = data.borders;
        if(!neighbour) return;

        //AJAX call country 2
        const request2 = new XMLHttpRequest();
        request2.open('GET',`https://restcountries.com/v3.1/alpha/${neighbour}`);
        request2.send();

        request2.addEventListener('load',function(){
           const [data2] = JSON.parse(this.responseText);
           console.log(data2);
           renderCountry(data2,'neighbour');
        })

    })
    };

    getContryAndNeighbour('usa');
    */


    // Promises 
    
    // const request = new XMLHttpRequest();
    // request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
    // request.send();

    // const request = fetch('https://restcountries.com/v3.1/name/india');
    // console.log(request);


    // cosuming promise
    // const getCountryData = function(country){
    //     fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(response){
    //         console.log(response);
    //         return response.json();
    //     }).then(function(data){
    //         console.log(data);
    //         renderCountry(data[0]);
    //     })
    // };

    const renderErr = function(msg){
        countriesContainer.insertAdjacentText('beforeend',msg);
        // countriesContainer.style.opacity = 1;
    }

    const getJSON = function(url,errMsg = "Something went wrong!"){
        return fetch(url).then(response => {
            if(!response.ok) throw new Error(`${errMsg} (${response.status})`);

            return response.json();
        });
    };
    

    // const getCountryData = function(country){
    //     //Country 1
    //     fetch(`https://restcountries.com/v3.1/name/${country}`)
    //     .then(response => {
    //         if(!response.ok){
    //             throw new Error(`Country not found (${response.status})`)
    //         }
    //         return response.json()/*,*/ 
    //     //  err => alert(err)
    //     })
    //     .then(data =>{ 
    //         renderCountry(data[0]);
    //         const neighbour = data[0].borders[0];
    //         if(!neighbour) return;

    //         //Country 2
    //         return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    //     })
    //     .then(response => response.json())
    //     .then(data => renderCountry(data[0],'neighbour'))
    //     .catch(err => {
    //         console.error(`${err} 💥💥💥`);
    //         renderErr(`Something went wrong 💥💥 ${err.message}. Try again!`)
    //     })
    //     .finally(() => {
    //         countriesContainer.style.opacity = '1';
    //     })
    // };


    const getCountryData = function(country){
        //Country 1
        getJSON(`https://restcountries.com/v3.1/name/${country}`,'Country not found')        

        .then(data =>{ 
            renderCountry(data[0]);
            const neighbour = data[0].borders[0];
            // const neighbour = 'dfjadfja';
            if(!neighbour) throw new Error('No neighbour found!');

            //Country 2
            return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`,'Country not found');
        })
        .then(data => renderCountry(data[0],'neighbour'))
        .catch(err => {
            console.error(`${err} 💥💥💥`);
            renderErr(`Something went wrong 💥💥 ${err.message}. Try again!`)
        })
        .finally(() => {
            countriesContainer.style.opacity = '1';
        })
    };

    btn.addEventListener('click',function(){

        getCountryData('Bharat');
    });



