import React from 'react';
import {TableCell, TableRow} from "@material-ui/core";
import {useFetch} from "../hooks/useFetch";

export function ContentDetails({customerId}: { customerId: string }) {

    const api = process.env.REACT_APP_API_SERVER;
    const urlLink = `${api}/enquiries/${customerId}`
    type DataType = {
        messageContent: string;
    }

    type APIResponseType = { data: DataType | any, error: unknown, status: string }

    const {
        data = null,
        error,
        status
    }: APIResponseType = useFetch(urlLink)


    if (error) {
        return <TableRow>
            <TableCell align="right">{'Sorry, something went wrong!'}</TableCell>
        </TableRow>
    }

    if (status === 'fetching') {
        return <TableRow>
            <TableCell align="right">{'Loading...'}</TableCell>
        </TableRow>
    }

    if (data) {
        return <TableRow key={customerId}>
            <TableCell align="right">{data?.messageContent!}</TableCell>
        </TableRow>
    }
    return null;
}
