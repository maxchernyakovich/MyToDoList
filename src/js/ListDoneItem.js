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
               //this.replaceWith(listBtnRenew);
               this.previousSibling.remove();
               this.remove();
               div.style.display = 'flex';

               // delete btnColor in listDone
               div.firstChild.firstChild.remove();
               div.firstChild.firstChild.remove();
               div.firstChild.firstChild.remove();

               // delete borderColor in list item
               if (div.style.borderColor == 'red') {
                    div.style.borderColor = 'white';
               } else if (div.style.borderColor == 'yellow') {
                    div.style.borderColor = 'white';
               } else if (div.style.borderColor == 'green') {
                    div.style.borderColor = 'white';
               }
          }
     }

}