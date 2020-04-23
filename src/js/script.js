"use strict";

import { ListCaseItem} from "./ListCaseItem.js";
import {ListDoneItem} from "./ListDoneItem.js";
import {newListCaseItem} from "./newListCaseItem.js";
import {ListCaseCommit} from "./ListCaseCommit.js";

// ad function
ListCaseItem();

ListCaseCommit();

// ad function
ListDoneItem();

// ad function
newListCaseItem();

// add btnAdd
let btnAdd = document.querySelector('.enter__btn');

// event click addBtn
btnAdd.addEventListener('click', newListCaseItem);