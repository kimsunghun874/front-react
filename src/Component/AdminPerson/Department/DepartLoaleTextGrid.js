import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { Box } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    textAlign: 'center', // 텍스트 중앙 정렬
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    textAlign: 'center', // 텍스트 중앙 정렬
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // '&:nth-of-type(odd)': {
  //   backgroundColor: theme.palette.action.hover,
  // },
  // hide last border
  // '&:last-child td, &:last-child th': {
  //   border: 0,
  // },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

// 컬럼에 맞춰서 나중에 수정이 필요(.23-04-25)
function createData(deptid, deptname, temname, openingdate) {
  return { deptid, deptname, temname, openingdate};
}

// 사원의 정보 데이터를 붙이는곳(.23-04-25)
const rows = [
  createData(100101, '경영지원부','경영지원팀','2023-04-25'),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Typography variant="h5" sx={{ pl: 2, pt: 2 }}>부서 정보</Typography>

      {/* 부서 새로만들기 버튼 영역 */}
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
      <Table sx={{ minWidth: 1500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell align="right">부서명</StyledTableCell>
            <StyledTableCell align="right">부속된 팀명</StyledTableCell>
            <StyledTableCell align="right">개설일</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell scope="row"></StyledTableCell>
              <StyledTableCell align="right">{row.deptname}</StyledTableCell>
              <StyledTableCell align="right">{row.temname}</StyledTableCell>
              <StyledTableCell align="right">{row.openingdate}</StyledTableCell>

              {/* 버튼 추가 - 승인완료 상태의 사원에게는 버튼 출력되지 않게 함 */} 
              
        <StyledTableCell>
        <Box sx={{ '& button': { m: 1 } }}>
          <Button variant="outlined" margin-left='2px'>수정</Button>
        </Box>
        </StyledTableCell>

        <StyledTableCell>
        <Box sx={{ '& button': { m: 1 } }}>
          <Button variant="outlined">삭제</Button>
        </Box>
        </StyledTableCell>
      
    </StyledTableRow>
  ))}
  </TableBody>
      </Table>
      
      {/* 페이지 이동 버튼 영역 */}
      {/* '승인완료' 상태일때는 버튼 삭제하기 */}
      
      <Stack spacing={2} sx={{ mt: '2rem', alignItems: 'center' }}>
        <Pagination count={10} />
      </Stack>

    </TableContainer>

  );
}
