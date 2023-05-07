import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import {ROOT_PADDING} from '../constants/styles';
import {ISceneBuilderProps} from '../../types';
import TopBar from './TopBar';

const {height} = Dimensions.get('screen');
const SceneBuilder = ({style, showTopBar, children}: ISceneBuilderProps) => {
  return (
    <>
      {showTopBar && <TopBar />}
      <View
        style={[
          styles.default,
          style, 
          showTopBar && {paddingTop: 0},
        ]}>
        {children}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  default: {
    padding: ROOT_PADDING,
    minHeight: height,
    backgroundColor: '#fff',
  },
});

export default SceneBuilder;