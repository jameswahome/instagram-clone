import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {useDeviceContext} from 'twrnc';
import tw from '../../lib/tailwind';
import {Avatar, Divider} from '@rneui/themed';
import FastImage from 'react-native-fast-image';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

interface STORIES {
  _id: number;
  username: string;
  profilePicture: string;
  createdAt: string;
}
interface FEED {
  _id: number;
  totalCountOfComments: number;
  username: string;
  image: string;
  profilePicture: string;
  createdAt: string;
  updatedAt: string;
  caption: string;
  comments: COMMENTS[];
}
interface COMMENTS {
  _id: number;
  username: string;
  profilePicture: string;
  createdAt: string;
  comment: string;
}

const storiesData = [
  {
    _id: 1,
    username: 'james',
    profilePicture:
      'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    createdAt: '1679832456000',
  },
  {
    _id: 2,
    username: 'emma',
    profilePicture:
      'https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    createdAt: '1679832508000',
  },
  {
    _id: 3,
    username: 'alex',
    profilePicture:
      'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    createdAt: '1679832553000',
  },
];

const instaFeedData = [
  {
    _id: 1,
    username: 'james',
    profilePicture:
      'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    image:
      'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',

    createdAt: '1679832456000',
    updatedAt: '',
    totalCountOfComments: 2,
    caption: 'Beautiful sunset 🌅',
    comments: [
      {
        _id: 3,
        username: 'alex',
        profilePicture:
          'https://images.unsplash.com/photo-1549222945-0ca3a530493c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTAzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
        createdAt: '1679832553000',
        comment: 'Stunning view!',
      },
      // Add more comments as needed
    ],
  },
  {
    _id: 2,
    username: 'emma',
    profilePicture:
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1420&q=80',
    image:
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1420&q=80',
    createdAt: '1679832608000',
    updatedAt: '',
    totalCountOfComments: 1,
    caption: 'Exploring new places! 🌎',
    comments: [
      {
        _id: 4,
        username: 'michael',
        profilePicture:
          'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        createdAt: '1679832652000',
        comment: 'Where is this?',
      },
    ],
  },
  {
    _id: 3,
    username: 'sarah',
    profilePicture:
      'https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    image:
      'https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    createdAt: '1679832754000',
    updatedAt: '',
    totalCountOfComments: 0,
    caption: 'Lazy Sunday vibes ☕️',
    comments: [],
  },
  {
    _id: 4,
    username: 'david',
    profilePicture:
      'https://images.unsplash.com/photo-1683549003905-a1f385e3de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8ODJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    image:
      'https://images.unsplash.com/photo-1683549003905-a1f385e3de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8ODJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    createdAt: '1679832801000',
    updatedAt: '',
    totalCountOfComments: 3,
    caption: 'New recipe experiment in the kitchen!',
    comments: [
      {
        _id: 5,
        username: 'olivia',
        profilePicture:
          'https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHRlY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        createdAt: '1679832853000',
        comment: 'Looks delicious!',
      },
      {
        _id: 6,
        username: 'ethan',
        profilePicture:
          'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHRlY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        createdAt: '1679832902000',
        comment: 'I need the recipe!',
      },
    ],
  },
  // Add more feed entries as needed
];

const HomePage = () => {
  useDeviceContext(tw);

  const renderStories = ({item}: {item: STORIES}) => {
    return (
      <View style={tw`px-2 py-2`}>
        <View
          style={tw`  border border-[#ba3850] rounded-full px-1 py-1 border-2`}>
          <Avatar size={55} rounded source={{uri: item.profilePicture}} />
        </View>
      </View>
    );
  };
  const renderFeed = ({item}: {item: FEED}) => {
    return (
      <View style={tw`px-2 py-2`}>
        <View style={tw`flex flex-row`}>
          <Avatar size={35} rounded source={{uri: item.profilePicture}} />
          <Text style={tw`ml-2`}>{item.username}</Text>
        </View>
        <View style={tw`mt-2`}>
          <FastImage
            style={{height: 200}}
            source={{
              uri: item.image,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <View style={tw`flex flex-row justify-between mt-2`}>
          <View style={tw`flex flex-row items-center `}>
            <Ionicons name="heart-outline" size={30} />
            <Ionicons name="chatbubble-outline" size={26} style={tw`ml-2`} />
            <Feather name="send" size={25} style={tw`ml-2`} />
          </View>
          <Ionicons name="bookmark-outline" size={28} />
        </View>
        <View style={tw`mt-2`}>
          <View style={tw`flex flex-row`}>
            <Text>{item.username}</Text>
            <Text style={tw`ml-2`}>{item.caption}</Text>
          </View>
        </View>
        {item.comments.length > 0 && (
          <View style={tw`mt-2`}>
            <Text> View all {item.comments.length} comments</Text>
          </View>
        )}
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View style={tw`flex`}>
        <View>
          <FlatList data={storiesData} renderItem={renderStories} horizontal />
        </View>
        <Divider width={1} />
        <View>
          <FlatList
            data={instaFeedData}
            renderItem={renderFeed}
            style={{marginBottom: 250}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
