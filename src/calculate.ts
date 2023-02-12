interface Time {
  total: number;
  hours: number;
  min: number;
  sec: number;
}

export const calculateTime = (totalTime: number): Time => {
  let total = totalTime;
  const hours = Math.floor(total / 3600);
  total = total - hours * 3600;
  const min = Math.floor(total / 60);
  total = total - min * 60;
  const sec = totalTime === 60 ? 60 : total;
  return {
    total: totalTime,
    hours,
    min,
    sec,
  };
};
