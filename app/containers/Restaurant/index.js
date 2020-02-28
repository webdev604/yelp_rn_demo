import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import s from './styles';
import {AirbnbRating} from 'react-native-ratings';

export default class Restaurant extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const restaurant = this.props.navigation.getParam('restaurant');
    return (
      <ScrollView contentContainerStyle={s.container}>
        <Image source={{uri: restaurant.image_url}} style={s.imageview} />
        <Text style={s.title}>{restaurant.name}</Text>
        {restaurant.display_phone && restaurant.display_phone.length > 0 ? (
          <Text style={s.phone}>{restaurant.display_phone}</Text>
        ) : null}
        <AirbnbRating
          count={5}
          defaultRating={restaurant.rating.toFixed(0)}
          size={20}
          showRating={false}
        />
        <View style={s.sectionContainer}>
          <Text style={s.sectionName}>Categories</Text>
          <Text style={s.sectionContent}>
            {restaurant.categories.map(item => item.title).join(', ')}
          </Text>
        </View>
        {restaurant.transactions && restaurant.transactions.length > 0 && (
          <View style={s.sectionContainer}>
            <Text style={s.sectionName}>Transactions</Text>
            <Text style={s.sectionContent}>
              {restaurant.transactions.join(', ')}
            </Text>
          </View>
        )}
        {restaurant.location && restaurant.location.display_address ? (
          <View>
            <Text style={s.address}>
              {restaurant.location.display_address.join(' ')}
            </Text>
          </View>
        ) : null}
      </ScrollView>
    );
  }
}
