const params = new URLSearchParams(window.location.search);
const keyword = params.get('keyword');
console.log(keyword)

API.get(`articles/search?q=${keyword}&limit=4`).then(function(response){
    console.log(response)
    const totalPosts = response.data.meta.total
    document.getElementById('title').innerHTML = `Tìm được ${totalPosts} kết quả với từ khóa "${keyword}"`
  })