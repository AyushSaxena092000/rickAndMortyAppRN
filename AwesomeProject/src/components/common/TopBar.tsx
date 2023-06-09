import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {BLACK} from '../constants/colors';
import {useNavigation} from '@react-navigation/native';

const TopBar = () => {
  const navigate = useNavigation();
  const {goBack} = navigate;
  return (
    <View style={styles.container}>
      <Pressable style={styles.backButtonView} onPress={goBack}>
        <Text style={styles.backButton}>←</Text>
      </Pressable>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: BLACK,
  },
  backButtonView: {
    width: 60,
    height: 60,
    paddingLeft: 5,
  },
  backButton: {
    color: '#fff',
    fontSize: 45,
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
});