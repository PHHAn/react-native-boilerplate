import React, {
  PureComponent,
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
} from 'react';
import {StyleSheet, Animated, Dimensions, View} from 'react-native';
import {scalePortrait} from 'utils/responsive';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexCenter: {
    flex: 1,
  },
  modal: {
    backgroundColor: 'rgba(0,0,0,.5)',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 9999,
    elevation: 5,
  },
  content: {
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: scalePortrait(16),
  },
});

const {height: deviceHeight} = Dimensions.get('window');
class ModalCustom extends PureComponent {
  state = {
    offset: new Animated.Value(deviceHeight),
  };
  componentDidMount() {
    Animated.timing(this.state.offset, {
      duration: 300,
      toValue: 0,
      useNativeDriver: true,
    }).start();
  }

  closeModal = (closeModal) => {
    Animated.timing(this.state.offset, {
      duration: 300,
      toValue: deviceHeight,
      useNativeDriver: true,
    }).start(closeModal);
  };

  render() {
    const {style} = this.props;
    return (
      <View style={styles.modal}>
        <Animated.View
          style={[
            styles.flexCenter,
            {transform: [{translateY: this.state.offset}]},
          ]}>
          <View style={[style]}>{this.props.children}</View>
        </Animated.View>
      </View>
    );
  }
}

function ModalView({isVisible, onClosed, onOpened, children}) {
  const refModal = useRef(null);
  const [isOpen, setIsOpen] = useState(isVisible);
  useLayoutEffect(() => {
    if (!isVisible) {
      refModal.current &&
        refModal.current.closeModal(() => {
          setIsOpen(isVisible);
        });
    } else {
      setIsOpen(true);
    }
  }, [isVisible, setIsOpen]);

  useEffect(() => {
    if (!isOpen) {
      onClosed();
    } else {
      onOpened();
    }
  }, [isOpen, onClosed, onOpened]);

  if (isOpen) {
    return (
      <ModalCustom ref={refModal}>
        <View style={styles.content}>{children}</View>
      </ModalCustom>
    );
  }
  return null;
}

export default React.memo(ModalView);

ModalView.defaultProps = {
  onClosed: () => {},
  onOpened: () => {},
  isVisible: false,
  children: null,
};
