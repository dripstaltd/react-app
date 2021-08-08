import React from 'react';

// export default function HelloWorld(props) {
//   return <h1>Hello {props.name}</h1>;
// }
class HelloWorld extends React.PureComponent {
  render() {
    return (
      <div>
        <p className=""> Hello {this.props.name}</p>
      </div>
    );
  }
}

export default HelloWorld;
