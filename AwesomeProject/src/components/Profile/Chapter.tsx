import {StyleSheet,View} from 'react-native';
import React from 'react';
import {CARD_BG, GREY} from '../constants/colors';
import {BORDER_RADIUS} from '../constants/styles';
import {IChapterRowProps} from '../../types';

const ChapterRow = ({episode}: IChapterRowProps) => {
  return (
    <View testID="ChapterRow.View" style={styles.container}>
      <View style={styles.header}>
      </View>
    </View>
  );
};

export default ChapterRow;

const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginVertical: 1,
    borderRadius: BORDER_RADIUS / 3,
    marginHorizontal: '10%',
    paddingHorizontal: '5%',
    paddingVertical: 8,
    backgroundColor: `${CARD_BG}55`,
    textAlignVertical: 'center',
  },
  name: {color: GREY},
  header: {marginBottom: 4, flexDirection: 'row'},
  episode: {color: GREY, flex: 1, fontWeight: 'bold'},
  airDate: {color: `${GREY}aa`, fontSize: 13},
});