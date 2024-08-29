const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
]);


//MAKES A COPY - const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ];

//CONCATS TO THE LIST - 
const needThyme = groceryList.concat( [ { "item": "thyme", "haveIngredient": false } ] );

//SETTING VALUE TO TRUE - 
const gotTheThyme = [ ...needThyme.slice(0, 5), { ...needThyme[5], "haveIngredient": true } ];

//REMOVING USING SLICE
const notNeceCelery = [ ...gotTheThyme.slice(0, 2), ...gotTheThyme.slice(3) ];

const sortedGroceries = [...groceryList].sort( (a, b) => (a.item > b.item) ? 1 : -1 );


    console.log(needThyme);
    console.log(gotTheThyme);
    console.log(notNeceCelery);
    console.log(sortedGroceries);


    //================================SORTING======================================

    const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);
    // items.sort(); THIS WILL THROW AN ERROR 
    const sortedItems = [...items].sort(); // RUN IT THIS WAY

    console.log(items)


//SORTING ISSUES - Sort is really handy, however there is a bit of a trap... if what we're sorting are numbers it will not return the results we're expecting
    const numbers = [10, 5, 3, 12, 22, 8];
    numbers.sort(function(a,b){return a-b});
    let highest =numbers[numbers.length-1];

// this will return [10, 12, 22, 3, 5, 8 ]
    console.log(numbers)  
    console.log(highest)  
