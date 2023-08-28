const formatHour = (timestamp) => {
  const date = timestamp.toDate()
  const formatedHour = `${date.getHours()}:${date.getMinutes()}`
  return formatedHour
} 

export default formatHour