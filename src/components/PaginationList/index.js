/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useCallback, useMemo} from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';
import I18n from 'utils/i18n';
import AppText from 'components/AppText';
import {COLOR_PRIMARY} from 'constants/colors';
import {scalePortrait} from 'utils/responsive';
import {PaginationData} from 'model';

function PaginationList(props) {
  const {
    style,
    contentContainerStyle,
    isFetching,
    dataPaging,
    onRefresh,
    onFetch,
    ListFooterComponent,
    heightItemSeparator,
    ...otherProps
  } = props;
  const [state, setState] = useState({
    data: [],
    hasData: false,
    currentPage: 1,
    prevDataPaging: new PaginationData(),
  });
  const [page, setPage] = useState(1);

  useEffect(() => {
    const {data: newData, pagination} = dataPaging;
    if (dataPaging !== state.prevDataPaging) {
      setState({
        prevDataPaging: dataPaging,
        data: newData,
        hasData: pagination.currentPage < pagination.totalPage,
        currentPage: pagination.currentPage,
      });
    }
  }, [dataPaging, state.prevDataPaging]);

  const ListEmptyComponent = useMemo(
    () => (
      <View
        style={{
          padding: scalePortrait(12),
          alignItems: 'center',
          display: props.isFetching ? 'none' : 'flex',
        }}>
        <AppText large bold>
          {I18n.t('common.emptyData')}
        </AppText>
      </View>
    ),
    [props.isFetching],
  );

  const ListFooter = () => {
    if (ListFooterComponent) {
      return ListFooterComponent();
    }
    return isFetching ? (
      <ActivityIndicator
        color={COLOR_PRIMARY}
        style={{padding: scalePortrait(8)}}
      />
    ) : null;
  };

  const ItemSeparatorComponent = useCallback(
    () => <View style={{height: heightItemSeparator}} />,
    [heightItemSeparator],
  );

  const keyExtractor = useCallback(
    (item, index) => (item.id || index).toString(),
    [],
  );

  const onEndReached = useCallback(() => {
    const {currentPage, hasData} = state;
    if (hasData && !isFetching && page === currentPage) {
      setPage(page + 1);
      if (typeof onFetch === 'function') {
        onFetch(page);
      }
    }
  }, [page, onFetch, state, isFetching]);

  const onRefreshControl = useCallback(() => {
    if (typeof onRefresh === 'function') {
      setPage(1);
      setState((prevState) => ({...prevState, currentPage: 1}));
      onRefresh();
    }
  }, [onRefresh]);

  const refreshControl = useCallback(() => {
    return (
      <RefreshControl
        colors={[COLOR_PRIMARY]}
        tintColor={COLOR_PRIMARY}
        refreshing={false}
        onRefresh={onRefreshControl}
      />
    );
  }, [onRefreshControl]);

  const styleContainer = useMemo(
    () => [{paddingVertical: heightItemSeparator}, contentContainerStyle],
    [contentContainerStyle, heightItemSeparator],
  );

  return (
    <FlatList
      // removeClippedSubviews
      refreshControl={refreshControl()}
      ListEmptyComponent={ListEmptyComponent}
      ItemSeparatorComponent={ItemSeparatorComponent}
      renderSectionFooter={ItemSeparatorComponent}
      keyboardDismissMode="on-drag"
      onEndReachedThreshold={0.3}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      {...otherProps}
      onEndReached={onEndReached}
      ListFooterComponent={ListFooter}
      data={dataPaging.data}
      style={style}
      contentContainerStyle={styleContainer}
    />
  );
}

PaginationList.propTypes = {
  dataPaging: PropTypes.object,
  renderItem: PropTypes.func,
  onFetch: PropTypes.func,
  onRefresh: PropTypes.func,
  isFetching: PropTypes.bool,
  style: ViewPropTypes.style,
  contentContainerStyle: PropTypes.object,
};

PaginationList.defaultProps = {
  style: {},
  contentContainerStyle: {},
  isFetching: false,
  dataPaging: new PaginationData(),
  onRefresh: () => {},
  onFetch: () => {},
  heightItemSeparator: scalePortrait(15),
};

export default React.memo(PaginationList);
