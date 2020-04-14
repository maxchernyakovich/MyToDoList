
"use strict";



// variables
const input = document.querySelector('.enter__input'),
      ulCase = document.querySelector('.list__case'),
      ulDone = document.querySelector('.list__done'),
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
               btnDelete = document.createElement('button'),
               btnRenew = document.createElement('button');

          // create img in btn 
          let iconCommit = document.createElement('img');
              iconCommit.classList.add('icon__commit');
          let iconDone = document.createElement('img');
              iconDone.classList.add('icon__done');
          let iconDelete = document.createElement('img');
              iconDelete.classList.add('icon__delete');
          let iconRenew = document.createElement('img');
              iconRenew.classList.add('icon__renew');
          
          // add create elem in document
          ulCase.appendChild(li);
          li.prepend(caseText);
          li.append(span);
          span.prepend(btnCommit);
          btnCommit.append(iconCommit);
          span.append(btnDone);
          btnDone.append(iconDone);
          span.append(btnDelete);
          btnDelete.append(iconDelete);
          input.value = '';
          
          /* // if input = nothing
          if (input.value == '') {
               return alert('complete add');
          } else {
               return input.value;
          }; */

          // click btn delete
          function deleteCase() {
               li.remove();
          };
          btnDelete.addEventListener('click', deleteCase);

          console.log(btnDelete);

          //click btn done
          function doneCase() {

               // clone li
               let cloneCase = li.cloneNode(true),
                   btn = cloneCase.querySelector('.icon__done');
               
               // delete li in case list
               li.remove();

               // add case in done list
               ulDone.appendChild(cloneCase);

               // replace elem in btn
               btn.replaceWith(iconRenew);

               // add delete elem in case done
               function DeleteDone() {
                    let btn = ulDone.querySelector('li');
                    btn.remove();
               };

               //found create btn delete when clone
               let btnDeleteDone = ulDone.querySelectorAll('button')[2];
              
               console.log(btnDeleteDone);

               // click event for delete btn
               btnDeleteDone.addEventListener('click', DeleteDone);
          };

          // click event for done btn
          btnDone.addEventListener('click', doneCase);
     };

     // click event for btn
     btnAdd.addEventListener('click', caseList);