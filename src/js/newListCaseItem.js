"use strict";

import { ListDoneItem } from "./ListDoneItem.js";
import { ListDeleteItem } from "./ListDeleteItem.js";
import { changesColorList } from "./changesColorList.js";
import { ListCaseCommit } from "./ListCaseCommit.js";

// add event click in btnAdd 
export function newListCaseItem() {
     let input = document.querySelector('.enter__input').value;
     let newLi = document.createElement('li');
     let spanColorBtnText = document.createElement('span');
     newLi.classList.add('list__case--item');
     spanColorBtnText.classList.add('span__colorBtn')
     let txt = document.createTextNode(input);
     spanColorBtnText.append(txt);
     newLi.append(spanColorBtnText);

     // checking for empty string
     document.querySelector('.enter__input').style.borderColor = '';
     document.querySelector('.enter').style.borderColor = '';
     document.querySelector('.enter__btn').style.borderColor = '';
     if (input === '') {
          document.querySelector('.enter__input').style.borderColor = 'red';
          document.querySelector('.enter').style.borderColor = 'red';
          document.querySelector('.enter__btn').style.borderColor = 'red';
     } else {
          document.querySelector('.list__case').appendChild(newLi);
     }
     document.querySelector('.enter__input').value = '';

     
     // ad function
     ListDeleteItem(newLi);
     // ad function
     ListDoneItem();
     // ad function
     ListCaseCommit();
     // ad function
     changesColorList(spanColorBtnText);
}