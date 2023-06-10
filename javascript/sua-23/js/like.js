let likePost = JSON.parse(localStorage.getItem('likePost')) || []
document.addEventListener('click', (e) => {
    liked(e)
})

function liked(event){
    const el = event.target
    if(el.classList.contains('icon-like')){
        const id = parseInt(el.dataset.id)
        if(el.classList.contains('liked')){
            el.classList.remove('liked')
            likePost = likePost.filter(likedID => likedID !== id)
            Toastify({
                text: "Bạn đã bỏ thích bài viết",
                duration: 3000,
            }).showToast();
        }else{
            el.classList.add('liked')
            likePost.push(id)
            Toastify({
                text: "Bạn đã thích bài viết",
                duration: 3000,
                style: {
                    background: "linear-gradient(to right, #e76c6c, #ed3131)",
                },
            }).showToast();
        }
        localStorage.setItem('likePost', JSON.stringify(likePost))
    }
}