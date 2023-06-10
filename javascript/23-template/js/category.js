// URLSearchParams lấy đường link 
const urlParams = new URLSearchParams(window.location.search);
const id = parseInt(urlParams.get('id'))
console.log(id);
const Article = document.getElementById('article')
const url = `/categories_news/${id}/articles?limit=4`
const titleHeader = document.getElementById('title-header')
const btnNext = document.getElementById('btn-next')
const btnPrev = document.getElementById('btn-prev')


API.get(url).then(function(response){
const posts = response.data.data
let html = ''
posts.forEach(item => {
        html += renderArticle(item)
        titleHeader.innerText = item.category.name
})
    Article.innerHTML = html
})

currentPage = 1
btnNext.addEventListener('click', (e) => {
    e.preventDefault()
    currentPage++
    renderArticles(currentPage)
})
btnPrev.addEventListener('click', (e) => {
    e.preventDefault()
    currentPage--
    renderArticles(currentPage)
})

function renderArticles(page = 1){
    API.get(`/categories_news/${id}/articles?limit=4&page=${page}`).then(function(response){
        const posts = response.data.data
        let html = ''
        posts.forEach(item => {
                html += renderArticle(item)
                titleHeader.innerText = item.category.name
        })
            Article.innerHTML = html
        })
}

function renderArticle(data){
    return `
    <div class="col-lg-6 mt-4">
        <div class="bg-clr-white hover-box" >
            <div class="row">
                <div class="col-sm-5 position-relative">
                    <a href="${data.link}" class="image-mobile">
                        <img class="card-img-bottom d-block radius-image-full" style="height: 100%;
                        object-fit: cover;" src="${data.thumb}" alt="Card image cap">
                    </a>
                </div>
                <div class="col-sm-7 card-body blog-details align-self">
                    <a href="blog-single.html" class="blog-desc">${data.title}</a>
                    <div class="author align-items-center">
                        <img src="assets/images/a1.jpg" alt="" class="img-fluid rounded-circle">
                        <ul class="blog-meta">
                            <li>
                                <a href="author.html">${data.author}</a> 
                            </li>
                            <li class="meta-item blog-lesson">
                                <span class="meta-value">${data.publish_date}</span>. <span class="meta-value ml-2"><span class="fa fa-clock-o"></span> 1 min</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>`
}