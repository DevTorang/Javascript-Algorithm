/* 

    날짜 : 2020.02.19
    난이도 : level 1
    링크 : https://programmers.co.kr/learn/courses/30/lessons/12933
    제목 : 정수 내림차순으로 배치하기
    통과여부 : 통과 (100.0 / 100.0)
    
*/



// solution 1 (100.0 / 100.0)

function solution(n) {

    var splitNum = String(n).split(''); 
    splitNum.sort((a, b)=> b - a);
    
    return splitNum.join('') * 1;
}




