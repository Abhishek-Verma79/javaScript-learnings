'use strict';
/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

const imgContainer = document.querySelector('.images');

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

const loadAll = async function(arr){
    try
    {
        const resArr =  arr.map(async ele => await createImage(ele));
    console.log(resArr);

    const imgEle = await Promise.all(resArr);
    console.log(imgEle);
    imgEle.forEach(img => {
        img.classList.add('parallel');
    })

    }
    catch(err){
        console.log("Something went wrong!", err);
    }
}

loadAll(['./img/img-1.jpg', './img/img-2.jpg', './img/img-3.jpg']);