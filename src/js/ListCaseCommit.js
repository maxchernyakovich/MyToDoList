"use strict";


export function ListCaseCommit() {

     let btnCommit = document.querySelectorAll('.btn__commit');
     let form = document.querySelector('.pop-ups');
     let formFlex = document.querySelector('.pop-ups__flex');
     let overlay = document.querySelector('.overlay');
     let close = document.querySelector('.pop-ups__close');
     /* let inputCommit = document.createElement('input');
     inputCommit.classList.add('pop-ups__flex--input');
     formFlex.appendChild(inputCommit); */
     


     for (let i = 0; i < btnCommit.length; i++) {
          btnCommit[i].onclick = function () {
               form.style.display = "block";
               overlay.style.display = "block";
          }
     }

     close.addEventListener('click', function () {
          form.style.display = "none";
          overlay.style.display = "none";
     });
}