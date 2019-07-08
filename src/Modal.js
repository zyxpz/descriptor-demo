import { React } from 'midoReact';

import View from './view';

import { Modal } from 'antd';

const {
  Component
} = React;

@View()

class PopUp extends Component {

  render() {
    const {
      renderDom,
      opts
    } = this.props;

    return (
      <Modal
      {
        ...opts
      }
      >{renderDom}</Modal>
    )
  }
}

export default PopUp;