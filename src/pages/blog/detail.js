import React from 'react'
import Template from 'templates/default'
import store from 'store'
import styles from './styles'

class BlogDeatil extends React.Component {
  render () {
	return (
    <Template style={{}}>
      <div style={styles.detail}>
        <h1 style={styles.title}>{store.blog.detail.title}</h1>
        <div>
         {store.blog.detail.text}
        </div>
      </div>
    </Template>
   )
  }
}

export default BlogDeatil
