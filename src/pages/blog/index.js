import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Template from 'templates/default';
import store from 'store';
import Button from '@material-ui/core/Button';
import styles from './styles';
import TildaButton from 'components/atoms/tilda-button';
import BlogStripe from 'components/organisms/blog-stripe';


@observer
class Blog extends Component {
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

  render() {
      const blogsVeiw = store.blog.list.map((blog) => {
          return (
              <BlogStripe blog={blog} key={blog.id}/>
          )
      });

    return (
      <Template style={{}}>
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

export default Blog
