import React, {useRef, useState} from 'react';
import {
    Button,
} from "@material-ui/core";
import {Enquiries} from "../Enquiries";
import './search.css'

export function Search() {
    const [searchString, setSearchString] = useState('');
    const [showTable, setShowTable] = useState(false);
    const textBoxRef: any = useRef()

    return <div className="container">
        <input type="text" ref={textBoxRef}/>
        <Button variant="contained"
                color="primary"
                onClick={() => {
                    setSearchString(textBoxRef.current.value)
                    console.log(textBoxRef.current.value, 'hello', searchString)
                    if (searchString !== textBoxRef.current.value)
                        setShowTable(true)
                }}
        >
            Search
        </Button>


        {showTable && <Enquiries searchString={textBoxRef.current.value}/>}


    </div>;
}
