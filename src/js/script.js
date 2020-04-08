
"use strict";



// variables
const input = document.querySelector('.enter__input'),
      ul = document.querySelector('.list__case'),
      btnAdd = document.querySelector('.enter__btn'),
      btnSave = document.querySelector('.btn__save'),
      btnClear = document.querySelector('.btn__clear');

     // create case 
     function caseList() {
          
          // create list item
          let li = document.createElement('li');
          li.classList.add('list__case--item');

          // crate text in list item
          let caseText = document.createElement('p');
          caseText.classList.add('case__text');

          // create input value
          caseText.append(input.value);

          // create btn in caseList
          let span = document.createElement('span'),
               btnCommit = document.createElement('button'),
               btnDone = document.createElement('button'),
               btnDelete = document.createElement('button');

          // create img in btn 
          let iconCommit = document.createElement('img');
              iconCommit.classList.add('icon__commit');
          let iconDone = document.createElement('img');
              iconDone.classList.add('icon__done');
          let iconDelete = document.createElement('img');
              iconDelete.classList.add('icon__delete');
          

          // add create elem in document
          ul.appendChild(li);
          li.prepend(caseText);
          li.append(span);
          span.prepend(btnCommit);
          btnCommit.append(iconCommit);
          span.append(btnDone);
          btnDone.append(iconDone);
          span.append(btnDelete);
          btnDelete.append(iconDelete);
          
          
          // if input = nothing
          if (input.value == '') {
               return alert('complete add');
          } else {
               return input.value;
          };
     };

     // click event for btn
     btnAdd.addEventListener('click', caseList);
