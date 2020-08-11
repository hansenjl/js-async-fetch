const searchInput = document.getElementById('search-input')
const submitButton = document.getElementById('submit')
const titleList = document.getElementById('list')
const baseURL = "https://www.googleapis.com/books/v1/volumes?q="
//https://www.googleapis.com/books/v1/volumes?q=search+term+here

submitButton.addEventListener('click', handleSubmit)

function handleSubmit(event){
  let searchTerm = searchInput.value.split(" ").join("+")

  makeAPICall(searchTerm)
}

function makeAPICall(searchTerm){
  //write code here
  console.log("in the make API call function", searchTerm)
  fetch(baseURL + searchTerm)
    .then((response) => response.json())
    .then(addBooksToDom)
    .catch((error) => error)

    // .then((res) => {
    //   addBooksToDom(res)
    // })

}

function addBooksToDom(response){
   //write code here
   console.log("in add books to dom")
   console.log(response)
   if(response.error){
    titleList.innerHTML = `<li>${response.error.message}</li>`
   }
   const titles = response["items"].map(item => item.volumeInfo.title)
   const liElements = titles.map(title => `<li class="title">${title}</li>`)
   titleList.innerHTML = liElements.join('')
}
