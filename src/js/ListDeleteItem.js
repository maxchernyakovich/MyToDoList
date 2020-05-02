"use strict";

// add btn in listCase
export function ListDeleteItem(item) {
     let newSpan = document.createElement('span'),
          newBtnDelete = document.createElement('button'),
          newBtnDone = document.createElement('button'),
          newBtnCommit = document.createElement('button');

     newSpan.classList.add('span');
     newBtnDelete.classList.add('btn__delete');
     newBtnDone.classList.add('btn__done');
     newBtnCommit.classList.add('btn__commit');
     newSpan.append(newBtnCommit);
     newSpan.append(newBtnDone);
     newSpan.append(newBtnDelete);
     item.appendChild(newSpan);
     
     let newListCaseDelete = document.querySelectorAll('.btn__delete');
     for (let i = 0; i < newListCaseDelete.length; i++) {
          newListCaseDelete[i].onclick = function () {
               let newDiv = this.parentNode.parentNode;
               newDiv.style.display = 'none';
          }
     }

     
}