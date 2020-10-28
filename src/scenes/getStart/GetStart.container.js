import React, {useEffect} from 'react';
import {GetStartView} from './GetStart.view';
import NavigationServices from 'utils/navigationServices';
import SCENE_NAMES from 'constants/sceneName';

export default function GetStartContainer() {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      NavigationServices.resetActionTo(SCENE_NAMES.DUMMY);
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);
  return <GetStartView />;
}
