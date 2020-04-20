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
     
}

btnAdd.addEventListener('click', newListCaseItem);