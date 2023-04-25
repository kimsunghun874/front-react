import React, { useState } from 'react';
import { Box, Tabs, TextField, Grid, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from "@mui/material/IconButton";
import { useHistory } from "react-router-dom"; 


export default function DocumentListComponent() {
  const [value, setValue] = useState('one');
  const [] = useState(false);
  const [searchText, setSearchText] = useState('');
  const history = useHistory(); // 추가

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleDelete = (newValue) => {
    setValue(newValue);
  };
  

  const handleTitleClick = (params) => { // 추가
    const approverListWindow = window.open('/documentDetail', '_blank', 'width=1000,height=800,top=300,left=300');
    approverListWindow.onApproversSelected = (selectedApprovers) => {
      if (typeof this.handleApproversSelected === 'function') {
        this.handleApproversSelected(selectedApprovers);
      }
    };
  }

  const columns = [
    { field: '상태', headerName: '상태', width: 80 , renderCell: (params) => (<Button size="small"variant="contained" color="success">임시</Button>)},
    { field: '문서번호', headerName: '문서번호', width: 130 },
    { field: '제목', headerName: '제목', width: 220, renderCell: (params) => (
      <Button onClick={() => handleTitleClick(params)}>{params.value}</Button>
    )},
    { field: '기안자', headerName: '기안자', width: 120 },
    { field: '기안일', headerName: '기안일', width: 150 },
    { field: '문서종류', headerName: '문서종류', width: 150 },
    { field: '구분', headerName: '구분', width: 120 },
    {field: '삭제',headerName: '삭제',width: 120, renderCell: (params) => (<IconButton onClick={() => handleDelete(params.id)}>
    <DeleteIcon />
  </IconButton>
      ),
    },
  ];

 

  const rows = [
    { id: 1, 문서번호: 'DOC-001', 제목: '회사운영계획서', 기안자: '김사원', 기안일: '2022-03-01', 문서종류: '기획서', 구분: '일반' ,삭제: '일반'},
    { id: 2, 문서번호: 'DOC-002', 제목: '재무제표', 기안자: '이대리', 기안일: '2022-03-02', 문서종류: '재무제표', 구분: '일반' },
    { id: 3, 문서번호: 'DOC-003', 제목: '인사발령서', 기안자: '박과장', 기안일: '2022-03-03', 문서종류: '인사서류', 구분: '비밀' },
    { id: 4, 문서번호: 'DOC-004', 제목: '물품구매요청서', 기안자: '최대리', 기안일: '2022-03-04', 문서종류: '구매서류', 구분: '일반' },
  ];

  
  const filteredRows = rows.filter((row) => {
    const regex = new RegExp(searchText, 'i');
    return regex.test(row.제목) || regex.test(row.기안자) || regex.test(row.문서종류) || regex.test(row.구분);
  });

  return (
    
    <Box sx={{ width: '100%' ,alignItems: 'flex-start'}}>
      
      <h3 style={{ color: "gray" }}>임시보관함</h3>
      <hr/>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        
      </Tabs>
      {value === 'one' && (
        <Box sx={{ flexGrow: 1, maxWidth: 1200 }}>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={filteredRows}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
              checkboxSelection
              disableSelectionOnClick
            />
          </div>
          <br></br>
          
        </Box>
      )}
    </Box>
  );
}
