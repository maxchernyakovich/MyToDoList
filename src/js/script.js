"use strict";

// variables
import {input, ulCase, ulDone, btnAdd, btnSave, btnClear} from "./variables.js";

// create case
import {caseList} from "./create_case.js";

// delete case
import {doneList} from "./create_done.js";

// click event for add btn
btnAdd.addEventListener('click', caseList);
btnDone.addEventListener('click', doneList);