
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

          // add create elem in document
          ul.appendChild(li);
          li.append(caseText);
          
          // if input = nothing
          if (input.value == '') {
               return alert('complete add');
          } else {
               return input.value;
          };
     };

     // click event for btn
     btnAdd.addEventListener('click', caseList);
