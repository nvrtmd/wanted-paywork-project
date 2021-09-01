// ISO 형식의 날짜 및 시간 정보가 담긴 문자열을
// YYYY-MM-DD 형식으로 변환하는 함수
export function dateFormat(date: string) {
  return date && date.slice(0, 10);
}
