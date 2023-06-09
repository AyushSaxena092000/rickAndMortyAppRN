import {View} from 'react-native';
import React from 'react';
import LocationRow from './Location';
import SectionHeading from './HeadingScreen';
import {WhereaboutsSectionProps} from '../../types';

const WhereaboutsSection = ({origin, location}: WhereaboutsSectionProps) => {
  return (
    <View>
      <SectionHeading heading="whereabouts" />
      <LocationRow type={'Origin'} location={origin} />
      <LocationRow type={'Location'} location={location} />
    </View>
  );
};

export default WhereaboutsSection;