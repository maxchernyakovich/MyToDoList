"use strict";

export function ListCaseItem() {
     let li = document.querySelectorAll('.list__case .list__case--item');
     for (let i = 0; i < li.length; i++) {
          let span = document.createElement('span');
          let btnDelete = document.createElement('button');
          let btnDone = document.createElement('button');
          let btnCommit = document.createElement('button');
          span.classList.add('span');
          btnDelete.classList.add('btn__delete');
          btnDone.classList.add('btn__done');
          btnCommit.classList.add('btn__commit');
          span.append(btnCommit);
          span.append(btnDone);
          span.append(btnDelete);
          li[i].appendChild(span);
     };

     // add event click in btnDelete static item
     let listBtnDelete = document.querySelectorAll('.btn__delete');
     for (let i = 0; i < listBtnDelete.length; i++) {
          listBtnDelete[i].onclick = function () {
               let div = this.parentNode.parentNode;
               div.style.display = 'none';
          }
     }
}

/* export function ListCaseCommit() {
     let listBtnCommit = document.querySelectorAll('.btn__commit');
     for (let i = 0; i < listBtnCommit.length; i++) {
          listBtnCommit[i].onclick = function () {
               let liCommit = document.createElement('li');
               liCommit.classList.add('list__case--item');
               let inputCommit = document.createElement('input');
               inputCommit.classList.add('input__commit');
               liCommit.append(inputCommit);
               let div = this.parentNode.parentNode;
               div.after(liCommit);
          }
     }
} */