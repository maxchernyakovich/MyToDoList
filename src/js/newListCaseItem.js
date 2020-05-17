"use strict";

import { ListDoneItem } from "./ListDoneItem.js";
import { ListDeleteItem } from "./ListDeleteItem.js";
import { changesColorList } from "./changesColorList.js";
import { ListCaseCommit } from "./ListCaseCommit.js";
let idLi = [];

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
          newLi.id = "idCaseLi" + Math.random().toString(16).slice(8);
          idLi.push(newLi.id);
          console.log(idLi);

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

     function createNewCommit() {

          let formInput = document.querySelector('.pop-ups__flex--input').value;
          let form = document.querySelector('.pop-ups');
          let overlay = document.querySelector('.overlay');
          let btnCommit = document.querySelectorAll('.btn__commit');
          
          //let btnCommitParent = btnCommit[1].parentElement.parentElement.id;
          console.log(btnCommit);
          let newArr = [];

          btnCommit.forEach(function (elem) {
               newArr.push(elem.parentElement.parentElement.id);
          });
          console.log(newArr);

          form.style.display = "none";
          overlay.style.display = "none";

          // filter arr id
          let idLiFilter = idLi.filter(function (elem) {
               return elem == newArr[3];
          });
          console.log(idLiFilter)

          let q = document.querySelector(`#${idLiFilter}`);
          let txt = document.createTextNode(formInput);
          q.append(txt);
          console.log(q);
          document.querySelector('.pop-ups__flex--input').value = '';
     }
     
     let FormAdd = document.querySelector('.pop-ups__flex--btn');
     FormAdd.addEventListener('click', createNewCommit);

}

