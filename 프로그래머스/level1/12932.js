/* 

    날짜 : 2020.01.30
    난이도 : level 1
    링크 : https://programmers.co.kr/learn/courses/30/lessons/12932
    제목 : 자연수 뒤집어 배열로 만들기
    통과여부 : 통과 (100.0 / 100.0)
    
*/



// solution 1 (100.0 / 100.0)

function solution(n) {
    var answer = String(n).split('').reverse().map((v) => {
        return parseInt(v, 10);
    });
    
    return answer;
}