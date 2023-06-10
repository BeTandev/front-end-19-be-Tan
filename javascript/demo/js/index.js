dayjs.extend(window.dayjs_plugin_relativeTime)
dayjs.locale('vi')

const moiNhat = document.getElementById('moinhat')
const xemNhieu = document.getElementById('xemnhieu')
let likePost = JSON.parse(localStorage.getItem('likePost')) || []
const elMainMenu = document.getElementById('main-menu')

const ACCESS_TOKEN = localStorage.getItem('login_form')
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

elMainMenu.addEventListener('click', (e) => {
    e.preventDefault()
    const el = e.target
    if(el.classList.contains('btn-logout')){
        API.post('/auth/logout', {}, {
            headers: {
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            }
        }).then((res) => {
            localStorage.removeItem('login_form')
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }})

moiNhat.addEventListener('click', (e) => {
    const el = e.target
    if(el.classList.contains('icon-like')){
        const id = parseInt(el.dataset.id)
        if(el.classList.contains('liked')){
            el.classList.remove('liked')
            likePost = likePost.filter(likedID => likedID !== id)
            console.log(likePost)
        }else{
            el.classList.add('liked')
            likePost.push(id)
            Toastify({
                text: "This is a toast",
                duration: 3000,
            }).showToast();
        }
        localStorage.setItem('likePost', JSON.stringify(likePost))
    }
})

API.get('/articles?limit=4').then(function(response){
    const posts = response.data.data
    let html = ''
    posts.forEach(item => {
      const classLiked = likePost.includes(item.id) ? 'liked' : '';
      html += `
      <li>
        <a href="detail.html?id=${item.id}"><h3>${item.id} - ${item.title} <i class="fa-solid fa-heart icon-like ${classLiked}" data-id = "${item.id}"></i></h3></a>
        <p>${dayjs(item.publish_date).fromNow()}</p>
      </li>`
    })
    moiNhat.innerHTML = html
    xemNhieu.innerHTML = html
  })

