import React from 'react';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@material-ui/core";
import {useFetch} from "../hooks/useFetch";
import {LoadingIndicator} from "./LoadingIndicator";
import {ApiError} from "./ApiError";

type Props = {
    searchString: any;
}

export function Enquiries({searchString}: Props) {
    const api = process.env.REACT_APP_API_SERVER;
    const url = `${api}/${searchString}`
    const {
        data,
        error,
        status
    } = useFetch(url)

    if (error) {
        return <ApiError/>
    }

    if (status === 'fetching') {
        return <LoadingIndicator/>
    }

    if (data && Array.isArray(data) && data.length > 0) {

        return <div>

            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Customer ID</TableCell>
                            <TableCell align="right">Swift Reft</TableCell>
                            <TableCell align="right">Account No</TableCell>
                            <TableCell align="right">Account Name</TableCell>
                            <TableCell align="right">Message</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(({customerId, accountName, accountNumber, messageContent, swiftReft}: any) => (
                            <TableRow key={accountName}>
                                <TableCell component="th" scope="row">
                                    {customerId}
                                </TableCell>
                                <TableCell align="right">{swiftReft}</TableCell>
                                <TableCell align="right">{accountNumber}</TableCell>
                                <TableCell align="right">{accountName}</TableCell>
                                <TableCell align="right">{messageContent}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>;
    }

    return null;
}
