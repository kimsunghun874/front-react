import React, { Component } from "react";
import Global from "../global/Global";
import { Box } from '@mui/material';
import NestedList from "../Document/NestedList/NestedList";
import DocumentWriteComponent from "../Document/DocumentWriteComponent";

class documentWrite extends Component {
  render() {
    return (
      <div>
      <Global />
        <Box display={"flex"}>
          <NestedList />  
         {/* 오른쪽 영역 */}
          <Box sx={{
            width: 'calc(100% - 150px)',
            height: '100vh',
            bgcolor: 'background.paper',
            color: 'text.primary',
            padding: '1rem',
          }}>
          <DocumentWriteComponent />
        </Box>
      </Box>
      </div>
    );
  }
}
export default documentWrite;
