/* 

    날짜 : 2020.01.30
    난이도 : level 2
    링크 : https://programmers.co.kr/learn/courses/30/lessons/42587
    제목 : 프린터
    통과여부 : 통과 (100.0 / 100.0)
    
*/



// solution 1 (100.0 / 100.0)

function solution(priorities, location) {
    
    var arr = priorities;
    var myIndex = location;
    var exportArr = [];
    var recycle = true;
    
    var popArr = (arr) => {
        
        var maximum = arr.reduce((a, c) => {
            return  a > c ? a : c;
        });
        
        var temp;
        
        if(arr[0] != maximum && myIndex != 0){
            temp = arr[0];
            arr.shift();
            arr.push(temp);
            myIndex --;
        } else if (arr[0] != maximum && myIndex == 0) {
            temp = arr[0];
            arr.shift();
            arr.push(temp);
            myIndex = arr.length - 1;
        } else if (arr[0] == maximum && myIndex != 0) {
            exportArr.push(arr[0]);
            arr.shift();
            myIndex --;
        } else if (arr[0] == maximum && myIndex == 0) {
            exportArr.push(arr[0]);
            arr.shift();            
            recycle = false;
        }
    }
    
    
    while(recycle){
        popArr(arr);      
    }
    
    
    return exportArr.length;
    
}