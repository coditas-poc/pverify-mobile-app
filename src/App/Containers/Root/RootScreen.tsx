import React, { Component } from 'react';
import {View} from 'react-native';
import NavigationService from 'Services';
import styles from './RootScreenStyle';
import {connect} from 'react-redux';
import {startup} from 'Actions';
import AppNavigator from 'Navigators/AppNavigator';
export interface Props {
  startup: any;
}
class RootScreen extends Component<Props> {
  componentDidMount() {
    // Run the startup action when the application is starting
    this.props.startup();
  }

  render() {
    return (
      <View style={styles.container}>
        <AppNavigator ref={(navigatorRef: any) => NavigationService.setTopLevelNavigator(navigatorRef)}/>
      </View>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: (arg0: any) => void) => ({
  startup: () => dispatch(startup()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RootScreen);
