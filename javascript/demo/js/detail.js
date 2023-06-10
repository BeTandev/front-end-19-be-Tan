const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));
const btnSendComment = document.getElementById('btn-send-comment')
const Name = document.getElementById('name')
const Content = document.getElementById('content')
const elComments = document.getElementById('comments')
const postsViewed = document.getElementById('posts-viewed')
const messageComment = document.getElementById('message-comment')
let parentCommentID = ''

console.log(id);

API.get(`articles/${id}`).then(res =>{
    console.log(123)
}).catch((err) => {
    window.location.href = "index.html"
})

const TOTAL_COMMENTS = JSON.parse(localStorage.getItem('COMMENT')) || []
const POSTS_VIEWED = JSON.parse(localStorage.getItem('POSTS_VIEWED')) || []
if(!POSTS_VIEWED.includes(id)){
    POSTS_VIEWED.push(id)
    localStorage.setItem('POSTS_VIEWED',JSON.stringify(POSTS_VIEWED))
}

POSTS_VIEWED.forEach(postId => {
    API.get(`articles/${postId}`).then(res =>{
        const post = res.data.data
        postsViewed.innerHTML += `<li>${post.id} - ${post.title}</li>`
    })
})

elComments.addEventListener('click', function(e){
    const el = e.target
    if(el.classList.contains('btn-reply')){
        const commentId = el.dataset.id
        messageComment.innerHTML = `Tra loi comment cuar ${commentId} <button class="btn-cancel-comment" type="button">Huy</button>`
        parentCommentID = commentId
    } 
})

messageComment.addEventListener('click',(e) => {
    const el = e.target
    if(el.classList.contains("btn-cancel-comment")){
        messageComment.innerHTML = ''
    }
})

renderComment()

btnSendComment.addEventListener('click', () => {
    let comment = {
        id: createId(),
        name: Name.value,
        content: Content.value,
        dateTime: getCurrentDateTime(),
        articleId: id
    }
    if(parentCommentID){
        let parentCommentIndex = TOTAL_COMMENTS[id].findIndex(item => item.id === parentCommentID)
        const hasChildItem = TOTAL_COMMENTS[id][parentCommentIndex].childItem
        if(hasChildItem){
           TOTAL_COMMENTS[id][parentCommentIndex].childItem.push(comment) 
        }
        else{
            TOTAL_COMMENTS[id][parentCommentIndex].childItem = [Comment]
        }
        
    }else{
        TOTAL_COMMENTS[id].push(comment)
    }
    parentCommentID = ''
    messageComment.innerHTML = ''
    localStorage.setItem('COMMENT', JSON.stringify(TOTAL_COMMENTS))
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
    console.log(TOTAL_COMMENTS)
    const COMMENTS = TOTAL_COMMENTS[id]
    console.log(COMMENTS)
    let html = ''
    COMMENTS.forEach(item => {
        html += `<li>${item.id} - ${item.name} - ${item.content} - ${item.dateTime}</li> || <button type="button" class="btn-reply" data-id="${item.id}">Tra loi</button>`
    })
    elComments.innerHTML = html
}