import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component{
  renderList(){
    return this.props.books.map((book)=>{
      console.log(book);
      return (
        <li
        onClick = {()=> this.props.selectedBook(book)}
        className="list-group-item"
        key={book.title}>
        {book.title}
        </li>
      )
    })
  }

  render(){
    console.log(this.props);
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  return{
    books: state.books
  }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectedBook:selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
