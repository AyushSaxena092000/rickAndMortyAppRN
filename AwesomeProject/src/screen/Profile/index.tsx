import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import SceneBuilder from '../../components/common/SceneBuilder';
import {BLACK, GREY} from '../../components/constants/colors';
import {ROOT_PADDING} from '../../components/constants/styles';
import ProfileImage from '../../components/Profile/ProfileImages';
import PropSection from '../../components/Profile/PropSection';
import WhereaboutsSection from '../../components/Profile/AboutsProps';
import {IProfileProps} from '../../types';

const Profile = (props: IProfileProps) => {
  const character = props.route.params.data;

  return (
    <SceneBuilder showTopBar={true}>
      <ScrollView
        centerContent
        showsVerticalScrollIndicator={false}
        style={styles.container}>
        <View>
        
          <ProfileImage character={character} />
          
          <Text numberOfLines={2} style={styles.name}>
            {character.name}
          </Text>
         
          <PropSection character={character} />
          
          <WhereaboutsSection
            origin={character.origin}
            location={character.location}
          />
                   
          <View style={{height: 200}}>
            <Text style={styles.footerText}>That's all we know!</Text>
          </View>
        </View>
      </ScrollView>
    </SceneBuilder>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {marginHorizontal: -ROOT_PADDING},
  footerText: {
    color: `${GREY}55`,
    fontSize: 14,
    marginTop: 25,
    textAlign: 'center',
  },
  name: {
    color: BLACK,
    fontSize: 28,
    width: '100%',
    padding: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});