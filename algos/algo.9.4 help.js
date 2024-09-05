// condition - comparison that would return true/false
i > 5    // i : 3 -- false
i >== 3  // i : 3 -- true
i === 8 // i : 9 -- false
i == 5
i <== 6 // i: -5 -- true
i < 3 // i: 7 -- false

&& //AND
|| // OR


// if / while / for
if(condition){
  // CODE TO EXECUTE IF THE CONDITION IS TRUE
}

while(condition){
  // CODE TO EXECUTE IF THE CONDITION IS TRUE
}


const arr = [2, 6, 9, 10]

for (var i = 0; i < arr.length; i++){
  console.log(arr[i])
}

var i =0
while(i < arr.length){
  console.log(arr[i])
  i= i+1
}