export function convertToTime(number){
  return `${Math.floor(number/60)}:${Math.floor(((number/60)%1)*60).toString().padStart(2,'0')}`
}

export function convertToMinutes(text){
  return parseInt(text.toString().split(':')[0])*60 + parseInt(text.toString().split(':')[1])
}
