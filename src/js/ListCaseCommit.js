"use strict";


export function ListCaseCommit() {

     let btnCommit = document.querySelectorAll('.btn__commit');
     let form = document.querySelector('.pop-ups');
     let overlay = document.querySelector('.overlay');

     let close = document.querySelector('.pop-ups__close');
     form.append(close);


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