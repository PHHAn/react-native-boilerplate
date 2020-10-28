import React, {useCallback, useState} from 'react';
import ProfileView from './Profile.view';
// import I18n from 'utils/i18n';
// import {NAMESPACE} from './Profile.constants';
import {openImagePickerAndResize} from 'helpers/imagePicker';
const functionsCounter = new Set();
export default function ProfileContainer({navigation}) {
  const [urlAvatar, setUrlAvatar] = useState('');
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     title: I18n.t(`${NAMESPACE}.title`),
  //   });
  // }, [navigation]);
  const onPressAvatar = useCallback(() => {
    openImagePickerAndResize((err, res) => {
      console.log('>>>>openImagePickerAndResize', {err, res});
      if (!err) {
        setUrlAvatar(res.uri);
      }
    });
  }, []);

  const [count, setCount] = useState(0);
  // const [count1, setCount1] = useState(0);

  // const total = count + count1;

  const increment = useCallback(() => {
    // setCount(count + 1);
  }, []);
  function decrement() {
    setCount(count - 1);
  }

  functionsCounter.add(increment);
  functionsCounter.add(decrement);
  functionsCounter.add(onPressAvatar);
  // functionsCounter.add(total);

  console.info(functionsCounter);

  return (
    <ProfileView
      count={count}
      increment={increment}
      decrement={decrement}
      urlAvatar={urlAvatar}
      onPressAvatar={onPressAvatar}
    />
  );
}
