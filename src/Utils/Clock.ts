import { Dispatch, SetStateAction } from 'react';

// 한국 시간을 기준으로, 현재 날짜 및 시간 state를 변환해줄 setTime 함수를 받아
// 한국 날짜 및 시간 형식으로 상태를 변환하는 함수
export function clock(setTime: Dispatch<SetStateAction<string>>) {
  const today = new Date();
  const utc = today.getTime() + today.getTimezoneOffset() * 60 * 1000;
  const timeGapKr = 9 * 60 * 60 * 1000;
  const koreaTime = new Date(utc + timeGapKr);

  const koreaTimeFormat = new Intl.DateTimeFormat('ko-KR', {
    dateStyle: 'full',
    timeStyle: 'short',
  }).format(koreaTime);

  setTime(koreaTimeFormat);
}
