import React, {useState} from 'react';
import {
    TableBody,
    TableCell,
    TableRow,
} from "@material-ui/core";
import {ContentDetails} from "./ContentDetails";

type EnquiryType = {
    customerId: string;
    accountName: string;
    accountNumber: string;
    messageContent: string;
    swiftReft: string;
}

type Props = {
    data: EnquiryType[];
}

export function Content({data}: Props) {
    const [expand, setExpand] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState('');
    const showContentDetails = (customerId: string) => {
        setExpand((expand) => !expand)
        if (!expand) {
            setSelectedCustomer(customerId)
        }
    }
    return <TableBody>
        {data.map(({customerId, accountName, accountNumber, messageContent, swiftReft}: EnquiryType) => (
            <>
                <TableRow key={accountName}>
                    <TableCell style={{color: 'blue', cursor: 'pointer'}} component="th" scope="row"
                               onClick={() => showContentDetails(customerId)}>
                        {customerId}
                    </TableCell>
                    <TableCell align="right">{swiftReft}</TableCell>
                    <TableCell align="right">{accountNumber}</TableCell>
                    <TableCell align="right">{accountName}</TableCell>
                    <TableCell align="right">{messageContent}</TableCell>
                </TableRow>
                {expand && customerId === selectedCustomer ?
                    <ContentDetails customerId={customerId}/> : null
                }
            </>
        ))}
    </TableBody>
}
