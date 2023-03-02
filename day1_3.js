// Level 1. 개인정보 수집 유효기간
function solution(today, terms, privacies) {
  var answer = [];
  const terms_arr = terms.map((item) => item.split(" "));
  const terms_obj = {};
  for (let i = 0, leng = terms_arr.length; i < leng; i++) {
    const cur_term = terms_arr[i];
    terms_obj[cur_term[0]] = cur_term[1];
  }
  const today_date = new Date(today);
  const privacies_arr = privacies.map((item) => item.split(" "));
  for (let i = 0, leng = privacies_arr.length; i < leng; i++) {
    const item = privacies_arr[i];
    const month = new Date(item[0]).getMonth() + Number(terms_obj[item[1]]);
    const compare_date = new Date(new Date(item[0]).setMonth(month));

    if (today_date >= compare_date) {
      answer.push(i + 1);
    }
  }
  return answer;
}
