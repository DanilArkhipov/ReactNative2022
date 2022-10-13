import React from 'react';
import { View, Text, ScrollView, StyleSheet, StatusBar, Image  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CallCard, { CallImage } from '../components/callCard';
import Card from '../components/card';
import { Dimensions } from 'react-native';
import AvatarCard from '../components/AvatarCard';

const avatarsData = [
    {
        key: 1,
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP2t-b_-gjeAAKQnOlJPLUM--_UJS9aPLtIDFl61gnaQ&s'
    },
    {
        key: 2,
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6KILc_EYsrQffMwxTVwcruN5jBrdDYoG4EWvL9Bc9A&s'
    },
    {
        key: 3,
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6KILc_EYsrQffMwxTVwcruN5jBrdDYoG4EWvL9Bc9A&s'
    },
    {
        key: 4,
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6KILc_EYsrQffMwxTVwcruN5jBrdDYoG4EWvL9Bc9A&s'
    },
    {
        key: 5,
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBeB45dRu0W4SF8EVI7nLlz_hqX3P7AMbENX-t6dAiNw&s'
    },
    {
        key: 6,
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBeB45dRu0W4SF8EVI7nLlz_hqX3P7AMbENX-t6dAiNw&s'
    },
    {
        key: 7,
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBeB45dRu0W4SF8EVI7nLlz_hqX3P7AMbENX-t6dAiNw&s'
    },
    {
        key: 8,
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP2t-b_-gjeAAKQnOlJPLUM--_UJS9aPLtIDFl61gnaQ&s'
    },
    {
        key: 9,
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6KILc_EYsrQffMwxTVwcruN5jBrdDYoG4EWvL9Bc9A&s'
    },
    {
        key: 10,
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBeB45dRu0W4SF8EVI7nLlz_hqX3P7AMbENX-t6dAiNw&s'
    },
]

const AvatarsPage = () => {
    return (
     <SafeAreaView style={styles.container}>
        {avatarsData.map((data) => <AvatarCard key = {data.key} avatarUrl={data.avatarUrl}></AvatarCard>)}
     </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    
  });
  
  export default AvatarsPage;