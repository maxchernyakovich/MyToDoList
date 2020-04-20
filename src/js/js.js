"use strict";
// add btnAdd
let btnAdd = document.querySelector('.enter__btn');

// add btn in listCase static item
function ListCaseItem() {
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

// ad function
ListCaseItem();

// add event click in btnDone static item
function ListDoneItem() {

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

// ad function
ListDoneItem();

// add event click in btnAdd 
function newListCaseItem() {
     let input = document.querySelector('.enter__input').value;
     let newLi = document.createElement('li');
     newLi.classList.add('list__case--item');
     let txt = document.createTextNode(input);
     newLi.append(txt);
     if (input === '') {
          alert('add a case!');
     } else {
          document.querySelector('.list__case').appendChild(newLi);
     }
     document.querySelector('.enter__input').value = '';
     
     // add btn in listCase
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
     newLi.appendChild(newSpan);

     let newListCaseDelete = document.querySelectorAll('.btn__delete');
     for (let i = 0; i < newListCaseDelete.length; i++) {
          newListCaseDelete[i].onclick = function () {
               let newDiv = this.parentNode.parentNode;
               newDiv.style.display = 'none';
          }
     }

     // ad function
     ListDoneItem();
}

// event click addBtn
btnAdd.addEventListener('click', newListCaseItem);