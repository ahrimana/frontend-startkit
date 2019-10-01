import React from 'react'
import Template from 'templates/default'
import store from 'store'
import {observer} from 'mobx-react' 
import styles from './styles'

@observer
class BlogDeatil extends React.Component {
  constructor(props){
    super(props)
    const {id} = props.match.params
    store.blog.fetch(id)
  }
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
