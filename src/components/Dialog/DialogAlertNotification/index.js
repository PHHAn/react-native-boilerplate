import React, {useState, useEffect} from 'react';
import Dialog from 'react-native-dialog';
import I18n from 'utils/i18n';
const NAMESPACE = 'common';

const DialogAlertNotification = ({error, onPressHide}) => {
  const [isOpen, setIsOpen] = useState(error.isError);
  const [title] = useState(I18n.t(`${NAMESPACE}.titleAlert`));
  const [message, setMessage] = useState(error.message);
  useEffect(() => {
    setIsOpen(error.isError);
    setMessage(error.message);
  }, [error]);

  const handleCancel = () => {
    onPressHide();
  };
  return (
    <Dialog.Container coverScreen visible={isOpen}>
      <Dialog.Title>{title}</Dialog.Title>
      <Dialog.Description>{message || ''}</Dialog.Description>
      {/* <Dialog.Button label="Cancel" onPress={this.handleCancel} /> */}
      <Dialog.Button label={'OK'} onPress={handleCancel} />
    </Dialog.Container>
  );
};

export default React.memo(DialogAlertNotification);
