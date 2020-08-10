const searchInput = document.getElementById('search-input')
const submitButton = document.getElementById('submit')
const baseURL = "https://www.googleapis.com/books/v1/volumes?q="
//https://www.googleapis.com/books/v1/volumes?q=search+term+here

submitButton.addEventListener('click', handleSubmit)

function handleSubmit(event){
  let searchTerm = searchInput.value.split(" ").join("+")
  makeAPICall(searchTerm)
}

function makeAPICall(searchTerm){
  //write code here

}

function addBooksToDom(){
   //write code here
}
