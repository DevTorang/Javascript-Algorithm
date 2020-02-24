/* 

    날짜 : 2020.02.24
    난이도 : level 1
    링크 : https://programmers.co.kr/learn/courses/30/lessons/12943
    제목 : 콜라츠 추측
    통과여부 : 통과 (100.0 / 100.0)
    
*/



// solution 1 (100.0 / 100.0)



function solution(num, count = 0) {
    if(num == 1){
        console.log(count);
        return count;
    } else if(num % 2 == 0) {
        solution(num / 2, count + 1);
    } else {
        solution(num * 3 + 1, count + 1);
    }
}
