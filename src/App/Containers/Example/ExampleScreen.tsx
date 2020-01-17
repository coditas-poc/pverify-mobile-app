import React from 'react';
import { Platform, Text, View, Button, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import {fetchUser} from 'Actions';
import { liveInEurope } from 'App/Stores/Example/Selectors';
import Style from './ExampleScreenStyle';
import { Buttons } from 'App/Components/Button/Buttons';

/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu.',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu.',
});

export interface Props {
  user: object;
  userIsLoading: boolean;
  userErrorMessage: string;
  fetchUser: Function;
  liveInEurope: boolean;
}

class ExampleScreen extends React.Component<Props> {

  render() {
    return (
      <View style={Style.container}>
        {!this.props.userIsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
            <View>
              {/* <View style={Style.logoContainer}>
              </View>
              <Text style={Style.text}>To get started, edit App.js</Text>
              <Text style={Style.instructions}>{instructions}</Text>
              {this.props.userErrorMessage ? (
                <Text style={Style.error}>{this.props.userErrorMessage}</Text>
              ) : (
                  <View>
                    <Text style={Style.result}>
                      {'I\'m a fake user, my name is '}
                      {this.props.user.name}
                    </Text>
                    <Text style={Style.result}>
                      {this.props.liveInEurope ? 'I live in Europe !' : 'I don\'t live in Europe.'}
                    </Text>
                  </View>
                )} */}
                <Buttons />
              {/* <Button onPress={() => this._fetchUser()} title="Refresh" /> */}
            </View>
          )}
      </View>
    );
  }

  _fetchUser() {
    this.props.fetchUser();
  }
}

const mapStateToProps = (state: any) => ({
  user: state.example.user,
  userIsLoading: state.example.userIsLoading,
  userErrorMessage: state.example.userErrorMessage,
  liveInEurope: liveInEurope(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchUser: () => dispatch(fetchUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExampleScreen);
