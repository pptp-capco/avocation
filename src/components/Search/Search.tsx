import React, {useRef, useState} from 'react';
import {
    Button, createStyles, makeStyles, TextField, Theme,
} from "@material-ui/core";
import {Enquiries} from "../Enquiries";
import './search.css'
import {EnquiriesPost} from "../EnquiriesPost";

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

export type Proposal = {
        cin: string;
        customerName: string;
        customerAddress: string;
    }

export function Search() {
    const classes = useStyles();
    const [searchString, setSearchString] = useState('');
    const [showTable, setShowTable] = useState(false);
    const [post, setPost] = useState(false);
    const [proposal, setProposal] = useState<Proposal>({
        cin: '',
        customerName: '',
        customerAddress: ''
    });
    const enquiryFilterRef: any = useRef()


    const handleChange = (event: any) => {
        setProposal({
            ...proposal,
            [event.target.name]: event.target.value.trim()
        });
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        setPost(true)
    };



    return <div className="container">
        <form className={classes.root} noValidate autoComplete="off" >
            <div>
                <TextField
                    id="enquiryId"
                    label="Enquiry"
                    inputRef={enquiryFilterRef}
                    variant="outlined"
                    aria-label={'Enquiry Filter'}
                />
            </div>

            <label>
                CIN
                <input name="cin" onChange={handleChange} />
            </label>
            <br />
            <label>
                Customer Name
                <input name="customerName" onChange={handleChange} />
            </label>
            <br />
            <label>
                Customer Address
                <input name="customerAddress" onChange={handleChange} />
            </label>
            <br />

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

            <div>
                <Button variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                >
                    Submit POST
                </Button>
            </div>
        </form>


        {showTable && <Enquiries searchString={enquiryFilterRef.current.value.trim()}/>}
        {post && <EnquiriesPost proposal={proposal}/>}


    </div>;
}
