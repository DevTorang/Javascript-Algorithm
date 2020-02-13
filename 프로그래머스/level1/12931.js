/* 

    날짜 : 2020.01.30
    난이도 : level 1
    링크 : https://programmers.co.kr/learn/courses/30/lessons/12931
    제목 : 자릿수 더하기
    통과여부 : 통과 (100.0 / 100.0)
    
*/



// solution 1 (100.0 / 100.0)

function solution(n) {
    var answer = String(n).split('').reduce((a, c) => {
        return a + parseInt(c, 10);
    }, 0);
    
    return answer;
}




