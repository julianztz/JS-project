/* IIFE; module pattern */
// building independent modules for different components

// 8.28 eventListener for keypress & click
// budget ctrl: store input item info
var budgetController = (function () {
    // expense obj
    var Expense = function (id, des, value) {
        this.id = id;
        this.des = des;
        this.value = value;
    };
    // income obj
    var Income = function (id, des, value) {
        this.id = id;
        this.des = des;
        this.value = value;
    };

    // calcualate total income
    var calculateTotal = function (type) {
        // some code
    };

    // newItem arrays & total array
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    }
    return {
        addItem: function (type, des, val) {
            var newItem;
            // new ID: is the index of the last item + 1
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.addItems[type.length - 1].id + 1];
            } else {
                ID = 0;
            }

            // new Item
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }
            data.allItems[type].push(newItem);
            data.totals[type] += val;

            return newItem;
        },

        // 8.19 calculate budget + return budget
        caluculateBudget: function () {
            //calculate total income & expense & budget & percentage
            // some code
        },

        getBudget: function () {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        },

        // 8.31 calculate percentage + return percentage
        calculatePercentage: function () {

        },

        // !!!!!!!!!!!!testing!!!!!!!!!!!:  closure show the data variable to public
        testing: function () {
            console.log(data);
        }

    };
})();


// UI ctrl: show input item info on UI
var UIController = (function () { // function expression: no arguments
    // place to store the HTML classnames
    var DOMstrings = {
        inputType: '.add__type',
        inputDes: '.add__description',
        inputValue: '.add__value',
        inputAddBtn: '.add__btn'
    }
    return {
        getInput: function () {
            // create object to store the input data
            return {
                type: document.querySelector(DOMstrings.inputType).value, // + for income;  - for expense
                des: document.querySelector(DOMstrings.inputDes).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
        },

        // 8.29 
        addListItem: function (obj, type) {
            // create HTML string with placeholder text
            // place the placeholder text with some actual data
            // insert HTML into DOM

        },

        // 8.30 delete item from the UI
        deleteListItem: function () {

        },

        // 8.29 clear all inputs after clicking check OR pressing enter
        clearFields: function () {
            // some code
        },

        // 8.29 display budget on top UI
        displayBudget: function (obj) {

        },

        // 8.31 display percentage in the expense 
        displayPercentage: function (percentageArr) {
            var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);

            // defination
            var nodeListForEach = function (list, callback) {
                for (var i = 0; i < list.length; i++) {
                    callback(list[i], i);
                }
            };

            // applying here; defined before return{}; around line 219
            // applys current.length times
            nodeListForEach(fields, function (current, index) {

                if (percentageArr[index] > 0) {
                    current.textContent = percentageArr[index] + '%';
                } else {
                    current.textContent = '---';
                }
            });
        },

        // returns the DOMstring obj to the public for the other functions to use
        getDOMstrings: function () {
            return DOMstrings;
        }


    };

})();


// central ctrller
/* connect the other two modules; pass them as arguments */
var controller = (function (budgetCtrl, UICtrl) {
    // encapsulate eventListeners
    var setupEventListeners = function () {
        // get classnames from UIController
        var DOM = UICtrl.getDOMstrings();

        // get click event on the btn
        document.querySelector(DOM.inputAddBtn).addEventListener('click', ctrlAddItem); // callback

        // get enter keypress event from the document
        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                console.log("enter is pressed");
                ctrlAddItem();
            }
        });
    }


    var updateBudget = function () {
        //  1. calculate budget
        budgetCtrl.caluculateBudget();
        //  2. return budget
        var budget = budgetCtrl.getBudget();
        //  3. display budget on UI
        UICtrl.displayBudget(budget);
    };

    // 8.31 update percentage in the expense
    var updatePercentage = function () {
        // 1. calculate percentage
        // 2. read the percentage from the budget controller
        // 3. update UI controller with new percentage
    };

    // Called when click btn OR press enter
    var ctrlAddItem = function () {
        console.log("test from central controller");
        // todo list for click & keypress event
        //  1. get filled input data
        var input = UICtrl.getInput();
        console.log(input);

        // prevent invalid input: des is string + input is num + value >0
        if (input.des !== "" && !isNaN(input.value) && input.value > 0) {
            //  2. add item to budget controller
            newItem = budgetCtrl.addItem(input.type, input.des, input.value);
            //  3. add item to the UI
            UICtrl.addListItem(newItem, input.type);
            //  4. clear fields
            UICtrl.clearFields();

            // following below moved out as new function updateBudget
            //  4. calculate budget & update UI
            updateBudget();

            // 5. calculate percentage & update UI
            updatePercentage();

        }

    };



    // 8.30 delete item from the data structure
    var ctrlDeleteItem = function (event) {
        var itemID, splitID, type, ID;
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if (itemID) {
            // split ID: inc-1

            // 1. delete item from data structure
            // 2. delete item from UI

            // 3. update and show new budget
            updateBudget();
            // 4. calculate percentage & update UI
            updatePercentage();
        }
    };

    // !!Initialization!!: return setupEventListeners to the public
    // initialize the event-listeners
    // return init funciton: must be put in the end
    return {
        init: function () {
            console.log("setupEventListener func testing");
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: 0
            });
            setupEventListeners();
        }
    };

})(budgetController, UIController);

// initialize the event listeners in the central controller function
controller.init();


//arr = [1,7,-5,4,4,8]
//var a = 0;
var result = 0;
for (var i =0; i<6; i++){
    result += (result+i*2)
//    result = (arr[i]>=arr[i+1])?result+1:result;
    console.log(result)
}
result =(!(result<=100))?result-200: result*2
console.log("result: ", result)
