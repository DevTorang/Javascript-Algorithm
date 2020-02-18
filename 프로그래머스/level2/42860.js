//문제 푸는중




function solution(name) {
    var boolArr = transAlpabetBool(name);
    var nameLength = boolArr.length;
    var pivot = 0;
    var shiftCount = 0;

    //example
    //solution("JAN") 
    //boolArr ==> [true, fasle ,true]

    while(boolArr.indexOf(true) != -1){         
        if(boolArr[pivot] == true){
            boolArr[pivot] = false;
        } else if(boolArr[pivot + 1] == true) {
            boolArr[pivot + 1] = false;
            pivot++;
            shiftCount++;
        } else if(pivot != 0 && boolArr[pivot - 1] == true) {
            boolArr[pivot - 1] == false;
            pivot--;
            shiftCount++;
        } else if(pivot == 0 && boolArr[nameLength - 1] == true) {
            boolArr[nameLength - 1] == false;
            pivot = nameLength - 1;
            shiftCount++;
        }
    }
    
    return shiftCount + countAscii(transAlphabetToAscii(name));
    
}

