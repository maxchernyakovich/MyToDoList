"use strict";

// add event click in btnDone static item
export function ListDoneItem() {

     // delete list item from listCase
     let listBtnDone = document.querySelectorAll('.btn__done');
     for (let i = 0; i < listBtnDone.length; i++) {
          listBtnDone[i].onclick = function () {
               let div = this.parentNode.parentNode;
               div.style.display = 'none';
          }
     }

     // clone list item and add in ListDone
     for (let i = 0; i < listBtnDone.length; i++) {
          listBtnDone[i].onclick = function () {
               let div = this.parentNode.parentNode;
               div.cloneNode(true);
               document.querySelector('.list__done').appendChild(div);
               div.style.display = 'flex';
          }
          
     }
}