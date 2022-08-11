import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Header} from './src/Header';
import {ImageCard} from './src/ImageCard';

const App = () => {
  const [data, setData] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://s3.eu-central-1.wasabisys.com/ghashtag/RNForKids/00-Init/data.json',
      );
      const json = await response.json();
      setData(json);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log('data', data);

  return (
    <FlatList
      ListHeaderComponent={<Header title="STAR GATE" />}
      columnWrapperStyle={{justifyContent: 'space-around'}}
      numColumns={2}
      data={data}
      renderItem={({item}) => <ImageCard data={item} />}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default App;
