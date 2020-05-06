"use strict";

//import { ListCaseItem} from "./ListCaseItem.js";
//import {ListDoneItem} from "./ListDoneItem.js";
import {newListCaseItem} from "./newListCaseItem.js";
//import {createNewCommit} from "./createNewCommit.js";
//import {ListCaseCommit} from "./ListCaseCommit.js";
//import { ListDoneRenew } from "./ListDoneRenew.js";

// ad function
//ListCaseItem();

//ListCaseCommit();

// ad function
//ListDoneItem();

// ad function
newListCaseItem();

// ad function
//createNewCommit();

// ad function
//ListDoneRenew();

// add btnAdd
let btnAdd = document.querySelector('.enter__btn');

// add btnAdd
let FormAdd = document.querySelector('.pop-ups__flex--btn');

// event click addBtn
btnAdd.addEventListener('click', newListCaseItem);

// event click addBtn
//FormAdd.addEventListener('click', createNewCommit);
