function bubbleSort(numbers) {
    var temp = 0
    for (var i = 0; i < numbers.length - 1; i++){
        for (var j = 0; j < numbers.length - i - 1; j++){
            if (numbers[j] > numbers[j+1]){
                temp = numbers[j];
                numbers[j] = numbers[j+1];
                numbers[j+1] = temp
            }
        }
    }
    return numbers
}

function bubbleSort2(numbers = []) {
    let isSorted = false;
  
    while (isSorted === false) {
      isSorted = true;
  
      for (let i = 0; i < numbers.length - 1; i++) {
        const j = i + 1;
  
        if (numbers[i] > numbers[j]) {
          isSorted = false;
          const temp = numbers[i];
          numbers[i] = numbers[j];
          numbers[j] = temp;
        }
      }
    }
    return numbers;
  }