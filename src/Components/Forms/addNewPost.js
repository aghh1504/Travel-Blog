import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addPost } from '../../Redux/Actions'

class AddPost extends Component {

  state = {
    value: ''
  }

  addPost = (event) => {
    const updatedPost = {...this.props, name: event.target.value};
    this.props.addPost(updatedPost);
  };

  onChange = (e) => {
    this.setState({value: e.target.value})
  }

  render() {
      return (
        <div>
          <form onSubmit={this.addPost}>
            <input value={this.state.value} onChange={this.onChange} />
          </form>
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
  addPost
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPost)
