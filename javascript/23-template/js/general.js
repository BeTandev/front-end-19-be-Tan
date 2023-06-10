const API = axios.create({
    baseURL: 'https://apiforlearning.zendvn.com/api/v2'
  });

let today = new Date()

const searchForm = document.getElementById('search-form')
const inputKeyword = document.querySelector('input[name="keyword"]')
searchForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const keyword = inputKeyword.value.trim()
  if(keyword){
    searchForm.submit()
  }else{
    alert('Vui long nhap lai')
  }
})