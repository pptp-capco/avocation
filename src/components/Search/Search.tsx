import React, {useState} from 'react';
import {
    Button,
    TextField
} from "@material-ui/core";
import {Enquiries} from "../Enquiries";
import './search.css'

export function Search() {
    const [searchString, setSearchString] = useState('');
    const [showTable, setShowTable] = useState(false);

    return <div className="container">
        <TextField id="outlined-basic"
                   label="Outlined"
                   variant="outlined"
                   value={searchString}
                   onChange={(event: any) => {
                       setSearchString(event.target.value)
                   }}
        />
        <Button variant="contained"
                color="primary"
                onClick={() => setShowTable(true)}
        >
            Search
        </Button>


        { showTable && <Enquiries searchString={searchString}/> }


    </div>;
}
