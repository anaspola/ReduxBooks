import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetails extends Component{
  render(){
    if(!this.props.book){
      return <div>Select a book to get started</div>
    }
    return(
      <div className="col-md-4">
        <h6>BOOK DETAILS : </h6>
        <h3>{this.props.book.title}</h3>
        <div>Total Pages : {this.props.book.pages}</div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    book : state.activeBooks
  }
}

export default connect(mapStateToProps)(BookDetails);
