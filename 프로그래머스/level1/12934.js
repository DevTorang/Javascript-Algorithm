/* 

    날짜 : 2020.02.19
    난이도 : level 1
    링크 : https://programmers.co.kr/learn/courses/30/lessons/12934
    제목 : 정수 제곱근 판별
    통과여부 : 통과 (100.0 / 100.0)
    
*/



// solution 1 (100.0 / 100.0)

function solution(n) {
    return Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n) + 1, 2) : -1 ;
}