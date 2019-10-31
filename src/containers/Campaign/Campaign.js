import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TextField } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import moment from 'moment';

import Table from '../../components/Table';

const Campaign = () => {
  const [filters, updateFilters] = useState({
    startDate: null,
    endDate: null,
    searchTerm: '',
  });
  const { startDate, endDate, searchTerm } = filters;
  const campaigns = useSelector(state => state.campaigns);

  const updateFilter = field => value => {
    updateFilters({
      ...filters,
      [field]: value ? value.format('M/D/YYYY') : null,
    });
  };

  const filter = campaigns => {
    let data = [...campaigns];
    if (startDate)
      data = data.filter(campaign =>
        moment(campaign.startDate).isSameOrAfter(startDate)
      );
    if (endDate)
      data = data.filter(campaign =>
        moment(campaign.endDate).isSameOrBefore(endDate)
      );
    if (searchTerm)
      data = data.filter(
        ({ name }) => name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
      );
    return data;
  };

  const datePickers = (
    <div>
      <DatePicker
        className="datepicker"
        maxDate={endDate || moment('12/31/2100')}
        value={startDate}
        placeholder={'Start Date'}
        label={'Start Date'}
        onChange={updateFilter('startDate')}
        format={'M/D/YYYY'}
        clearable={true}
      />
      <DatePicker
        className="datepicker"
        minDate={startDate || moment('1/1/1970')}
        value={endDate}
        placeholder={'End Date'}
        label={'End Date'}
        onChange={updateFilter('endDate')}
        format={'M/D/YYYY'}
        clearable={true}
      />
      <TextField
        style={{ float: 'right' }}
        label={'Search'}
        value={searchTerm}
        onChange={event =>
          updateFilters({ ...filters, searchTerm: event.target.value })
        }
      />
    </div>
  );

  return (
    <div>
      <h1> Campaigns </h1>
      <Table data={filter(campaigns)} title={datePickers} />
    </div>
  );
};

export default Campaign;
