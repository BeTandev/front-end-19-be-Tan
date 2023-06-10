// fetch('https://apiforlearning.zendvn.com/api/v2/articles?limit=3')
//     .then(response => response.json())
//     .then(res => {
//         console.log('res', res)
//     })

// console.log('axios', axios)
const topPics = document.getElementById('top-pics')
const fashion = document.getElementById('fashion')
const general = document.getElementById('general')
const menuArticle = document.getElementById('menu-article')
const headerMenu = document.getElementById('header-menu')
const moreHeaderMenu = document.getElementById('more-header-menu')
const btnLoadMoreGeneral = document.getElementById('btn-load-more-general')


API.get('categories_news?limit=1').then(function(response){
  const posts = response.data.data
  let html = ''
  posts.forEach(item => {
    html += `<a class="nav-link" href="${item.link}">${item.name}</a>`
  })
  headerMenu.innerHTML = html
})
API.get('categories_news?limit=100').then(function(response){
  const posts = response.data.data
  let html = ''
  for(let i = 2; i < posts.length; i++){
      html += renderMoreHeaderMenu(posts[i])
    }
  moreHeaderMenu.innerHTML = html
})


API.get('categories_news/featured?limit=4').then(function(response){
  const posts = response.data.data
  let html = ''
  posts.forEach(item => {
    html += renderMenuArticle(item)
  })
  menuArticle.innerHTML = html
})

API.get('articles?limit=3').then(function (response) {
  const posts = response.data.data
  let html = ''
  // for(let i = 0; i < posts.length; i++){
  //   html += renderData(posts[i])
  //   topPics.innerHTML = html
  // }
  posts.forEach(item => {
    html += renderData(item)
  });
  topPics.innerHTML = html
})

API.get('articles/popular?limit=3').then(function (response) {
  const posts = response.data.data
  let html = ''
  posts.forEach(item => {
    html += renderFashion(item)
  });
  fashion.innerHTML += html
})


let currentPage = 1
renderGeneralPage(currentPage)


btnLoadMoreGeneral.addEventListener('click', function(){
  currentPage++
  btnLoadMoreGeneral.disabled = true
  btnLoadMoreGeneral.innerHTML = `<i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Dang tai`
  renderGeneralPage(currentPage)
})


function renderMoreHeaderMenu(data){
  return `<a class="dropdown-item @@b__active" href="${data.link}">${data.name}</a>`
}

function renderGeneralPage(page = 1){
  API.get(`articles?limit=4&page=${page}`).then(function (response) {
    const posts = response.data.data
    let html = ''
    posts.forEach(item => {
      html += renderGeneral(item)
    });
    general.innerHTML += html
    btnLoadMoreGeneral.disabled = false
    btnLoadMoreGeneral.innerHTML = `Xem them`
  })
}

function renderMenuArticle(data){
  return `
  <div class="col-lg-3 col-6 grids-feature mt-3">
      <a href="category.html?id=${data.id}">
          <div class="area-box">
              <h4 class="title-head">${data.name}</h4>
          </div>
      </a>
  </div>`
}

function renderData(data) {
  return `
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="top-pic1" style="background: url(${data.thumb}) no-repeat; background-size: cover; background-position: center">
          <div class="card-body blog-details">
              <a href="blog-single.html" class="blog-desc">${data.title}</a>
              <div class="author align-items-center">
                  <img src="assets/images/a1.jpg" alt="" class="img-fluid rounded-circle" />
                  <ul class="blog-meta">
                      <li>
                          <a href="author.html"></a>${data.author}</a>
                      </li>
                      <li class="meta-item blog-lesson">
                          <span class="meta-value">${data.publish_date}</span>. <span
                              class="meta-value ml-2"><span class="fa fa-clock-o"></span> 1 min</span>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    </div>`
}

function renderFashion(data) {
  return `
    <div class="col-lg-4 col-md-6 item">
        <div class="card h-100">
            <div class="card-header p-0 position-relative">
                <a href="blog-single.html">
                    <img class="card-img-bottom d-block radius-image-full" src="${data.thumb}"
                        alt="Card image cap">
                </a>
            </div>
            <div class="card-body blog-details">
                <span class="label-blue">${data.category.name}</span>
                <a href="blog-single.html" class="blog-desc">${data.title}</a>
                <p class="limit-line">${data.description}}</p>
                <div class="author align-items-center">
                    <img src="assets/images/a1.jpg" alt="" class="img-fluid rounded-circle" />
                    <ul class="blog-meta">
                        <li>
                            <a href="author.html">${data.author}</a> </a>
                        </li>
                        <li class="meta-item blog-lesson">
                            <span class="meta-value">${data.publish_date}</span>. <span
                                class="meta-value ml-2"><span class="fa fa-clock-o"></span> 1 min</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`
}

function renderGeneral(data){
  return `
    <div class="col-lg-6 mb-4">
        <div class="bg-clr-white hover-box h-100">
            <div class="row h-100">
                <div class="col-sm-5 position-relative">
                    <a href="blog-single.html" class="image-mobile h-100 d-block">
                        <img class="card-img-bottom d-block radius-image-full img-full-height"
                            src="${data.thumb}">
                    </a>
                </div>
                <div class="col-sm-7 card-body blog-details align-self">
                    <a href="blog-single.html" class="blog-desc">${data.title}</a>
                    <div class="author align-items-center">
                        <img src="assets/images/a1.jpg" alt="" class="img-fluid rounded-circle" />
                        <ul class="blog-meta">
                            <li>
                                <a href="author.html">${data.author}</a> </a>
                            </li>
                            <li class="meta-item blog-lesson">
                                <span class="meta-value">${data.publish_date}</span>. <span
                                    class="meta-value ml-2"><span class="fa fa-clock-o"></span> 1 min</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `
}

console.log(today)
year = today.getFullYear()
month = today.getMonth() + 1 
day = today.getDay()
hour = today.getHours()
minute = today.getMinutes()

API.get(`articles?limit=4`).then(function (response) {
  const posts = response.data.data
  let html = ''
  for(let i = 3; i < posts.length; i++) {
    let dateOfArticle = new Date(posts[i].publish_date)
    let yearOfArticle = year - dateOfArticle.getFullYear()
    let monthOfArticle
    monthOfArticle = (year - dateOfArticle.getFullYear()) * 12;
    monthOfArticle -= dateOfArticle.getMonth() + 1
    monthOfArticle += month
    let checkMonth = month - dateOfArticle.getMonth() + 1
    let checkDay = day - dateOfArticle.getDay()
    let dayOfArticle = (day - dateOfArticle.getDay())
    dayOfArticle -= dateOfArticle.getDay()
    dayOfArticle += day

    if(yearOfArticle <= 0){
      if(checkMonth = 0){
        if(checkDay = 0){

        }else{
          var dayOfArticleText = `${dayOfArticle} ngày trước`
        }
      }else{
        var monthOfArticleText = `${monthOfArticle} tháng trước`
      }
    }else{
      var yearOfArticleText = `${yearOfArticle} năm trước`
    }
    
    console.log(dateOfArticle)
    console.log(dayOfArticle)
  }});