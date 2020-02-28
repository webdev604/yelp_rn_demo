import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  imageview: {
    width: width,
    height: (width * 3) / 4,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 25,
    color: 'black',
    alignSelf: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  phone: {
    fontSize: 20,
    color: 'black',
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  address: {
    fontSize: 12,
    color: 'gray',
    marginHorizontal: 20,
    alignSelf: 'center',
    marginVertical: 10,
  },
  sectionContainer: {
    marginVertical: 5,
  },
  sectionName: {
    fontSize: 18,
    color: 'black',
    marginHorizontal: 20,
  },
  sectionContent: {
    fontSize: 15,
    color: 'gray',
    marginHorizontal: 20,
  },
});
