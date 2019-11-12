import React from 'react'
import Template from 'templates/default'
import store from 'store'
import {observer} from 'mobx-react'
import {
  Button,
  TextField,
} from '@material-ui/core'

import styles from './styles'

@observer
class BlogDeatil extends React.Component {
  constructor(props){
    super(props)
    const {id} = props.match.params
    store.blog.fetch(id)
  }

  state={
    titleEdit:false,
    title:'',
  }
 
  handleTitleEdit = () =>{
    this.setState({
      titleEdit:true,
      title:store.blog.detail.title,
    })
  }
  
  handleCancel = () =>{
    this.setState({
      titleEdit:false,
      title:'',
    })
  }
  
   handleChange = (event) =>{
    this.setState({ title: event.target.value })
  }
  
  
  render () {
    const title = this.state.titleEdit
    ?(
    <form>
      <TextField onChange={this.handleChange} 
       value={this.state.title} 
       autoFocus
      />
      <Button onClick={this.handleCancel}>Cancel</Button>
      <Button>OK</Button>
    </form>
    ):(
      <h1 style={styles.title}>{store.blog.detail.title}</h1>
    )
	  return (
      <Template style={{}}>
        <div style={styles.detail}>
          {title}
          <Button color="primary" 
            variant="contained"
            onClick={this.handleTitleEdit}
            >
              Edit
            </Button>
          <div>
           {store.blog.detail.text}
          </div>
        </div>
      </Template>
   )
  }
}

export default BlogDeatil
