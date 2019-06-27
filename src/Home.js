import { React, ReactDom } from 'midoReact';

import Modal from './Modal';

const {
  Component
} = React;

const {
  render
} = ReactDom;

class Home extends Component {

  componentDidMount() {
    Modal.hide
  }

  click = () => {
    Modal.popup();
  }

  render() {
    return (
      <div onClick={() => { this.click() }}>点我</div>
    )
  }
}

render(<Home />, document.querySelector('.app'));