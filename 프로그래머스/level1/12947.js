/* 

    날짜 : 2020.02.14
    난이도 : level 1
    링크 : https://programmers.co.kr/learn/courses/30/lessons/12947
    제목 : 하샤드 수
    통과여부 : 통과 (100.0 / 100.0)
    
*/



// solution 1 (100.0 / 100.0)

function solution(x) {
    var division = String(x).split('');    
    var add = division.reduce((c,v)=>{
       return c + parseInt(v, 10); 
    },0);

    return x % add == 0 ? true : false;  
}