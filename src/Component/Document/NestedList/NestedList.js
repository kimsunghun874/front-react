import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { useHistory } from "react-router-dom";
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';
import { Button } from '@mui/material';


export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  // 링크 이동
  const history = useHistory();

    // 링크 이동 메서드
    const handleItemClick = (link) => {
      history.push(link);
    };

    const documentWrite = (link) => {
      history.push("/documentWrite");
    }

  return (
    <Box display={"flex"}>
      <Box width={90}></Box>
      
      <Box sx={{
        boxsizing: 'border-box',
        display: 'flex',
        height: '100vh',
        flex: 'column',
        alignItems: 'flex-start',
        width: '200px',
        border: 'none',
        borderRight: '1px solid',
        borderRightColor: 'gray',
        bgcolor: 'background.paper',
        color: 'text.primary',
      }}>

        
        <List
          sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper', verticalalign: 'top' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          verticalalign= "top"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader" >
              <Button variant="contained" disableElevation onClick={documentWrite}>
                <big>&nbsp;+</big> &nbsp;&nbsp;&nbsp;&nbsp;새 결재 진행&nbsp;&nbsp;&nbsp;&nbsp;
                <br></br>
              </Button>
            </ListSubheader>
          }
        >        
        <br></br>
          <ListItemButton onClick={handleClick}>
            <ListItemText primary="개인문서함" />
        {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="기안문서함" onClick={() => handleItemClick("/employee/department")} />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="임시보관함" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="부서문서함" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="회람문서함" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClick}>
            <ListItemText primary="결제문서함" />
        {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="결제대기문서함" onClick={() => handleItemClick("/employee/department")} />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="결제완료문서함" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="결제예정문서함" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="회람문서함" />
          </ListItemButton>
        </List>
      </Collapse>
          <Divider orientation="vertical" flexItem />
        </List>
      </Box>

  </Box>
  );
}
