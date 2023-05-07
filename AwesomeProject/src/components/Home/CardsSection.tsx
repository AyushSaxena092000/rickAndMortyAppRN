import {
    StyleSheet,
    View,
    Dimensions,
    FlatList,
    ListRenderItem,
  } from 'react-native';
  import React, {useCallback, useState} from 'react';
  import ProfileCard from '../Profile/ProfileCards';
  import Header from './HeaderSection';
  import {ICardsTrayProps, ICharacter} from '../../types';
  import Footer from './FooterSection';
    
  const {height} = Dimensions.get('screen');
  
  const CardsTray = ({
    characters,
    latestPageInfo
  }: ICardsTrayProps) => {
    const [hasListEnded, setHasListEnded] = useState(false); 
    const [isFetching, setIsFetching] = useState(false); 
  
    const handleOnEndReached = async () => {
      try {
        if (isFetching) return;
        let nextPageUrl = latestPageInfo.next;
        if (!nextPageUrl) throw 'list has ended';
        setIsFetching(true);

      } catch (error) {
        console.log(error);
        setHasListEnded(true);
      } finally {
        setIsFetching(false);
      }
    };
  
    const renderItem = useCallback<ListRenderItem<ICharacter>>(
      renderItem => <ProfileCard data={renderItem.item} />,
      [],
    );
  
    const keyExtractor = useCallback((item: ICharacter) => `id-${item.id}`, []);
  
    return (
      <View>
        <View style={styles.container}>
          <FlatList
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={Header}
            ListFooterComponent={<Footer hasListEnded={hasListEnded} />} 
            data={characters}
            keyExtractor={keyExtractor}
            onEndReached={handleOnEndReached}
            onEndReachedThreshold={1}
            renderItem={renderItem}
            windowSize={height}
            initialNumToRender={10}
            removeClippedSubviews={true}
          />
        </View>
      </View>
    );
  };
  
  export default CardsTray;
  
  const styles = StyleSheet.create({container: {minHeight: height}});