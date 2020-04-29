"use strict";

// changes color list in importance
export function changesColorList(elem) {
     let btnRed = document.createElement('button'),
         btnYellow = document.createElement('button'),
         btnGreen = document.createElement('button');

     btnRed.classList.add('btn__red');
     btnYellow.classList.add('btn__yellow');
     btnGreen.classList.add('btn__green');

     elem.prepend(btnGreen);
     elem.prepend(btnYellow);
     elem.prepend(btnRed);

     let btnColorRed = document.querySelectorAll('.btn__red');
     let btnColorYellow = document.querySelectorAll('.btn__yellow');
     let btnColorGreen = document.querySelectorAll('.btn__green');

     // add changes borderColor in list item 
     for (let i = 0; i < btnColorRed.length; i++) {
          btnColorRed[i].onclick = function () {
               this.parentNode.parentNode.style.borderColor = this.parentNode.parentNode.style.borderColor === 'red' ? 'white' : 'red';
          }
     }

     for (let i = 0; i < btnColorYellow.length; i++) {
          btnColorYellow[i].onclick = function () {
               this.parentNode.parentNode.style.borderColor = this.parentNode.parentNode.style.borderColor === 'yellow' ? 'white' : 'yellow';
          }
     }

     for (let i = 0; i < btnColorGreen.length; i++) {
          btnColorGreen[i].onclick = function () {
               this.parentNode.parentNode.style.borderColor = this.parentNode.parentNode.style.borderColor === 'green' ? 'white' : 'green';
          }
     }
};