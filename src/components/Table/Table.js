import React from 'react';
import PropTypes from 'prop-types';
import MUIDataTable from 'mui-datatables';
import moment from 'moment';

import Active from '../Active';
import Budget from '../Budget';

const Table = ({ data, title, customToolbar, ...props }) => {
  const isActive = (startDate, endDate) => {
    const today = moment().startOf('day');
    return today.isSameOrAfter(startDate) && today.isSameOrBefore(endDate);
  };

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
          return <Active isActive={isActive(rowData[1], rowData[2])} />;
        },
      },
    },
    {
      name: 'Budget',
      label: 'Budget',
      options: {
        customBodyRender: value => {
          return <Budget amount={value} />;
        },
        searchable: false,
      },
    },
  ];

  const options = {
    print: false,
    download: false,
    filter: false,
    search: false,
    viewColumns: false,
    selectableRows: 'none',
    pagination: false,
    customToolbar,
  };

  return (
    <MUIDataTable
      title={title}
      columns={columns}
      data={data}
      options={options}
      {...props}
    />
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.any,
};

Table.defaultProps = {
  data: [],
  title: null,
};

export default Table;
