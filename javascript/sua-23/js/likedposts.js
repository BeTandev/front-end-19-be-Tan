dayjs.extend(window.dayjs_plugin_relativeTime)
dayjs.locale('vi')

const likedPosts = document.getElementById('likedposts')

const likePost = JSON.parse(localStorage.getItem('likePost') || [])

likePost.forEach(postId => {
    API.get(`articles/${postId}`).then(res => {
        const post = res.data.data
        let html = ''
        html += `
        <div class="col-lg-4 col-md-6 mb-3 rounded item">
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
                    <div class="author align-items-center mt-3 mb-1 d-float">
                        <img src="assets/images/a1.jpg" alt="" class="img-fluid rounded-circle col-lg-4">
                        <ul class="blog-meta" col-lg-12>
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