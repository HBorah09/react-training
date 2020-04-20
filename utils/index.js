export const timePast = date => {
  const today = new Date();
  const previousDate = new Date(date);
  return today.getFullYear() - previousDate.getFullYear();
};