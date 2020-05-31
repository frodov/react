import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';

const columns = [
    { id: 'key', label: 'ID', minWidth: 50 },
    { id: 'name', label: 'Name', minWidth: 100 },
    { id: 'title', label: 'Title', minWidth: 170 },
    { id: 'champImage', label: 'Image', minWidth: 170 },
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
    },
});

const TableList = (props) => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [champions, setChampions] = useState([]);
    const [version, setVersion] = useState([]);

    useEffect(() => {
        fetch("https://ddragon.leagueoflegends.com/api/versions.json")
            .then(res => res.json())
            .then(
                (result) => {
                    setVersion(result[0]);
                }
            )
    }, []);

    useEffect(() => {
        fetch("http://ddragon.leagueoflegends.com/cdn/" + '10.11.1' + "/data/en_US/champion.json")
            .then(res => res.json())
            .then(
                (result) => {
                    setChampions(result.data);
                }
            )
    }, []);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div className="row">
            <div className="col">
                <Paper className={classes.root}>
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Object.values(champions).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                    return (
                                        <TableRow hover tabIndex={-1} key={row.id}>
                                            {columns.map((column) => {
                                                row.champImage = <img src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${row["image"].full}`} />;
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align} value={row[column.id]}>
                                                        <Link to={`/champion/10.11.1/${row.id}`}>
                                                            {value}
                                                        </Link>
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 20, 50]}
                        component="div"
                        count={Object.values(champions).length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </Paper>
            </div>
        </div>
    );

}

export default TableList;