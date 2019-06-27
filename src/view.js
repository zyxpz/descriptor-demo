import { React, ReactDom } from 'midoReact';

const {
  Component
} = React;


export default (opts = {}) => WrapWithView => {

  const target = document.querySelector('body');

  const container = document.createElement('div');

  const render = (opts, show) => {

    opts = {
      onCloseSoon: () => {
        ReactDom.unmountComponentAtNode(container);
        target.removeChild(container);
      },
      onSure: (res) => {
        opts.onCloseSoon();
      },
      onClose: (res) => {
        opts.onCloseSoon();
      },
    };

    let comp = ''

    target.appendChild(container)

    const element = (
      <Viewer
        {...opts}
        ref={instance => comp = instance}
      />
    )

    let callBack = () => (comp, opts.onSure, opts.onClose)


    if (show) {
      ReactDom.render(element, container, callBack);
    }
  }

  const popUp = (opts = {}) => {
    render(opts, true);
  }

  const hide = () => {
    console.log(1)
  }

  class Viewer extends Component {

    static popup = popUp;

    static hide = render.call(hide);

    constructor(params) {
      super(params);
    }

    render() {
      return (
        <WrapWithView {...this.props} />
      )
    }
  }

  return Viewer;
}