// Level 1. 카드뭉치
function solution(cards1, cards2, goal) {
  var answer = "Yes";

  for (let i = 0, leng = goal.length; i < leng; i++) {
    const word = goal[i];

    if (word == cards1[0]) {
      cards1.shift();
    } else if (word == cards2[0]) {
      cards2.shift();
    } else {
      answer = "No";
      break;
    }
  }

  return answer;
}
