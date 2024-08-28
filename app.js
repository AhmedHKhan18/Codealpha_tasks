let carddiv = document.getElementById("cardsdiv")

let img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6UZ-mGCnOnhmAHjOZ9o4XO4T8jMLtTsCBA&s"
let img2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ_G9U9095poYEIvtg8fnA2Ef3dcjLEebptQ&s"
let img3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZrUh-CGulewZ7e6CI_huRw43H9aXum69RGg&s"
let img4 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm8PErKVWA0tzhjo2HdOkFSK0CgNjP3mc1hA&s"
let img5 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSElyEsynskeqTOxbyD1lQrH0awCCFfUaoo4Q&s"
let img6 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCBBs0Km-2QTub4DgPwF1W5Aqg40FDm0ZLow&s"

let heading1 = "Nature's Beauty"
let heading2 = "Earth's Wonders"
let heading3 = "Serene Landscapes"
let heading4 = "Wild and Free"
let heading5 = "Nature's Symphony"
let heading6 = "Mountain Majesty"

const headingarr = [heading1, heading2, heading3, heading4, heading5, heading6]

const imgarr = [img1, img2, img3, img4, img5, img6]

function setImage(img) {
    localStorage.setItem("img", img.src, "clickedImageSrc", img.src)
    console.log(img.src)
}
function setImagebutton(buttonElement) {
    window.location.href = "./imagedetails.html"
    const imageElement = buttonElement.parentNode.parentNode.childNodes[1].childNodes[1].querySelector("img");
    localStorage.setItem('clickedImageSrc', imageElement.src);
    // // console.log(buttonElement.parentNode.parentNode.childNodes[1].childNodes[1].querySelector("img"))
}
for (let i = 0; i < imgarr.length && headingarr.length; i++) {
    carddiv.innerHTML += `
<div class="w-[30vw] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="./imagedetails.html">
        <img class="rounded-t-lg w-full h-[30vh]" src=${imgarr[i]} onclick="setImage(this)" alt=""/>
    </a>
    <div class="p-5">
        <a href="./imagedetails.html">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${headingarr[i]}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onclick="setImagebutton(this)">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </button>
    </div>
</div>`
}    



let seccarddiv = document.getElementById("seccardsdiv")

let img7 = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSA_mPC0VL2T-F_PZVWbdxK4ooiNeDvbN2yepp28YJzo6zW-W6oC0UXV_fU5-Hl"
let img8 = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS_rqlg1z2vrHM9F1FrTVNEE-l61G3M5K-fpBnNpjEYb1dvXdvoF4tEGkpTsbEw"
let img9 = "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT6xgin4rC_L0o6kumE_BiegAZGRfGwOIizmFE-FLdPNeRhCN3hxmFUSw_IXFPh"
let img10 = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSWzNwehynw3wc_dbaWe73U7fr8FwfyXaiRwv1vgvTTpRxEB8dQojVn1gi9hrVT"
let img11 = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTMdyN7NmYAmRsslNmet2osyUFQA7rHcvakQq0kQyScVYxtVb_IeUc_ikwXkMY3"
let img12 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2jOmdq_-dbxaXa3oPJV8vZjVKsBLwG131zA&s"

let heading7 = "Ocean Adventures"
let heading8 = "Forest Whispers"
let heading9 = "Desert Dreams"
let heading10 = "Wildlife Encounters"
let heading11 = "Floral Fantasies"
let heading12 = "Celestial Sights"

const secheadingarr = [heading7, heading8, heading9, heading10, heading11, heading12]

const secimgarr = [img7, img8, img9, img10, img11, img12]


for (let i = 0; i < secimgarr.length && secheadingarr.length; i++) {
   seccarddiv.innerHTML += `
<div class="w-[30vw] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="./imagedetails.html">
        <img class="rounded-t-lg w-full h-[30vh]" src=${secimgarr[i]} onclick="setImage(this)" alt="" />
    </a>
    <div class="p-5">
        <a href="./imagedetails.html">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${secheadingarr[i]}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="./imagedetails.html" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>`
}    

