import React from 'react';
import {
    Paper,
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@material-ui/core";
import {useFetch} from "../hooks/useFetch";
import {LoadingIndicator} from "./LoadingIndicator";
import {ApiError} from "./ApiError";
import {Content} from "./Content";

type Props = {
    searchString: string;
}

export function Enquiries({searchString}: Props) {
    const api = process.env.REACT_APP_API_SERVER;
    const url = `${api}/${searchString}`
    const {
        data,
        error,
        status
    } = useFetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({searchString}),
        }
    )

    if (error) {
        return <ApiError/>
    }

    if (status === 'fetching') {
        return <div>
            <LoadingIndicator/>
        </div>
    }

    if (data && Array.isArray(data) && data.length > 0) {

        return <TableContainer component={Paper}>
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
                <Content data={data}/>
            </Table>
        </TableContainer>
    }

    return null;
}
