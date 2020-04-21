"use strict";

import { ListCaseItem, /* ListCaseCommit */} from "./ListCaseItem.js";
import {ListDoneItem} from "./ListDoneItem.js";
import {newListCaseItem} from "./newListCaseItem.js";

// ad function
ListCaseItem();

/* ListCaseCommit(); */

// ad function
ListDoneItem();

// ad function
newListCaseItem();

// add btnAdd
let btnAdd = document.querySelector('.enter__btn');

// event click addBtn
btnAdd.addEventListener('click', newListCaseItem);