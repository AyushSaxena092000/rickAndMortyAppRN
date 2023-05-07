import {View} from 'react-native';
import React from 'react';
import {ICharacter, IPropSectionProps} from '../../types';
import PropRow from './PropRow';

import SectionHeading from './HeadingScreen';

type CharacterTypes = keyof ICharacter;

const PropSection = ({character}: IPropSectionProps) => {
  const filter_props = ['gender', 'species', 'status', 'type'];

  const characteristics = (o =>
    o.filter(ch => character[ch as CharacterTypes]))(filter_props);

  return (
    <View>
      <SectionHeading heading="properties" />
      {characteristics.map(ch => (
        <PropRow
          key={ch}
          type={ch}
          value={`${character[ch as CharacterTypes]}`}
        />
      ))}
    </View>
  );
};

export default PropSection;