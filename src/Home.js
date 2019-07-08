import { React, ReactDom } from 'midoReact';

import Modal from './Modal';

const {
  Component
} = React;

const {
  render
} = ReactDom;

class Home extends Component {

  click = () => {
    Modal.popup(
      <div>我是弹层</div>,
      {
        visible: true,
        okText: '确定',
        ok() {
          console.log('确定')
        },
        cancel() {
          console.log('取消')
        }
      }
    );
  }

  render() {
    return (
      <div onClick={() => { this.click() }}>点我</div>
    )
  }
}

render(<Home />, document.querySelector('.app'));