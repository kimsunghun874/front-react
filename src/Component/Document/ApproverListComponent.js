import React, { useState } from 'react';
import { Box,  Tabs,TextField,Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

export default function ColorTabs() {
  const [value, setValue] = useState('one');
  const [] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  }

  const columns = [
    { field: '사번', headerName: '사번', width: 70 },
    { field: '이름', headerName: '이름', width: 90 },
    { field: '부서', headerName: '부서', width: 90 },
    { field: '직급', headerName: '직급', width: 90 },
  ];

  const rows = [
    { id: 1, 사번: 1, 이름: '정짜이', 부서: '임원', 직급: '사장'},
    { id: 2, 사번: 2, 이름: '조우주', 부서: '경영', 직급: '대리'},
    { id: 3, 사번: 3, 이름: '사원11', 부서: '기획', 직급: '팀장'},
    { id: 4, 사번: 4, 이름: '사원2', 부서: '개발', 직급: '사원'},
  ];

  const filteredRows = rows.filter((row) => {
    const regex = new RegExp(searchText, 'i');
    return regex.test(row.이름) || regex.test(row.부서) || regex.test(row.직급);
  });

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        
      </Tabs>
      {value === 'one' && (
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
          
          <h2>  </h2>

          {/* 검색 필터 추가 */}
          <TextField
            id="outlined-basic"
            label="검색"
            variant="outlined"
            sx={{ width: '20ch', mb: 2 }}
            value={searchText}
            onChange={handleSearchChange}
          />

          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={filteredRows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
            />
          </div>
          <br></br>
          <Button variant="outlined" color="primary">등록</Button>
        </Box>
      )}
    </Box>
  );
}
