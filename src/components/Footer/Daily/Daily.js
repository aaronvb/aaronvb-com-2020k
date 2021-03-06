// @flow strict
import React from 'react';
import styles from './Daily.module.scss';

const getWeekDay = (dayOfWeek) => {
  let msg;
  switch (dayOfWeek) {
    case 0:
      msg = 'Happy Weekend, rest well. 😴';
      break;
    case 1:
      msg = 'Happy Monday. ☕☕☕';
      break;
    case 2:
      msg = 'Happy Tuesday. ☕';
      break;
    case 3:
      msg = 'Happy Wednesday. ☕';
      break;
    case 4:
      msg = 'Happy Thursday. ☕';
      break;
    case 5:
      msg = 'Happy Aloha Friday. 🏄';
      break;
    case 6:
      msg = 'Happy Weekend, enjoy! 🍺';
      break;
    default:
      msg = '';
  }
  return msg;
};

const Copyright = () => (
  <div className={styles['daily']}>
    {getWeekDay((new Date()).getDay())}
  </div>
);

export default Copyright;
