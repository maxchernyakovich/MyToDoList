"use strict";

// add btn in listCase
export function ListDeleteItem(q) {
     let newSpan = document.createElement('span');
     let newBtnDelete = document.createElement('button');
     let newBtnDone = document.createElement('button');
     let newBtnCommit = document.createElement('button');
     newSpan.classList.add('span');
     newBtnDelete.classList.add('btn__delete');
     newBtnDone.classList.add('btn__done');
     newBtnCommit.classList.add('btn__commit');
     newSpan.append(newBtnCommit);
     newSpan.append(newBtnDone);
     newSpan.append(newBtnDelete);
     q.appendChild(newSpan);

     let newListCaseDelete = document.querySelectorAll('.btn__delete');
     for (let i = 0; i < newListCaseDelete.length; i++) {
          newListCaseDelete[i].onclick = function () {
               let newDiv = this.parentNode.parentNode;
               newDiv.style.display = 'none';
          }
     }
}