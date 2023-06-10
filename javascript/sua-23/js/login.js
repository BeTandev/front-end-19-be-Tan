const elLoginForm = document.getElementById('login')
const inputEmail = document.getElementById('email')
const inputPassword = document.getElementById('password')

elLoginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = inputEmail.value.trim()
    const password = inputPassword.value.trim()
    console.log(email, password)
    const data = {email,password}

    API.post('/auth/login', data).then((res) => {
        localStorage.setItem('login_form', res.data.access_token)
        window.location.href = "index.html"
    }).catch((err) => {
        alert('Thông tin nhập chưa đúng')
    })
})