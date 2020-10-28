import {PaginationData} from 'model';

export const pushPagingData = (
  dataPagingSource = new PaginationData(),
  pagingNewData = new PaginationData(),
) => {
  const {data, pagination} = pagingNewData;
  return new PaginationData({
    data: [...dataPagingSource.data, ...data],
    pagination: pagination,
  });
};
