/* 

    날짜 : 2020.01.30
    난이도 : level 1
    링크 : https://programmers.co.kr/learn/courses/30/lessons/12930
    제목 : 이상한 문자 만들기
    통과여부 : 통과 (100.0 / 100.0)
    
*/



// solution 1 (100.0 / 100.0)

function solution(s) {
    
    var input = s.split('');
    var count = 0;
    var answer = input.map((value) => {
        if(value == ' '){
            count = 0; 
            return value;
                   
        } else if (count % 2 == 0) {
            count++;
            return value.toUpperCase();
            
        } else if (count % 2 != 0){
            count++;
            return value.toLowerCase();
        }
        
    });
    
    return answer.join('');
    
}




