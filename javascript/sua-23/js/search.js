dayjs.extend(window.dayjs_plugin_relativeTime)
dayjs.locale('vi')

const params = new URLSearchParams(window.location.search);
const keyword = params.get('keyword')
const elArticles1 = document.getElementById('articles1')
API.get(`articles/search?q=${keyword}&limit=4&page=2`).then(res => {
    console.log(res)
    const posts = res.data.data
    let html = ``
    posts.forEach((item) => {
        html += renderArticlePopularItem(item)
    })
    elArticles1.innerHTML = html
})

const elArticles = document.getElementById('articles');
const elCategoryName = document.getElementById('category-name');
const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');
const Pagination = document.getElementById('pagination')

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
  

function renderArticlePopularItem(data) {
    return /* html */`
    <div class="col-lg-4 col-md-6 item mb-4">
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
          <p class="zvn-line-clamp-3">${data.description}</p>
          <div class="author align-items-center mt-3">
            <img src="assets/images/a1.jpg" alt="" class="img-fluid rounded-circle" />
            <ul class="blog-meta">
              <li>
                <a href="author.html">${data.author}</a>
              </li>
              <li class="meta-item blog-lesson">
                <span class="meta-value"> ${dayjs(data.publish_date).fromNow()} </span>. <span class="meta-value ml-2"><span
                    class="fa fa-clock-o"></span> 1 min</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>`;
  }