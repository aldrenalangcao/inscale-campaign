import React from 'react';
import { useSelector } from 'react-redux';
import MUIDataTable from 'mui-datatables';
import { DatePicker } from '@material-ui/pickers';

import Active from './Active';
import Budget from './Budget';
import moment from 'moment';

const Campaign = () => {

    const campaigns = useSelector(state => state.campaigns);

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
            <DatePicker value={null} placeholder={'Start Date'} onChange={()=>{}} format={'D/M/YYYY'}/>
            <DatePicker value={null} placeholder={'End Date'} onChange={() => { }} format={'D/M/YYYY'} />
        </div>
    )

    return (
        <div>
            <MUIDataTable
                title={datePickers}
                columns={columns}
                data={campaigns}
                options={options}
            />
        </div>
    )
}

export default Campaign;