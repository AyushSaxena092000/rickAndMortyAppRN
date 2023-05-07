import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BLACK} from '../constants/colors';

const Header = () => {
  return (
    <View>
      <Text style={styles.heading}>
        {`The `}
        <Text style={[styles.heading, {textDecorationLine: 'underline'}]}>
          {`Rick and Morty.`}
        </Text>
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  heading: {
    color: BLACK,
    fontWeight: '700',
    fontSize: 50,
  },
});