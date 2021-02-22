import {
  createStyles,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from '@material-ui/core';
import React from 'react';
import Row from './Row';

function HomePage(props) {
  const classes = useStyles();

  return (
    <>
      <TableContainer className={classes.table}>
        <Table size="medium">
          <TableHead className={classes.thead}>
            <TableRow>
              <TableCell style={{ width: '10%' }} className={classes.tcell}>
                #
              </TableCell>
              <TableCell className={classes.tcell}>Symbol</TableCell>
              <Tooltip
                title="Relative price change since yesterday"
                className={classes.tooltip}
                placement="top-start"
                arrow
              >
                <TableCell className={classes.tcell}>Daily change</TableCell>
              </Tooltip>
              <Tooltip
                title="Daily volume"
                className={classes.tooltip}
                placement="top-start"
                arrow
              >
                <TableCell className={classes.tcell}>Volume</TableCell>
              </Tooltip>
              <Tooltip
                title="Price of the last trade"
                className={classes.tooltip}
                placement="top-start"
                arrow
              >
                <TableCell className={classes.tcell}>Last price</TableCell>
              </Tooltip>
            </TableRow>
          </TableHead>
          <TableBody className={classes.tbody}>
            {props.symbols.map((symbol, index) => (
              <Row key={index} symbol={symbol} number={index + 1} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default HomePage;

const useStyles = makeStyles((theme) =>
  createStyles({
    table: {
      margin: '5% auto auto auto',
      overflowX: 'hidden',
      overflowY: 'auto',
      backgroundColor: '#292E32',
      boxShadow: '5px  5px  5px',
      marginBottom: '2%',
      width: '80%',
    },
    thead: {
      display: 'table',
      width: '100%',
      tableLayout: 'fixed',
      borderBottom: 'inset',
      backgroundColor: '#15191C',
    },
    tbody: {
      display: 'table',
      overflow: 'auto',
      tableLayout: 'fixed',
      maxHeight: ' 250px',
      width: '100%',
    },
    trow: {
      width: '100%',
    },
    tcell: {
      color: '#517DB7',
    },
    tooltip: {
      margin: theme.spacing(2),
    },
  })
);
