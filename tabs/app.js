const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e){
    //this will check to see what the data-id is for the html element that is clicked if it has one.
    //console.log(e.target.dataset.id);
    let selectedId = e.target.dataset.id;
if(selectedId != undefined){
    btns.forEach(function(btn){
        btn.classList.remove("active");
        e.target.classList.add("active");
    })

    articles.forEach(function(article){
        article.classList.remove("active")
    })

    const element = document.getElementById(selectedId);
    element.classList.add("active");
}
})