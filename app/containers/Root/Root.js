import React from 'react';
import {StatusBar, View} from 'react-native';
import {RootNavigator} from '../../navigation/AppNavigator';
import {connect} from 'react-redux';
import s from './Styles';

class RootContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={s.applicationView}>
        <StatusBar barStyle="light-content" />
        <RootNavigator />
      </View>
    );
  }
}
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RootContainer);
