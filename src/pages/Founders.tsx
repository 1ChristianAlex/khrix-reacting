import React from 'react';
interface FProps {
  name: string;
}
export class Founders extends React.Component<FProps> {
  constructor(props: FProps) {
    super(props);
  }
  render() {
    return <h1>Founders {this.props.name}</h1>;
  }
}
