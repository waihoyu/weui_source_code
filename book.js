
//正则表达式

// /1[345789]\d{9}/.test('13701343809')
// /^1[345789]\d{9}$/.test('13701343809')

 function Book (isbn,title,author) {
    this._setIsbn(isbn);
    this.title = title || '未给标题';
    this.author = author ||'未给作者';
}

Book.prototype._setIsbn = function(isbn){
    

}
Book.prototype.borrow = function(){


}
Book.prototype._checkIsbn = function(){
 return /[0-9]{10}/.test(isbn);
}

Book.prototype.getTitle = function(){

    return this.title;
}

var book = new Book('11','22','33');