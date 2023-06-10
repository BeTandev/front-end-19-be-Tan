// todo -> giá trị của param [id] -> js get url parameter
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));

dayjs.extend(window.dayjs_plugin_relativeTime)
dayjs.locale('vi')

const elArticles = document.getElementById('articles');
const elCategoryName = document.getElementById('category-name');
const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');
const Pagination = document.getElementById('pagination')

let currentPage = 1;
renderArticles(currentPage);

// btnNext.addEventListener('click', (e) => {
//   e.preventDefault();
//   currentPage++;
//   renderArticles(currentPage);
// });

// btnPrev.addEventListener('click', (e) => {
//   e.preventDefault();
//   currentPage--;
//   renderArticles(currentPage);
// });

function renderArticles(page = 1) {
  API.get(`categories_news/${id}/articles?limit=10&page=${page}`).then((response) => {
    const articles = response.data.data;
    let html = '';
    articles.forEach((article) => {
      elCategoryName.innerText = article.category.name;
      html += renderArticleItem(article);
    });
    elArticles.innerHTML = html;
    const totalPage = response.data.meta.last_page
    renderPagination(totalPage, page)
  });
}

function renderArticleItem(article) {
  const classLiked = likePost.includes(article.id) ? 'liked' : '';
  return `
  <div class="col-lg-6 mb-4">
    <div class="bg-clr-white hover-box">
      <div class="row">
        <div class="col-sm-5 position-relative">
          <a href="blog-single.html" class="image-mobile d-block h-100">
            <img class="card-img-bottom d-block radius-image-full zvn-img-full-height" src="${article.thumb}"
              alt="${article.title}">
          </a>
        </div>
        <div class="col-sm-7 card-body blog-details align-self">
          <a href="detail.html?id=${article.id}" class="blog-desc">${article.title}</a><span><i class="fa-solid fa-heart icon-like ${classLiked}" data-id = "${article.id}"></i></span>
          <div class="author align-items-center">
            <img src="assets/images/a1.jpg" alt="" class="img-fluid rounded-circle">
            <ul class="blog-meta">
              <li>
                <a href="author.html">${article.author}</a>
              </li>
              <li class="meta-item blog-lesson">
                <span class="meta-value"> ${dayjs(article.publish_date).fromNow()} </span>. <span class="meta-value ml-2"><span
                    class="fa fa-clock-o"></span> 1 min</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

const PAGE_RANGE = 5
function renderPagination(totalPage, page=1){
  let html = ``
  let start = 1
  let end = PAGE_RANGE

  if(page > PAGE_RANGE && page % PAGE_RANGE === 1){
    start = page
    end = page + PAGE_RANGE - 1
  }
  console.log('start', start)
  console.log('end', end)

  for (let i = start; i <= end; i++){
    const active = page === i ? 'current' : ''
    html += `<li><a class="page-numbers ${active} page-item" href="#" id="check-number">${i}</a></li>`
  }
  const disabledPrev = page === 1 ? 'disabled' : ''
  const disabledNext = page === totalPage ? 'disabled' : ''
  Pagination.innerHTML = `
  <li><a class="page-numbers btn-paginate ${disabledPrev}" href="#" id="btn-prev">Prev</a></li>
  ${html}
  <li><a class="page-numbers btn-paginate ${disabledNext}" href="#" id="btn-next">Next</a></li>
  `
}
Pagination.addEventListener('click', function(e){
    e.preventDefault()
    const el = e.target
    if(el.classList.contains('page-item')){
      currentPage = parseInt(el.innerText)
      renderArticles(currentPage)
    }
    if(el.classList.contains('btn-paginate')){
      if(el.id === 'btn-prev'){
        currentPage--
      }
      else{
        currentPage++
      }
      renderArticles(currentPage)
    }
  })
