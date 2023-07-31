import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FileUpload from "react-material-file-upload";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(date, fileType, fileName, processed, action) {
  return { date, fileType, fileName, processed, action };
}

const rows = [
  createData('10-02-2023', 'pdf', 'sample', 'yes'),
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
  },
  subtitle1: {
    fontWeight: 700,
    fontSize: "16px",
  },
  table: {
    minWidth: 500,
  },
}));

function MassUpdate() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [files, setFiles] = React.useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
      <Container component="main">
          <CssBaseline />
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} >
            <Tab label="Download" {...a11yProps(0)} />
            <Tab label="Upload" {...a11yProps(1)} />
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0}>

        <Typography className="classes.subtitle1" variant="subtitle1" display="block">
        Generate Templates
        </Typography>
        <Typography variant="subtitle2" display="block">
        Use the filters to generate a template and mass-update the listings.
        </Typography>
        <Grid container>
            <Grid item xs>
              <InputLabel color="primary" component="legend">Template</InputLabel>
            </Grid>
            <Grid item xs>
             <RadioGroup row name="template1" value={value} onChange={handleChange}>
             <FormControlLabel value="Basic Info" control={<Radio />} label="Basic Info " />
             <FormControlLabel value="Sales Info " control={<Radio />} label="Sales Info " />
             </RadioGroup>
         </Grid>
       </Grid>
        <Grid container>
            <Grid item xs>
            <InputLabel color="primary" component="legend">Select Items</InputLabel>
            </Grid>
            <Grid item xs>
            <TextField
            variant="outlined"
            margin="normal"
            />
            </Grid>
        </Grid>

        <Typography  variant="subtitle2" display="block">
        please upload a CSV containing the selected item codes
        </Typography>
        <FileUpload value={files} onChange={setFiles} />

        <Typography className="classes.subtitle1" variant="subtitle1" display="block">
         Records
        </Typography>
        <TableContainer component={Paper}>
      <Table className={classes.table} >
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell align="right">File Type</StyledTableCell>
            <StyledTableCell align="right">File Name</StyledTableCell>
            <StyledTableCell align="right">Processed</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.date}>
              <StyledTableCell component="th" scope="row">
                {row.date}
              </StyledTableCell>
              <StyledTableCell align="right">{row.fileType}</StyledTableCell>
              <StyledTableCell align="right">{row.fileName}</StyledTableCell>
              <StyledTableCell align="right">{row.processed}</StyledTableCell>
              <StyledTableCell align="right">{row.action}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </TabPanel>

        <TabPanel value={value} index={1}>
          Upload
        </TabPanel>
      </div>
      </Container>
    );
}

export default MassUpdate

