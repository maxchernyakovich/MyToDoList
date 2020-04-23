"use strict";


export function ListCaseCommit() {
     let listBtnCommit = document.querySelectorAll('.btn__commit');
     for (let i = 0; i < listBtnCommit.length; i++) {
          listBtnCommit[i].onclick = function () {
               /* let liCommit = document.createElement('li');
               liCommit.classList.add('list__case--item');
               let inputCommit = document.createElement('input');
               inputCommit.classList.add('input__commit');
               liCommit.append(inputCommit);
               let div = this.parentNode.parentNode;
               div.after(liCommit); */
          }
     }
}