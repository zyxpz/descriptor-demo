import { React } from 'midoReact';

import View from './view';

import { Modal } from 'antd';

const {
  Component
} = React;

@View()

class PopUp extends Component {

  handleOk = () => {
    this.props.onSure && this.props.onSure();
  }
  handleCancel = () => {
    this.props.onClose && this.props.onClose();
  }

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