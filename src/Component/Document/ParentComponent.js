// ParentComponent.js

import React, { Component } from 'react';
import DocumentComponent from './DocumentComponent';

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: '',
      stampName: '',
    };
  }

  componentDidMount() {
    // 이 부분에서 API 호출 등을 통해 직급과 도장 이름 데이터를 가져옵니다.
    // 가져온 데이터를 state에 저장합니다.
    this.setState({
      position: '대리',
      stampName: '홍길동',
    });
  }

  render() {
    const { position, stampName } = this.state;
    return (
      <div>
        <DocumentComponent position={position} stampName={stampName} />
      </div>
    );
  }
}

export default ParentComponent;
