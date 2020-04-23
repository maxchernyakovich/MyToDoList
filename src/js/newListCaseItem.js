"use strict";

import { ListDoneItem } from "./ListDoneItem.js";
import { ListDeleteItem } from "./ListDeleteItem.js";

// add event click in btnAdd 
export function newListCaseItem() {
     let input = document.querySelector('.enter__input').value;
     let newLi = document.createElement('li');
     newLi.classList.add('list__case--item');
     let txt = document.createTextNode(input);
     newLi.append(txt);

     document.querySelector('.enter__input').style.borderColor = '';
     if (input === '') {
          /* alert('add a case!'); */
          document.querySelector('.enter__input').style.borderColor = 'red';
     } else {
          document.querySelector('.list__case').appendChild(newLi);
     }
     document.querySelector('.enter__input').value = '';

     // ad function
     ListDeleteItem(newLi);

     // ad function
     ListDoneItem();
}