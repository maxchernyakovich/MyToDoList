"use strict";

// variables
import { input, ulCase, ulDone, btnAdd, btnSave, btnClear } from "./variables.js";

export function deleteCase (i) {
     let btn = ulCase.querySelectorAll('.list__case--item')[i];
     let btnDelete = ulCase.querySelectorAll('.list__case--item .icon__delete')[i];
     btnDelete.onclick = function () {
          btn.remove();
     }
};

export let btnDeleteCase = document.querySelectorAll('.list__case .list__case--item');
for (let i = 0; i < btnDeleteCase.length; i++) {
     btnDeleteCase[i].addEventListener('click', deleteCase(i));
};