const formatDate = (timestamp) => {
  const date = timestamp.toDate()
  const formatedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
  return formatedDate
} 

export default formatDate
