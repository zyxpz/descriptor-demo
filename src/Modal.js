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
    return (
      <Modal
        visible
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >弹窗</Modal>
    )
  }
}

export default PopUp;