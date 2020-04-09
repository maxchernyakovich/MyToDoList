"use strict";

// variables
import {input, ulCase, ulDone, btnAdd, btnSave, btnClear} from "./variables.js";

// create case
import {caseList} from "./create_case.js"; 

// click event for add btn
btnAdd.addEventListener('click', caseList);