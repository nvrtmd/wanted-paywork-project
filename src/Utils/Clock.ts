import { Dispatch, SetStateAction } from 'react';

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
