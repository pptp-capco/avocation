import React, {useState} from 'react';
import {
    TableBody,
    TableCell,
    TableRow,
} from "@material-ui/core";
import {ContentDetails} from "./ContentDetails";

type Props = {
    data: any;
}

export function Content({data}: Props) {
    const [expand, setExpand] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState('');
    const fetchData = async (customerId: string) => {
        setExpand((expand) => !expand)
        if (!expand) {
            setSelectedCustomer(customerId)
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
                <>
                    {expand && customerId === selectedCustomer ?
                        <ContentDetails url={`${customerId}`}/> : null
                    }
                </>
            </>
        ))}
    </TableBody>
}
