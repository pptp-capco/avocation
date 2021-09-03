import React, {useState} from 'react';
import {
    TableBody,
    TableCell,
    TableRow,
} from "@material-ui/core";
import axios from "axios";
import {LoadingIndicator} from './LoadingIndicator';
import {ApiError} from "./ApiError";

type Props = {
    data: any;
}


export function Content({data}: Props) {
    const [expand, setExpand] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState('');
    const [customerData, setCustomerData] = useState({} as any);
    const fetchData = async (customerId: string) => {
        setExpand((expand) => !expand)
        setIsError(false)
        if (!expand) {
            try {
                setIsLoading(true)
                setSelectedCustomer(customerId)
                const api = process.env.REACT_APP_API_SERVER;
                const url = `${api}/enquiries/${customerId}`;
                const response = await axios(url)
                setCustomerData(response.data)
                setIsLoading(false)
            } catch (e) {
                setIsLoading(false)
                setIsError(true)
            }
        }
    }
    return <TableBody>
        {data.map(({customerId, accountName, accountNumber, messageContent, swiftReft}: any) => (
            <>
                <TableRow key={accountName}>
                    <TableCell component="th" scope="row" onClick={() => fetchData(customerId)}>
                        {customerId}
                    </TableCell>
                    <TableCell align="right">{swiftReft}</TableCell>
                    <TableCell align="right">{accountNumber}</TableCell>
                    <TableCell align="right">{accountName}</TableCell>
                    <TableCell align="right">{messageContent}</TableCell>
                </TableRow>
                {expand && customerId === selectedCustomer ?
                    <TableRow>
                        {isLoading ? <LoadingIndicator/> : null}
                        {isError ? <ApiError/> : null}
                        <TableCell align="right">{customerData?.messageContent!}</TableCell>
                    </TableRow> : null
                }
            </>
        ))}
    </TableBody>
}
