import React, { Component } from 'react';
import Post from '../blog/post';
import List from '../blog/list';


class Page extends Component {
  render() {
    if (this.props.postId) {

    }
    const content = this.props.postId ? <Post post={this.props.postId} /> : <List />
    return (
      <div className="Page-container">
        
      </div>
    );
  }
}

export default Page;
