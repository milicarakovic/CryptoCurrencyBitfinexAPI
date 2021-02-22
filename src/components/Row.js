import {
  createStyles,
  makeStyles,
  TableCell,
  TableRow,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import subscribe from '../service/api';

function useCryptoApi(symbol) {
  const [dailyChange, setDailyChange] = useState(0);
  const [volume, setVolume] = useState(0);
  const [price, setPrice] = useState(0);

  const errorHandler = (err, ws) => {
    console.error(err);
    ws.close();
  };

  const messageHandler = (msg, ws) => {
    var data = JSON.parse(msg.data);

    if (data.event === 'error') {
      setDailyChange(0);
      setPrice(0);
      setVolume(0);
      console.error(data.code, data.msg);
    }

    // console.log(symbol, data);
    if (Array.isArray(data) && Array.isArray(data[1])) {
      setDailyChange(data[1][5]);
      setPrice(data[1][6]);
      setVolume(data[1][7]);
    }
  };

  useEffect(() => {
    const ws = subscribe(symbol, messageHandler, errorHandler);

    return () => {
      if (ws.readyState === WebSocket.OPEN) ws.close();
    };
  }, []);

  return [dailyChange, volume, price];
}

function Row(props) {
  const classes = useStyles(makeStyles);
  const [dailyChange, volume, price] = useCryptoApi(props.symbol);

  return (
    <TableRow className={classes.trow}>
      <TableCell style={{ width: '10%' }} className={classes.tcell}>
        {props.number}
      </TableCell>
      <TableCell className={classes.tcell}>{props.symbol}</TableCell>
      <TableCell
        style={
          Math.sign(dailyChange) == 1
            ? { color: '#67A132', fontWeight: '550' }
            : { color: '#821A2F', fontWeight: '550' }
        }
      >
        {dailyChange} %
      </TableCell>
      <TableCell className={classes.tcell}>{volume}</TableCell>
      <TableCell className={classes.tcell}>{price}</TableCell>
    </TableRow>
  );
}

export default Row;

const useStyles = makeStyles(() =>
  createStyles({
    trow: {
      width: '100%',
      '&:hover': {
        backgroundColor: '#1E1E1E',
      },
    },
    tcell: {
      color: '#A4A5A7',
      fontWeight: '550',
    },
  })
);
