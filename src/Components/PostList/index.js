import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchPostsList } from '../../Redux/Actions'
import PostItem from '../PostItem'

class PostList extends Component {

  componentDidMount() {
    this.props.fetchPostsList()
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
  fetchPostsList
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
