import React, {PureComponent} from 'react';
import Dialog from 'react-native-dialog';
import I18n from 'utils/i18n';
import {navigateToAppStore} from 'utils/communications';

export default class DialogForceUpdate extends PureComponent {
  // state = {
  //   dialogVisible: false
  // };

  // showDialog = () => {
  //   this.setState({ dialogVisible: true });
  // };

  // handleCancel = () => {
  //   this.setState({ dialogVisible: false });
  // };

  onPressUpdate = () => {
    // this.setState({ dialogVisible: false });
    navigateToAppStore();
  };

  render() {
    // navigateToAppStore
    return (
      <Dialog.Container visible={this.props.isNeedUpdateApp}>
        <Dialog.Title>{I18n.t('appUpdate.title')}</Dialog.Title>
        <Dialog.Description>{I18n.t('appUpdate.message')}</Dialog.Description>
        {/* <Dialog.Button label="Cancel" onPress={this.handleCancel} /> */}
        <Dialog.Button
          label={I18n.t('appUpdate.buttonSubmit')}
          onPress={this.onPressUpdate}
        />
      </Dialog.Container>
    );
  }
}
