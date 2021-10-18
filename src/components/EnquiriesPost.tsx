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
import {Proposal} from "./Search/Search";

type Props = {
    proposal: Proposal;
}

export function EnquiriesPost({proposal}: Props) {
    const api = process.env.REACT_APP_API_SERVER;
    const url = `${api}/proposal`
    const {
        data,
        error,
        status
    } = useFetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({proposal}),
        }
    )

    console.log(`data: ${JSON.stringify(data)}}`);
    console.log(`status: ${JSON.stringify(status)}}`);
    console.log(`error: ${JSON.stringify(error)}}`);

    if (error) {
        return <ApiError/>
    }

    if (status === 'fetching') {
        return <div>
            <LoadingIndicator/>
        </div>
    }

    if (status === 'created') {

        return <div>You have successfully posted the response</div>
    }

    return null;
}
