import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../../Redux/Actions'
import PostItem from '../PostItem'

class PostList extends Component {

  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    const { isLoading, posts } = this.props
      return (
        <div>
          {isLoading && <div>is loading...</div>}
          <ul>
            {
              posts.map(post => <li><PostItem post={post} /></li>)
            }
          </ul>
        </div>
      )
     }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    posts: state.posts,
    isLoading: state.isLoading,
  }
}

const mapDispatchToProps = {
  fetchPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
