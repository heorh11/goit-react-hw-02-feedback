import React from 'react';
import { List } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, percent }) => {
  return (
    <List>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {Math.ceil(percent)}%</li>
    </List>
  );
};

export default Statistics;