//문제 푸는중




function solution(name){

    var pivot = 0;
    // 1. 입력받은 문자열을 Bool값으로 변환
    var boolArr = transAlpabetBool(name);
    
    // 2. Bool배열의 값이 true인 부분의 정보를 수집
    var haveToChangePoint = getChangePoint(boolArr); 
    var goal;
    var shiftCount = 0;
    // 3. 수집한 인덱스들에서 현재 위치에서 가장 가까운 인덱스 검출 

    
    while(haveToChangePoint.length != 0) {
        var goalObj = getMinDistanceIndex(haveToChangePoint, getMinDirection, pivot, boolArr.length);
        goal = goalObj.index;
        pivot = goal;
        shiftCount += goalObj.shift;
        haveToChangePoint.splice(haveToChangePoint.indexOf(goal),1);
    }
    
    
    return shiftCount + countAscii(transAlphabetToAscii(name));

}


function transAlpabetBool(insert) {
    return insert.split('').map(v=> v.charCodeAt(0) != 65 ? true : false);
}

function getChangePoint(str) {
    return str.reduce((c, v, i)=>{
        if(v){
            var exportArr = c.slice(0);
            exportArr.push(i)
            return exportArr;   
        } else {
            return c;
        }
    }, []);
}


function getMinDirection(wholeLength, pivot, goal) {
    var arrLength = wholeLength;
    var leftDistance, rightDistance;
    
    if(pivot < goal) {
        leftDistance = arrLength - goal + pivot;
        rightDistance = goal - pivot;
    } else if (pivot > goal) {
        leftDistance = pivot - goal;
        rightDistance = arrLength - (pivot + 1) + (goal + 1)
    } else {
        return 0;
    }
    
    return leftDistance < rightDistance ? leftDistance : rightDistance;
    
}

function getMinDistanceIndex(arr, getMinDirection, pivot, wholeLength) {
    var arrLength = wholeLength;
    var currentPivot = pivot;
    var minDistanceIndex;
    var min;
    
    for(var i in arr){
        if(min !== undefined){
            if(min > getMinDirection(arrLength, currentPivot, arr[i])) {
                min = getMinDirection(arrLength, currentPivot, arr[i]);
                minDistanceIndex = arr[i];
            }
        } else if(min === undefined) {
            min = getMinDirection(arrLength, currentPivot, arr[i]);
            minDistanceIndex = arr[i];
        }
    }
    
    return {'index' : minDistanceIndex, 'shift' : min};
}


function transAlphabetToAscii(insert){
    return insert.split('').map(v=> v.charCodeAt(0));
}

function countAscii(arr){
    var sum = arr.reduce((c, v) => {
        var count = (v - 65) < 13 ? (v - 65) : (91 - v) 
        return c + count;
    }, 0);    
    
    return sum;
}