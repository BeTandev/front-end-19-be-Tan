// create axios instance
const API = axios.create({
  baseURL: 'https://apiforlearning.zendvn.com/api/v2/',
});

const elSearchForm = document.getElementById('search-form');
const elInputKeyword = document.querySelector('input[name="keyword"]');

elSearchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const keyword = elInputKeyword.value.trim();
  if (keyword) {
    elSearchForm.submit();
  } else {
    alert('Vui long nhap tu khoa can tim!');
  }
});

API.get(`categories_news`).then(res => {
  const menus = res.data.data
  let html = ``
  let otherMenuHtml = ``

  menus.forEach((menuItem, index) => {
    if(index < 2){
      html += `<a class="dropdown-item" href="category.html?id=${menuItem.id}">${menuItem.name}</a>`
    }
    else{
      otherMenuHtml += `<a class="dropdown-item" href="category.html?id=${menuItem.id}">${menuItem.name}</a>`
    }
  })
  document.getElementById('main-menu').innerHTML = html + `
  <li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      More <span class="fa fa-angle-down"></span>
  </a>
  <div class="dropdown-menu" aria-labelledby="navbarDropdown" id="more-header-menu">
      ${otherMenuHtml}
  </div>
</li>
  `
})


