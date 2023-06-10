dayjs.extend(window.dayjs_plugin_relativeTime)
dayjs.locale('vi')

const elArticlesLatest = document.getElementById('articles-latest');
const elArticlesPopular = document.getElementById('articles-popular');
const elArticlesGeneral = document.getElementById('articles-general');
const btnLoadMoreGeneral = document.getElementById('btn-load-more-general');
const elFeaturedCategories = document.getElementById('featured-categories');
const title = document.querySelector('title')
const elMainMenu = document.getElementById('main-menu')

const ACCESS_TOKEN = localStorage.getItem('login_form')

// query string
// ?id=12&abc=123&xyz=dsfsdfsf
// id, abc, xyz => url parameters

API.get('/auth/me', {
  headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
  }
}).then((res) => {
  console.log(res)
  const userInfo = res.data.data
  console.log(userInfo)
  elMainMenu.innerHTML += `
      <li>
          ${userInfo.name}
          <ul>
              <li><a href="profile.html">Profile</a></li>
              <li><a href="" class="btn-logout">Logout</li>
          </ul
      </li>
  `
}).catch((err) => {
  elMainMenu.innerHTML = `<li><a href="login.html">Login</a></li>`
})



// Render Articles Latest
API.get('articles?limit=3').then((response) => {
  const posts = response.data.data;
  let html = '';
  posts.forEach((item) => {
    const classLiked = likePost.includes(item.id) ? 'liked' : '';
    html += `<div class="col-lg-4 col-md-6 mb-4">
    <div class="top-pic1" style="background: url(${item.thumb}) no-repeat; background-size: cover; background-position: center">
      <div class="card-body blog-details">
        <a href="detail.html?id=${item.id}" class="blog-desc">${item.title}</a>
        <div class="author align-items-center">
          <img src="assets/images/a1.jpg" alt="" class="img-fluid rounded-circle" />
          <ul class="blog-meta">
            <li>
              <a href="author.html">${item.author}</a> </a>
            </li>
            <li class="meta-item blog-lesson">
              <span class="meta-value"> ${dayjs(item.publish_date).fromNow()} </span>. <span><i class="fa-solid fa-heart icon-like ${classLiked}" data-id = "${item.id}"></i></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>`;
  });
  elArticlesLatest.innerHTML = html
});

// Render Articles Popular
API.get('articles/popular?limit=3').then((response) => {
  const posts = response.data.data;
  let html = '';
  posts.forEach((item) => {
    html += `
    <div class="col-lg-4 col-md-6 item">
      <div class="card h-100">
        <div class="card-header p-0 position-relative">
          <a href="blog-single.html">
            <img class="card-img-bottom d-block radius-image-full" src="${item.thumb}"
              alt="Card image cap">
          </a>
        </div>
        <div class="card-body blog-details">
          <span class="label-blue">${item.category.name}</span>
          <a href="detail.html?id=${item.id}" class="blog-desc">${item.title}</a><i class="fa-solid fa-heart icon-like" data-id = "${item.id}"><p class="custom-like">Like</p></i>
          <p class="zvn-line-clamp-3">${item.description}</p>
          <div class="author align-items-center mt-3">
            <img src="assets/images/a1.jpg" alt="" class="img-fluid rounded-circle" />
            <ul class="blog-meta">
              <li>
                <a href="author.html">${item.author}</a>
              </li>
              <li class="meta-item blog-lesson">
                <span class="meta-value"> ${dayjs(item.publish_date).fromNow()} </span>. <span class="meta-value ml-2"><span
                    class="fa fa-clock-o"></span> 1 min</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>`
  });
  elArticlesPopular.innerHTML = html;
});

API.get('categories_news/featured?limit=4').then((response) => {
  const categories = response.data.data;
  let html = '';

  categories.forEach((category) => {
    html += /* html */`
    <div class="col-lg-3 col-6 grids-feature mt-3">
      <a href="category.html?id=${category.id}">
        <div class="area-box">
          <h4 class="title-head">${category.name}</h4>
        </div>
      </a>
    </div>`;
  });

  elFeaturedCategories.innerHTML = html;
});

// Render Articles General
let currentPage = 1;
renderArticlesGeneral(currentPage);

btnLoadMoreGeneral.addEventListener('click', () => {
  currentPage++;
  // disable button
  btnLoadMoreGeneral.disabled = true;
  btnLoadMoreGeneral.innerHTML = '<i class="fa fa-spinner fa-spin" aria-hidden="true"></i> Đang tải';
  renderArticlesGeneral(currentPage);
});

function renderArticlesGeneral(page = 1) {
  API.get(`articles?limit=4&page=${page}`).then((response) => {
    const posts = response.data.data;
    let html = '';
    posts.forEach((item) => {
      html += `
      <div class="col-lg-6 mb-4">
        <div class="bg-clr-white hover-box h-100">
          <div class="row h-100">
            <div class="col-sm-5 position-relative">
              <a href="blog-single.html" class="image-mobile h-100 d-block">
                <img class="card-img-bottom d-block radius-image-full zvn-img-full-height" src="${item.thumb}"
                  alt="${item.title}">
              </a>
            </div>
            <div class="col-sm-7 card-body blog-details align-self">
              <a href="detail.html?id=${item.id}" class="blog-desc">${item.title}</a><i class="fa-solid fa-heart icon-like" data-id = "${item.id}"><p class="custom-like">Like</p></i>
              <div class="author align-items-center">
                <img src="assets/images/a1.jpg" alt="" class="img-fluid rounded-circle" />
                <ul class="blog-meta">
                  <li>
                    <a href="author.html">${item.author}</a> </a>
                  </li>
                  <li class="meta-item blog-lesson">
                    <span class="meta-value">${dayjs(item.publish_date).fromNow()}</span>. <span class="meta-value ml-2"><span
                        class="fa fa-clock-o"></span> 1 min</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>`
    });
    elArticlesGeneral.innerHTML += html;
    btnLoadMoreGeneral.disabled = false;
    btnLoadMoreGeneral.innerHTML = 'Xem thêm';
  });
}
