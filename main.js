let str = `
010-1234-5678
thesce@gmail.com
https://www.omdbapi.com/?apikey=sdflj
The quick brown fox the lazy dog.
abbcccdddd
동해물과 백두산이 마르고 닳도록
`

console.log(
  str.match(/[가-힣]{1,}/g)
)