import React from 'react';
import {bindActionCreators} from 'redux';
import {Platform} from 'react-native';
import {connect} from 'react-redux';
import DeviceInfo from 'react-native-device-info';
//
import _ from 'lodash';
import {compareGreaterVersion} from 'utils/appUtils';
import DialogForceUpdate from 'components/Dialog/DialogForceUpdate';
import { getIsConnectedSelector } from 'appRedux/selectors/connectSelector';
import { getVersionSubmit } from 'appRedux/actions/otherActions';
import { getVersionAppSelector } from 'appRedux/selectors/otherSelector';

export default function withForceUpdate(WrappedComponent) {
  class HOC extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isNeedUpdateApp: false,
      };
    }
    static navigationOptions = WrappedComponent.navigationOptions;
    componentDidUpdate(preProps) {
      const {isConnected, appVersion} = this.props;

      if (
        preProps.isConnected !== isConnected &&
        isConnected &&
        !_.isEmpty(appVersion)
      ) {
        this.checkVersionApp();
      }
      return null;
    }

    checkVersionApp = async () => {
      const options = {
        callback: async (err, data) => {
          if (err) {
            return;
          }

          const versionLocal = await DeviceInfo.getVersion();
          const isNeedUpdateApp = compareGreaterVersion(
            Platform.OS === 'ios' ? data.ios : data.android,
            versionLocal,
          );
          console.log('isNeedUpdateApp', isNeedUpdateApp);

          this.setState({
            isNeedUpdateApp,
          });
        },
      };
      this.props.getVersionSubmit(options);
    };

    componentDidMount() {
      this.checkVersionApp();
    }
    render() {
      const {isNeedUpdateApp} = this.state;
      return (
        <>
          <DialogForceUpdate isNeedUpdateApp={isNeedUpdateApp} />
          <WrappedComponent {...this.props} />
        </>
      );
    }
  }
  const mapDispatchToProps = dispatch =>
    bindActionCreators(
      {
        getVersionSubmit,
      },
      dispatch,
    );

  const mapStateToProps = state => ({
    isConnected: getIsConnectedSelector(state),
    appVersion: getVersionAppSelector(state),
  });

  return connect(mapStateToProps, mapDispatchToProps)(HOC);
}
