import React, {useRef, useState} from 'react';
import {
    Button, createStyles, makeStyles, TextField, Theme,
} from "@material-ui/core";
import {Enquiries} from "../Enquiries";
import './search.css'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }),
);

export function Search() {
    const classes = useStyles();
    const [searchString, setSearchString] = useState('');
    const [showTable, setShowTable] = useState(false);
    const enquiryFilterRef: any = useRef()

    return <div className="container">
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField
                    id="enquiryId"
                    label="Enquiry"
                    inputRef={enquiryFilterRef}
                    variant="outlined"
                    aria-label={'Enquiry Filter'}
                />
            </div>

            <div>
                <Button variant="contained"
                        color="primary"
                        onClick={() => {
                            setSearchString(enquiryFilterRef.current.value)
                            const stringValue = enquiryFilterRef.current.value.trim();
                            if (searchString !== stringValue && stringValue.length > 0)
                                setShowTable(true)
                        }}
                >
                    Search
                </Button>
            </div>
        </form>


        {showTable && <Enquiries searchString={enquiryFilterRef.current.value.trim()}/>}


    </div>;
}
