import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';

const Budget = ({ amount }) => (
    <div>
        <p>{numeral(amount).format('($ 0.00a)')}</p>
    </div>
)

Budget.propTypes = {
    amount: PropTypes.number
}

Budget.defaultProps = {
    amount: 0
}

export default Budget;