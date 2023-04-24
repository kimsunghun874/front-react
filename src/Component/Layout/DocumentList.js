import React, { Component } from "react";
import Global from "../global/Global";
import DocumentListComponent from "../Document/DocumentListComponent";
class documentList extends Component {
  render() {
    return (
      <div>
        <Global />
        <DocumentListComponent />
      </div>
    );
  }
}
export default documentList;
