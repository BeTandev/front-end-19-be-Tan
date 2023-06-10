const inputForm = document.getElementById('input-form')
const inputName = document.getElementById('input-name')
const inputEmail = document.getElementById('input-email')
const inputPassword = document.getElementById('input-password')
const inputPhone = document.getElementById('input-phone')
const inputAddress = document.getElementById('input-address')


inputForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = inputName.value.trim()
    const email = inputEmail.value.trim()
    const password = inputPassword.value.trim()
    const phone = inputPhone.value.trim()
    const address = inputAddress.value.trim()

    const data = {name,email,password,phone,address}

    API.post('users/register', data).then((res) => {
        // API.post('/auth/login', {email: data.email, password: data.password}).then((res) => {
        //     localStorage.setItem('login_form', res.data.access_token)
        //     window.location.href = "index.html"
        // }).catch((err) => {
        //     alert('Thông tin nhập chưa đúng')
        // })
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
})