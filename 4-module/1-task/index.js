function makeFriendsList(friends) {
  // ваш код...
  let result = ''
  const ulEl = document.createElement('ul')
  for (let i = 0; i < friends.length; i++) {
 // const liEl =  document.createElement('li')
  //console.log(`<li>${friends[i].firstName}${friends[i].lastName}</li>`)
   result = result + `<li>${friends[i].firstName}${friends[i].lastName}</li>`
  }
  ulEl.innerHTML = result
  return ulEl
}
