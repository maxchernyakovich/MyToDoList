"use strict";

// variable
import {input, ulCase, ulDone, btnAdd, btnSave, btnClear } from "./variables.js";

// create case 
export const caseList = () => {
     if (input.value === '') {
          input.textContent = '';
     } else {
          // create list item
          let li = document.createElement('li');
          li.classList.add('list__case--item');

          // crate text in list item
          let caseText = document.createElement('p');
          caseText.classList.add('case__text');

          // create input value
          caseText.textContent = input.value;

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

          // click btn delete
          let deleteCase = () => {
               li.remove();
          };
          btnDelete.addEventListener('click', deleteCase);
     }
     input.value = '';
     
};

