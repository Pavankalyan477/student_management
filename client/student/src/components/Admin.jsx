import React from 'react'
import {Link} from "react-router-dom"

export default function Admin() {
    return (
        <div style={{marginTop:"130px"}}>
            <div>
                <button> <Link>ADD Contest Details</Link> </button>
                <button> <Link>ADD Student Details</Link> </button>
            </div>

        </div>
    )
}
