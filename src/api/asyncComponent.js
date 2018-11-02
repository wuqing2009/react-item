import React,{Component} from 'react'

export default function asyncComponent(importComponent,loading=null) {
    class AsyncComponent extends Component {
      constructor(props) {
        super(props);

        this.state = {
          component: loading
        };
      }

      async componentDidMount() {
        const { default: component } = await importComponent();

        this.setState({
          component: component
        });
        
      }

      render() {
        const C = this.state.component;
        if (loading) {
            console.log(11);
            return <C {...this.props}/>
        }else {
            console.log(C);

            return C ? <C {...this.props} /> : null;
        }
      }
    }

    return AsyncComponent;
  }