"use strict";
let btnAdd = document.querySelector('.enter__btn');

let listCaseItem = document.querySelectorAll('.list__case .list__case--item');
for (let i = 0; i < listCaseItem.length; i++) {
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
     listCaseItem[i].appendChild(span);
};

let listCaseDelete = document.querySelectorAll('.btn__delete');
for (let i = 0; i < listCaseDelete.length; i++) {
     listCaseDelete[i].onclick = function() {
          let div = this.parentNode;
          let nextDiv = div.parentNode;
          nextDiv.style.display = 'none';
     }
}

let listCaseDone = document.querySelectorAll('.btn__done');
for (let i = 0; i < listCaseDone.length; i++) {
     listCaseDone[i].onclick = function () {
          let div = this.parentNode.parentNode;
          div.style.display = 'none';
     }
}

for (let i = 0; i < listCaseDone.length; i++) {
     listCaseDone[i].onclick = function () {
          let div = this.parentNode.parentNode;
          div.cloneNode(true);
          document.querySelector('.list__done').appendChild(div);
          div.style.display = 'flex';
     }
}


function newListCaseItem() {
     let input = document.querySelector('.enter__input').value;
     let li = document.createElement('li');
     li.classList.add('list__case--item');
     /* let txt;
     txt.textContent = input; */
     let txt = document.createTextNode(input);
     li.append(txt);
     if (input === '') {
          alert('add a case!');
     } else {
          document.querySelector('.list__case').appendChild(li);
     }
     document.querySelector('.enter__input').value = '';
     
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
     li.appendChild(newSpan);

     let newListCaseDelete = document.querySelectorAll('.btn__delete');
     for (let i = 0; i < newListCaseDelete.length; i++) {
          newListCaseDelete[i].onclick = function () {
               let newDiv = this.parentNode.parentNode;
               newDiv.style.display = 'none';
          }
     }
}

btnAdd.addEventListener('click', newListCaseItem);