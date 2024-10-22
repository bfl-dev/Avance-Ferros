export function convertToTime(number){
  return `${Math.floor(number/60)}:${Math.floor(((number/60)%1)*60).toString().padStart(2,'0')}`
}

export function convertToMinutes(text){
  return parseInt(text.toString().split(':')[0])*60 + parseInt(text.toString().split(':')[1])
}
export function getCurrentDate() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}
