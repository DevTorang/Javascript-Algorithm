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

solution(6);