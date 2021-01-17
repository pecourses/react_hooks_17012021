import React from 'react';
import Day from './Day';
import Month from './Month';
import PropTypes from 'prop-types';
import styles from 'Calendar.module.scss';
const Calendar = ({currentDate}) => {
  return(
    <article className={styles.container}>
      <Day currentDate={currentDate} />
      <Month date={currentDate} currentDate={currentDate} />
    </article>
  );
};

Calendar.propTypes = {
  currentDate: PropTypes.instanceOf(Date),
};
Calendar.defaultProps = {
  currentDate: new Date(),
}
export default Calendar;