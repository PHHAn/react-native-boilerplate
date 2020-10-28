import {CODE_KEY, ERROR_MESSAGE} from 'constants/errors';

function convertDataError(error) {
  let {code = {}, message, status} = error;
  switch (status) {
    case CODE_KEY.NOT_FOUND:
      code = CODE_KEY.NOT_FOUND;
      break;
  }
  let result = ERROR_MESSAGE[code];
  if (result) {
    return {code: code, message: result, status};
  }
  if (message && message.search('Cannot read property') >= 0) {
    return {
      code: CODE_KEY.UNDEFINED,
      message: 'Truy vấn dữ liệu lỗi.',
      status,
    };
  }
  if (message && message.search('Network Error') >= 0) {
    return {
      code: CODE_KEY.ERROR_NETWORK,
      message: 'Không thể kết nối tới server.',
      status,
    };
  }
  return {
    code: code,
    message: 'Có lỗi xảy ra, vui lòng thử lại.',
    status,
  };
}

export function handleErrorMessage(err) {
  const {response} = err;
  if (response) {
    return convertDataError(response.data);
  } else {
    return convertDataError(err);
  }
}
