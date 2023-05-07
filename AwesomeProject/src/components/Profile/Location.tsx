import React from 'react';
import {ILocation} from '../../types';
import PropRow from './PropRow';

interface LocationRowProps {
  type: string;
  location: ILocation;
}
const LocationRow = ({location, type}: LocationRowProps) => {
  return (
    <PropRow
      type={type}
      value={location.name}      
    />
  );
};

export default LocationRow;
