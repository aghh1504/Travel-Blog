import React, {Component} from 'react'
import { connect } from 'react-redux'
import { updatePost } from '../../Redux/Actions'

class PostItem extends Component {

  save = (event) => {
    const updatedPost = {...this.props, name: event.target.value};
    this.props.updatePost(updatedPost);
  };

  render() {
      return (
        <div>
          <input value={this.props.name} onChange={this.save} />
          {this.props.description}
        </div>
      )
     }
}

const mapStateToProps = (state, props) => {
  return {
    ...state.posts.find(post => Number(post.id) === Number(props.id))
  }
};

const mapDispatchToProps = {
  updatePost
};

export default connect(mapStateToProps, mapDispatchToProps)(PostItem)
