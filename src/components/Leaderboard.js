import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

import '../styles/leaderboard.css'


class LeaderBoard extends Component {

    render() {
        return (
            <div className="leaderboard-container">
                <Card>
                <CardContent>
                    <Table>
                    <TableHead>
                    <TableCell>Hi</TableCell>
                    </TableHead>
                    <TableBody>
                    <TableRow>
                        <TableCell rowSpan={2}>Avatar</TableCell>
                        <TableCell >Answered questions</TableCell>
                        <TableCell >Created questions</TableCell>
                        <TableCell rowSpan={2} >Score</TableCell>
                        </TableRow>
                    </TableBody>
                    </Table>
                </CardContent>
                </Card>
            </div>
        )
    }
}

export default LeaderBoard;