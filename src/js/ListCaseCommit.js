"use strict";


export function ListCaseCommit() {

     let btnCommit = document.querySelectorAll('.btn__commit');
     let form = document.querySelector('.pop-ups');
     let formFlex = document.querySelector('.pop-ups__flex');
     let overlay = document.querySelector('.overlay');
     let closeForm = document.querySelector('.pop-ups__close');
     let addForm = document.querySelector('.pop-ups__flex--btn');
     
     for (let i = 0; i < btnCommit.length; i++) {
          btnCommit[i].onclick = function () {
               form.style.display = "block";
               overlay.style.display = "block";
          }
     }

     closeForm.addEventListener('click', function () {
          form.style.display = "none";
          overlay.style.display = "none";
     });

     addForm.addEventListener('click', function () {
          form.style.display = "none";
          overlay.style.display = "none";
     });
     
}