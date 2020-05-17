"use strict";



export function ListCaseCommit() {

     let form = document.querySelector('.pop-ups');
     let overlay = document.querySelector('.overlay');
     let btnCommit = document.querySelectorAll('.btn__commit');

     for (let i = 0; i < btnCommit.length; i++) {
          btnCommit[i].onclick = function () {
               form.style.display = "block";
               overlay.style.display = "block";
          }
     }
}

let form = document.querySelector('.pop-ups');
let overlay = document.querySelector('.overlay');
let closeForm = document.querySelector('.pop-ups__close');

closeForm.addEventListener('click', function () {
     form.style.display = "none";
     overlay.style.display = "none";
});
