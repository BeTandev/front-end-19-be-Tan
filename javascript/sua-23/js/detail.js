dayjs.extend(window.dayjs_plugin_relativeTime)
dayjs.locale('vi')

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));
const Name = document.getElementById('Name')
const Email = document.getElementById('Email')
const Content = document.getElementById('Content')
const Comments = document.getElementById('recent-comment')
const btnSendComment = document.getElementById('btn-send-comment')
const title = document.querySelector('title')
const lienQuan = document.getElementById('recent')
const likedPosts = document.getElementById('liked-posts')

API.get(`articles/${id}`).then((res) => {
    const posts = res.data.data
    title.innerText = posts.title
    document.getElementById('title-content').innerText = posts.title
    document.getElementById('post-time').innerHTML = dayjs(posts.publish_date).fromNow()
    document.getElementById('post-author').innerHTML = posts.author
    document.getElementById('post-category').innerHTML = posts.category.name
    document.getElementById('post-description').innerHTML = posts.description
    document.getElementById('post-image').innerHTML = `<img src="${posts.thumb}" alt="" class="img-fluid radius-image-full d-block image-custom custom-img">`
    document.getElementById('content').innerHTML = posts.content
})

const TOTAL_COMMENTS2 = JSON.parse(localStorage.getItem('COMMENT2')) || []
const likePost = JSON.parse(localStorage.getItem('likePost') || [])

renderComment()

btnSendComment.addEventListener('click', () => {
    let comment = {
        id: createId(),
        name: Name.value,
        email: Email.value,
        content: Content.value,
        dateTime: new Date(),
        articleId: id
    }
    TOTAL_COMMENTS2.push(comment)
    localStorage.setItem('COMMENT2', JSON.stringify(TOTAL_COMMENTS2))
    renderComment()
})

function createId(length = 8) {
    // trả về id là một chuỗi ngẫu nhiên bao gồm 8 kí tự, A-Za-z0-9
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

function getCurrentDateTime() {
    const d = new Date();
    const currentTime = d.toLocaleTimeString('en-US', { hour12: false });
    const currentYear = d.getFullYear().toString();
    const currentMonth = d.getMonth() + 1;
    const finalCurrentMonth = currentMonth < 10 ? '0' + currentMonth.toString() : currentMonth.toString();
    const currentDay = d.getDate() + 1;
    const finalCurrentDay = currentDay < 10 ? '0' + currentDay.toString() : currentDay.toString();
    return `${currentYear}-${finalCurrentMonth}-${finalCurrentDay} ${currentTime}`;
}

function renderComment() {
    console.log(TOTAL_COMMENTS2)
    const COMMENTS2 = TOTAL_COMMENTS2.filter(item => item.articleId === id)
    console.log(COMMENTS2)
    let html = ''
    COMMENTS2.forEach(item => {
        // html += `<li>${item.name} - ${item.email} - ${item.content} - ${item.dateTime}</li>`
        html += `
        <div class="media-grid">
            <div class="media">
                <a class="comment-img" href="#url"><img src="assets/images/a1.jpg" class="img-responsive" width="100px" alt="placeholder image"></a>
                <div class="media-body comments-grid-right">
                    <h5>${item.name}</h5>
                    <ul class="p-0 comment">
                        <li class="">${dayjs(item.dateTime).fromNow()}</li>
                        <li>
                            <a href="#comment" class="text-primary">Reply</a>
                        </li>
                    </ul>
                    <p>${item.content}</p>

                </div>
            </div>
        </div>
        `
    })
    Comments.innerHTML = html
}

API.get(`/articles/${id}/related?limit=4`).then((res) => {
    const posts = res.data.data
    let html = ''
    posts.forEach((item) => {
        html += `
        <article class="post">
            <figure class="post-thumb"><img src="assets/images/beauty8.jpg" alt=""></figure>
            <div class="text"><a href="detail.html?q=${item.id}">
            ${item.title}</a>
            </div>
            <div class="post-info">${dayjs(item.publish_date).fromNow()}</div>
        </article>
        `
        lienQuan.innerHTML = html
    })
})

const likePostIndex = likePost.splice(-3)
likePostIndex.forEach(postId => {
    API.get(`articles/${postId}`).then(res => {
        const post = res.data.data
        let html = ''
        html += `
        <div class="col-lg-4 col-md-6 item">
            <div class="card">
                <div class="card-header p-0 position-relative">
                    <a href="detail.html?id=${post.id}">
                        <img class="card-img-bottom d-block radius-image-full" src="${post.thumb}"
                            alt="Card image cap">
                    </a>
                </div>
                <div class="card-body blog-details">
                    <span class="label-blue">Beauty</span>
                    <a href="detail.html?id=${post.id}" class="blog-desc">${post.title}</a>
                    <p>${post.description}</p>
                    <div class="author align-items-center mt-3 mb-1">
                        <img src="assets/images/a1.jpg" alt="" class="img-fluid rounded-circle">
                        <ul class="blog-meta">
                            <li>
                                <a href="author.html">${post.author}</a>
                            </li>
                            <li class="meta-item blog-lesson">
                                <span class="meta-value">${dayjs(post.publish_date).fromNow()}</span>. <span
                                    class="meta-value ml-2"><span class="fa fa-clock-o"></span> 1
                                    min</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        `
        likedPosts.innerHTML += html
    })
})