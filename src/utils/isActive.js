import moment from 'moment';

const isActive = (startDate, endDate) => {
    const today = moment().startOf('day');
    return today.isSameOrAfter(startDate) && today.isSameOrBefore(endDate);
};

export default isActive;