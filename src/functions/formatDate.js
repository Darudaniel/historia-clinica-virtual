const formatDate = (timestamp) => {
  const date = timestamp.toDate()
  const monthJs = date.getMonth() 
  const monthReal = monthJs + 1
  const formatedDate = `${date.getDate()}/${monthReal}/${date.getFullYear()}`
  return formatedDate
} 

export default formatDate
