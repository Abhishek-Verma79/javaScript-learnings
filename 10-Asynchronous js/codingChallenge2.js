'use strict';

const imgContainer = document.querySelector('.images');

const wait = function(seconds){
    return new Promise(function(resolve){
        setTimeout(resolve, seconds*1000);
    });
};

const createImage = function(imgPath){
    return new Promise(function(resolve,reject){
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load',function(){
            imgContainer.append(img);
            resolve(img);
        });
        img.addEventListener('error',function(){
            reject(new Error('Image not found!'));
        });


    })
};

// let currImg;
// createImage('./img/img-1.jpg').then(img => {
//     currImg = img;
//     console.log('image one loaded!');
//     return wait(2);
// })
// .then(() => {
//     currImg.style.display = 'none';
//     return createImage('./img/img-2.jpg');
// })
// .then( img => {
//     currImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
// })
// .then(() => {
//     currImg.style.display = 'none';
// })
// .catch(err => console.log(err));

////With async await

const displayImgs = async function(){
    try
    {
        
    let img  = await createImage('./img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';
    img = await createImage('./img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';
    }
    catch(err){
        console.log("Something went wrong!",err);
    }
};

displayImgs();

