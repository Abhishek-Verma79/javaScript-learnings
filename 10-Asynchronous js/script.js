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


/*
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
*/


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


    /*
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
    */
    

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

/*
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
            // console.error(`${err} 💥💥💥`);
            renderErr(`Something went wrong 💥💥 ${err.message}. Try again!`)
        })
        .finally(() => {
            countriesContainer.style.opacity = '1';
        })
    };

    btn.addEventListener('click',function(){

        getCountryData('Bharat');
    });
*/

    /*
///////////////EVENT LOOP IN PRACTICE
console.log('Test start');
setTimeout(() => console.log('0 sec timer'),0);
Promise.resolve('Resolve promise 1')
.then(res => console.log(res))

Promise.resolve('Resolve promise 2')
.then(res =>{
    for(let i = 0; i < 1000000000; i++){}
    console.log(res)
})
console.log('Test end');


/////////Building  NEW PROMISE


const lotteryPromise = new Promise(function(resolve,reject){
    
    console.log('Lottery draw is happening! 🔮');
    setTimeout(function(){
        if(Math.random() >= .5){
            resolve('you WIN 💰');
        }else{
            reject(new Error('you lost your money 💩'));
        }
    },2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err) );


// Promisifying setTimeout
const wait = function(seconds){
    return new Promise(function(resolve){
        setTimeout(resolve, seconds*1000);
    });
};

// escaping callback hell
wait(1).then(() =>{
     console.log('1 second passed!');
     return wait(1);
})
.then(() => {
    console.log('2 seconds passed!');
    return wait(1);
})
.then(() => {
    console.log('3 seconds passed!');
    return wait(1);
})
.then(() => console.log('4 seconds passed!'))




/////////PROMISIFYING GEOLOCATION API
// navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     err => console.log(err)
// )
// console.log('geolocation api started');


const getPostion = function(){
    return new Promise(function(resolve,reject){
        // navigator.geolocation.getCurrentPosition(
        //     position => resolve(position),
        //     err => reject(err)
        // )
        navigator.geolocation.getCurrentPosition(resolve,reject);
    });
};

getPostion().then(res => console.log(res));



/////////ASYNC AWAIT
// just syntactic sugar over .then method
const whereAmI = async function(country){
    // fetch(`https://restcountries.com/v3.1/name/${country}`)
    // .then(res => console.log(res));

    try{const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    const [data] = await res.json();
    console.log(data);}
    catch(err){
        console.error(err);
    }

}
whereAmI('Bharat');
console.log('First');

//////////TRY AND CATCH
try{
    let x = 1;
    const y = 2;
    x = 3;
}
catch(err){
    alert(err.message);
}
*/


/////////PARALLEL PROMISES (MANY AT SAME TIME)
/////////////////////////////////////////////
const getJSON = function(url,errMsg = "Something went wrong!"){
    return fetch(url).then(response => {
        if(!response.ok) throw new Error(`${errMsg} (${response.status})`);

        return response.json();
    });
};
const get3Countries = async function(c1,c2,c3){
    try{
        const data = await Promise.all(
            [
                getJSON(`https://restcountries.com/v3.1/name/${c1}`),
                getJSON(`https://restcountries.com/v3.1/name/${c2}`),
                getJSON(`https://restcountries.com/v3.1/name/${c3}`)
            ]
        );
        // console.log(data.map(d => d[0].capital[0]));

    }
    catch(err){
        console.log(err);
    }
};

get3Countries('Bharat','canada','tanzania');


////////////Promise.race
(async function(){
    const res = await Promise.race([
        getJSON(`https://restcountries.com/v3.1/name/Bharat`),
        getJSON(`https://restcountries.com/v3.1/name/Italy`),
        getJSON(`https://restcountries.com/v3.1/name/Egypt`)
    ]);
    console.log(res[0]);
})();

const timeout =  function(s){
    return new Promise((_ ,reject) => {
        setTimeout(() => {
            reject(new Error("Request took too long!"));
        }, s * 1000);
    });
};

Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/Bharat`),
    timeout(.1),
]).then(res => console.log(res[0]))
.catch(error => console.log(error));


///////Promise.allSettled
Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject('Failed'),
    Promise.resolve('Success Again'),
])
.then(res => console.log(res));

//Promise.allSettled vs Promise.all
Promise.all([
    Promise.resolve('Success'),
    Promise.reject('Failed Bruh'),
    Promise.resolve('Success Again'),
])
.then(res => console.log(res))
.catch(err => console.log(err));


///Promise.any()
Promise.any([
    Promise.reject('Failed Bruh'),
    Promise.reject('Success'),
    Promise.resolve('Success Again'),
]).then(res => console.log(res));