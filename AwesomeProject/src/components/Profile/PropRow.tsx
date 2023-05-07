import {Pressable, StyleSheet, Text, View} from 'react-native';
import {GREY} from '../constants/colors';
import {BORDER_RADIUS} from '../constants/styles';
import {PropRowProps} from '../../types';

const PropRow = ({
  type,
  value,
  expandable,
}: PropRowProps) => {
  const rowWrapper = (children:  React.ReactNode) =>
    expandable ? (
      <View>
        <Pressable>{children}</Pressable>
      </View>
    ) : (
      <View>{children}</View>
    );

  return rowWrapper(
    <View>
      <View style={styles.container}>
        <Text style={styles.type}>{`${type}`.toUpperCase()}</Text>
        <Text
          numberOfLines={2}
          style={[styles.value]}>
          {value}
        </Text>
        
      </View>
    </View>
  );
};

export default PropRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: '10%',
    marginVertical: 5,
  },
  type: {
    color: GREY,
    borderRadius: BORDER_RADIUS / 2,
    fontSize: 13,
    paddingHorizontal: 10,
    marginRight: 5,
    paddingVertical: 5,
    textAlignVertical: 'center',
    textAlign: 'center',
    minWidth: '20%',
  },
  value: {
    color: GREY,
    borderRadius: BORDER_RADIUS / 2,
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});