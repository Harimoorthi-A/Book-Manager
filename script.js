function changeAddpage(){
    window.location='addpage.html'
}
function changeSearch(){
    window.location='searchpage.html'
}
function add(){
    bookName=bookName1.value
    author=author1.value
    description=description1.value
    cover=cover1.value
    if(bookName in localStorage){
        alert('book already existed')
    }
    else{
        book={bookName,author,description,cover}
        localStorage.setItem(bookName,JSON.stringify(book))
        alert("Book added sucessfully")

    }
    console.log(book);

}
function search(){
    book_name=searchAbook1.value
    if(book_name in localStorage){
        bookDetails=JSON.parse(localStorage.getItem(book_name))
        result.innerHTML +=`
        <div class="card" style="width: 18rem;">
            <img src="${bookDetails.cover}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${bookDetails.book_name}</h5>
                <p class="card-text">${bookDetails.author}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `
    }
    else{
        result.innerHTML=`<h1 class="text-danger">Book is not found</h1>`
    }
}