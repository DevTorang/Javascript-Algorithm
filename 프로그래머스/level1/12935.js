/* 

    날짜 : 2020.02.19
    난이도 : level 1
    링크 : https://programmers.co.kr/learn/courses/30/lessons/12935
    제목 : 제일 작은 수 제거하기
    통과여부 : 통과 (100.0 / 100.0)
    
*/



// solution 1 (100.0 / 100.0)


function solution(arr) {

    if(arr.length == 1){
        return [-1];
    } else {
        var removeMinArr = arr.slice(0);  
        removeMinArr.splice(removeMinArr.indexOf(findMin(removeMinArr)), 1);    
        return removeMinArr;
    }    
}

function findMin(arr){
    return arr.reduce((a, v) => a > v ? v : a ,arr[0]);
}
