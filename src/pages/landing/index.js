import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Template from 'templates/default';
import store from 'store';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import styles from './styles';
import TildaButton from 'components/atoms/tilda-button';
import UserStripe from 'components/organisms/user-stripe';


@observer
class Landing extends Component {
  componentWillMount() {
    store.title.title = 'Landing';
  }

  handleClick = () => {
    store.user.fetchAll()
  }

  render() {
      const usersVeiw = store.user.list.map((user) => {
          return (
              <UserStripe user={user} key={user.id}/>
          )
      });

    return (
      <Template style={{}}>
        <div style={styles.content}>
          <div className="wrapper">
            <h1>Welcome to Maja Mekic Photography</h1>
            <h3>Lorem ipsum dolor est satum itc serum</h3>
            <Button variant="contained" color="secondary" onClick={this.handleClick}>
                Hello World!
            </Button>
            <TildaButton style={styles.tb}>Tilda</TildaButton>
          </div>
            <List style={styles.lista}>
              {usersVeiw}
            </List>
        </div>
      </Template>
    )
  }
}


Landing.propTypes = {
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

export default Landing
