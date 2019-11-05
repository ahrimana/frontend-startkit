import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import Template from 'templates/default'
import store from 'store'
import Button from '@material-ui/core/Button'
import styles from './styles'
import TildaButton from 'components/atoms/tilda-button'
import BlogStripe from 'components/organisms/blog-stripe'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField';
import { withRouter} from 'react-router-dom'


@observer
class Blog extends Component {
  
  state={
    add:false,
    title: '',
  }
  
  componentWillMount() {
    store.title.title = 'Blog';
  }

  handleClick = () => {
    store.blog.list.push({
	  id:5,
	  title:'test123',
	  text:'nestonestonesto',
	})
  }
  
  handleAdd = () =>{
    console.log('add')
    this.setState({add:true})
  }
  
  handleCancel = () =>{
    this.setState({add:false})
  }
  
   handleSubmit = async () =>{
    const{ error, blog } = store
    const response=await blog.create(this.state.title)
    if (response.status >=400){
      error.message='Greska'
      error.open=true
    } else if (response.status===200){
      this.props.history.push(`/blog/${response.id}`)
    }
  }

  handleChange = (event) =>{
    this.setState({ title: event.target.value })
  }
  
  render() {
      const blogsVeiw = store.blog.list.map((blog) => {
          return (
              <BlogStripe blog={blog} key={blog.id}/>
          )
      });

    return (
      <Template style={{}}>
        <Dialog open={this.state.add} onClose={this.handleCancel}>
          <DialogTitle> Create Post </DialogTitle>
            <TextField
              label="Title"
              margin="normal"
              variant="outlined"
              onChange={this.handleChange}
              value={this.state.title}
            />
            <Button variant="contained" 
              color="primary"
              onClick={this.handleSubmit}
            >
              Create
            </Button>
            <Button variant="outlined" 
              color="secondary" 
              onClick={this.handleCancel}
            >
              Cancel
              </Button>
          </Dialog>
          <div style={styles.content}>
            <div className="wrapper">
              <h1>Photography Blog</h1>
              <h3>Lorem ipsum dolor est satum itc serum</h3>
            <Button variant="contained" color="secondary" onClick={this.handleClick}>
                Hello World!
            </Button>
            <TildaButton style={styles.tb}>Tilda</TildaButton>
          </div>
            <div style={styles.lista}>
              {blogsVeiw}
              <div style={styles.lista.div}>
                Nesto
              </div>
              <Fab color="primary" onClick={this.handleAdd}>
                <AddIcon />
              </Fab>
            </div>
        </div>
      </Template>
    )
  }
}

Blog.propTypes = {
  store: PropTypes.shape({
    title: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    todo: PropTypes.shape({
      addTodo: PropTypes.func.isRequired,
      todos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    }).isRequired,
  }),
}

export default withRouter(Blog)
