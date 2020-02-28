import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  flatlist: {
    marginTop: 45
  },
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1
  },
  itemText: {
    fontSize: 15,
    color: 'black',
    paddingVertical: 5
  },
  flatItem: {
    flexDirection: 'row',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  item_image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },
  text_content: {
    flex: 1,
    paddingHorizontal: 10,
  },
  nameContainer: {
    flexDirection: 'row',
  },
  name: {
    fontSize: 20,
    color: 'black',
    flex: 1,
    flexShrink: 1,
    marginBottom: 5,
  },
  phone: {
    fontSize: 14,
    color: 'black',
    marginBottom: 10,
  },
  address: {
    fontSize: 12,
    color: 'black',
  },
});
