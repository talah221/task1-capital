import React, { useEffect, useState } from 'react'
import { dataService } from '../services/dataService'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles({
    head: {
        backgroundColor: 'black'
    },
    row: {
        color: 'gray',
        padding: '0 5px',
        margin: '0',
        borderBottom: '0',
    },
    cell: {
        backgroundColor: '#0A0A0A',
        color: 'gray',
        borderBottom: '0',
        padding: '0 5px'
    },
    orange: {
        color: '#9F6D48',
        borderBottom: '0',
        backgroundColor: '#0A0A0A',

    }
});

export default function TradesTable() {
    const classes = useStyles();
    const [trades, setTrades] = useState(null)
    const headOfTheTable = ['Trade Date', 'Side', 'Product', 'Quantity', 'Price', 'Counterparty',
        'Provider Price', 'Sales PL', 'Type', 'Execution', 'Status']

    // ComponentDidMount -> 
    useEffect(() => {
        async function fetchData() {
            const tradesFromServer = await dataService.getAllTrades()
            setTrades(tradesFromServer)
        }
        fetchData()
    }, [])

    function getStatus(tradeStatus) {
        if (tradeStatus) return <FiberManualRecordIcon fontSize='small' style={{ color: 'green' }} />
        return <FiberManualRecordIcon fontSize='small' style={{ color: 'red' }} />
    }
    function getSideColor(diff) {
        if (diff === 'BUY') return { color: 'green' }
        return { color: 'red' }
    }
    if (!trades) return <p>Loading</p>
    return (
        <section className="trades-table-container">
            <TableContainer component={Paper}>
                <Table >
                    <TableHead className={classes.head}>
                        <TableRow >
                            {headOfTheTable.map(title => {
                                return <TableCell className={classes.row} key={title}>{title}</TableCell>
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {trades.map(trade => (
                            <TableRow key={trade.id} className={classes.row}>
                                <TableCell className={classes.cell}>{trade.at}</TableCell>
                                <TableCell className={classes.cell} style={getSideColor(trade.side)}>{trade.side}</TableCell>
                                <TableCell className={classes.cell}>{trade.product}</TableCell>
                                <TableCell className={classes.cell}>{trade.quantity}</TableCell>
                                <TableCell className={classes.cell}>{trade.price}</TableCell>
                                <TableCell className={classes.orange}>{trade.cParty}</TableCell>
                                <TableCell className={classes.cell}>{trade.provPrice}</TableCell>
                                <TableCell className={classes.cell}>{trade.sales}</TableCell>
                                <TableCell className={classes.orange}>{trade.type}</TableCell>
                                <TableCell className={classes.orange}>{trade.execution}</TableCell>
                                <TableCell className={classes.cell}>{getStatus(trade.status)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </section >
    )
}
