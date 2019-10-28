import React from 'react';
import MUIDataTable from "mui-datatables";
import { DatePicker } from "@material-ui/pickers";


import Active from './Active';
import Budget from './Budget';
import moment from 'moment';

const data = [
    { "id": 1, "name": "Divavu", "startDate": "9/19/2017", "endDate": "3/9/2020", "Budget": 8837700 },
    { "id": 2, "name": "Jaxspan", "startDate": "11/21/2017", "endDate": "2/21/2020", "Budget": 608715 },
    { "id": 3, "name": "Miboo", "startDate": "11/1/2017", "endDate": "6/20/2020", "Budget": 239507 },
    { "id": 4, "name": "Trilith", "startDate": "8/25/2017", "endDate": "11/30/2017", "Budget": 179838 },
    { "id": 5, "name": "Layo", "startDate": "11/28/2017", "endDate": "3/10/2018", "Budget": 837850 },
    { "id": 6, "name": "Photojam", "startDate": "7/25/2017", "endDate": "6/23/2017", "Budget": 858131 },
    { "id": 7, "name": "Blogtag", "startDate": "6/27/2017", "endDate": "1/15/2018", "Budget": 109078 },
    { "id": 8, "name": "Rhyzio", "startDate": "10/13/2017", "endDate": "1/25/2018", "Budget": 272552 },
    { "id": 9, "name": "Zoomcast", "startDate": "9/6/2017", "endDate": "11/10/2017", "Budget": 301919 },
    { "id": 10, "name": "Realbridge", "startDate": "3/5/2018", "endDate": "10/2/2017", "Budget": 505602 }
]

const Campaign = () => {
    const columns = [
        {
            name: 'name',
            label: 'Name',
        },
        {
            name: 'startDate',
            label: 'Start Date',
            options: {
                searchable: false,
            },
        },
        {
            name: 'endDate',
            label: 'End Date',
            options: {
                searchable: false,
            },
        },
        {
            name: 'startDate',
            label: 'Active',
            options: {
                customBodyRender: (value, { rowData }) => {
                    return <Active isActive={moment().isBetween(rowData[1], rowData[2])} />;
                }
            },
        },
        {
            name: 'Budget',
            label: 'Budget',
            options: {
                customBodyRender: (value) => {
                    return <Budget amount={value} />;
                },
                searchable: false,
            },
        },
    ]

    const options = {
        print: false,
        download: false,
        filter: false,
        viewColumns: false,
        selectableRows: 'none',
    }

    const datePickers = (
        <div>
            <DatePicker value={null} placeholder={"Start Date"} onChange={()=>{}} format={'D/M/YYYY'}/>
            <DatePicker value={null} placeholder={"End Date"} onChange={() => { }} format={'D/M/YYYY'} />
        </div>
    )

    return (
        <div>
            <MUIDataTable
                title={datePickers}
                columns={columns}
                data={data}
                options={options}
            />
        </div>
    )
}

export default Campaign;