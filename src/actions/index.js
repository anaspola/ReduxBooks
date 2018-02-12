export function selectBook(book){
  console.log("Seletced Book", book.title);
  return{
    type : 'BOOK_SELECTED',
    payload : book
  }
}
