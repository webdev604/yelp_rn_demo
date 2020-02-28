import React from 'react';
import {
  View,
  Keyboard,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import s from './styles';
import {getRestraurants} from '../../reducers/restaurants';
import Swipeout from 'react-native-swipeout';
import Autocomplete from 'react-native-autocomplete-input';

class Home extends React.Component {
  static navigationOptions = ({navigation, screenProps}) => {
    return {
      headerLeft: null,
      headerRight: null,
      title: 'Restaurants',
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      removed_items: [],
      query: '',
      loading: false,
    };
    props.getRestraurants();
  }
  findRestaurant(query) {
    if (query === '') {
      return [];
    }
    const {restaurants} = this.props;
    const {removed_items} = this.state;
    const regex = new RegExp(`${query.trim()}`, 'i');
    return restaurants.filter(
      item => item.name.search(regex) >= 0 && !removed_items.includes(item.id),
    );
  }
  handleLoadMore() {
    if (!this.state.loading) {
      this.setState({loading: true});
      this.props.getRestraurants(this.state.query, false, () => {
        this.setState({loading: false});
      });
    }
  }
  renderFooter = () => {
    //it will show indicator at the bottom of the list when data is loading otherwise it returns null
    if (!this.state.loading) {
      return null;
    }
    return <ActivityIndicator style={{color: '#000'}} />;
  };
  render() {
    const {restaurants} = this.props;
    const {removed_items, query} = this.state;
    const datasource = restaurants.filter(
      item => !removed_items.includes(item.id),
    );
    const finditems = this.findRestaurant(query);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
    return (
      <View style={s.container}>
        <View style={s.autocompleteContainer}>
          <Autocomplete
            autoCapitalize="none"
            autoCorrect={false}
            data={
              finditems.length === 1 && comp(query, finditems[0].name)
                ? []
                : finditems
            }
            defaultValue={query}
            onChangeText={text => this.setState({query: text})}
            placeholder="Search"
            onEndEditing={() => {
              this.props.getRestraurants(query, true);
            }}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  key={'auto-' + item.id}
                  onPress={() => {
                    Keyboard.dismiss();
                    this.setState({query: item.name});
                    this.props.getRestraurants(item.name, true);
                  }}>
                  <Text style={s.itemText}>{item.name}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <FlatList
          data={datasource}
          style={s.flatlist}
          renderItem={({item, index}) => {
            var swipeoutBtns = [
              {
                text: 'Delete',
                backgroundColor: 'red',
                color: 'white',
                onPress: () => {
                  this.setState({removed_items: [...removed_items, item.id]});
                },
              },
            ];
            return (
              <Swipeout right={swipeoutBtns}>
                <TouchableOpacity
                  style={s.flatItem}
                  onPress={() =>
                    this.props.navigation.navigate('Restaurant', {
                      restaurant: item,
                    })
                  }>
                  <Image source={{uri: item.image_url}} style={s.item_image} />
                  <View style={s.text_content}>
                    <View style={s.nameContainer}>
                      <Text style={s.name}>{item.name}</Text>
                    </View>
                    <Text style={s.phone}>{item.display_phone}</Text>
                    {item.location && item.location.display_address ? (
                      <View>
                        {item.location.display_address.map(address => (
                          <Text key={address} style={s.address}>
                            {address}
                          </Text>
                        ))}
                      </View>
                    ) : null}
                  </View>
                </TouchableOpacity>
              </Swipeout>
            );
          }}
          keyExtractor={(item, index) => item.id}
          ListFooterComponent={this.renderFooter.bind(this)}
          onEndReachedThreshold={0.4}
          onEndReached={this.handleLoadMore.bind(this)}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurants.restaurants,
});

const mapDispatchToProps = {getRestraurants};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
