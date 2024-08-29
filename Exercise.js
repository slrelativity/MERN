const shoppingList = Object.freeze([
    {id: 3, item: "Pepper's food", price: 1.29, shops: ["petco", "amazon"], required: true}, 
    {id: 5, item: "red gamer chair", price: 300, shops: ["amazon", "BestBuy"], required: false},
    {id: 9, item: "soup dumplings", price: 3.29, shops: ["Trader Joes"], required: true},
    {id: 2, item: "Air ticket to Barcelona", price: 600, shops: ["Expedia"], required: false}, 
    {id: 10, item: "custard tart", price: 3.99, shops: ["Trader Joes"], required: true}     
])

// ------------- CRUD with functional programming (DO NOT ALTER ORIGINAL ARRAY)------------

// Pick 2-3 of CRUD (2-3 tasks)

// Task 1 (CREATE): Given a new item, create a updated shoppingList with that new item 
const newItem = {id: 11, item: "TV", price: 500, shops: ["BestBuy"], required: false};
const addTV = [...shoppingList, newItem];


// Task 2 (DELETE): Given an ID, remove that item without changing the original array. 
const deleteId = 2; // Removing air ticket

// Task 3 (DELETE): Given an index, remove that item without changing the original array. 
const deleteArrIdx = 1 // Removing red gamer chair 

// Task 4 (READ): Create a list of <div> with all the name & the price of each item 
// Expected result: [ `<div>Pepper's food: 1.29 </div>`, `<div>red gamer chair: 300 </div>`]

// Task 5 (UPDATE): Given an ID, update that item. (DO NOT CHANGE THE ORIGINAL ARRAY, create a copy one for the updated array)
const updateId = 5; // Change it to required.


console.table(addTV);