/* eslint-disable react-hooks/exhaustive-deps */
import {bindActionCreators} from 'redux';
import {useDispatch} from 'react-redux';
import {useMemo} from 'react';

export function useActions(actions, deps) {
  const dispatch = useDispatch();
  return useMemo(
    () => {
      // if (Array.isArray(actions)) {
      //   return actions.reduce(
      //     (result, a) => ({
      //       ...result,
      //       [a.name]: bindActionCreators(a, dispatch),
      //     }),
      //     {},
      //   );
      // }
      return bindActionCreators(actions, dispatch);
    },
    deps ? [dispatch, ...deps] : [dispatch],
  );
}
