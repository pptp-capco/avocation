import React from 'react';
import {TableCell, TableRow} from "@material-ui/core";
import {LoadingIndicator} from "./LoadingIndicator";
import {ApiError} from "./ApiError";
import {useFetch} from "../hooks/useFetch";

export function ContentDetails({url}: { url: string }) {

    const api = process.env.REACT_APP_API_SERVER;
    const urlLink = `${api}/enquiries/${url}`
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
        return <ApiError/>
    }

    if (status === 'fetching') {
        return <LoadingIndicator/>
    }

    if (data) {
        return <TableRow>
            <TableCell align="right">{data?.messageContent!}</TableCell>
        </TableRow>
    }
    return null;
}
