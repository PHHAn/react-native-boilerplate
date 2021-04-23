import {Platform} from 'react-native';

export default {
  common: {
    name: 'Tên',
    email: 'Email',
    password: 'Mật khẩu',
    notification: 'Thông báo',
    phone: 'Số điện thoại',
    titleAlert: 'Thông báo',
    version: 'Version ',
    copyRight: 'Talks English © 2020',
    alertLocation: 'Lấy vị trí người dùng thất bại.',
    emptyData: 'Không có dữ liệu',
    querySuccess: 'Truy vấn thành công.',
    rateUs: 'Đánh giá ngay',
    rateUsDescription:
      'Bạn có muốn chia sẻ đánh giá của bạn với chúng tôi? Điều này sẽ giúp và thúc đẩy chúng tôi rất nhiều',
    rateUsOk: 'Đánh giá ngay',
    rateUsCancel: 'Để sau',
    phoneOrEmail: 'Số điện thoại hoặc email',
    confirm: 'Xác nhận',
    report: 'Phản hồi',
    wasConfirm: 'Đã xác nhận',
    wasReport: 'Đã phản hồi',
    updateSuccess: 'Cập nhật thành công.',
    hotline: 'Hotline',
    searchEmpty: 'Không tìm thấy dữ liệu với từ khoá',
  },
  appUpdate: {
    title: 'Cập nhật mới',
    message:
      'Phiên bản này đã cũ. Vui lòng cập nhật mới từ ' +
      (Platform.OS === 'ios' ? 'App Store' : 'Play Store') +
      '.',
    buttonSubmit: 'Cập nhật',
  },
  openPicker: {
    defaultTitle: 'Chọn ảnh',
    titleEditAvatar: 'Chọn ảnh đại diện',
    takePhotoButtonTitle: 'Chụp ảnh mới...',
    chooseFromLibraryButtonTitle: 'Chọn ảnh từ thư viện...',
    cancel: 'Huỷ',
    overSize:
      'Kích thước ảnh vượt quá giới hạn cho phép, vui lòng chọn ảnh có kích thước dưới 3MB',
  },
  alertExitApp: {
    title: 'Thoát ứng dụng',
    description: 'Bạn chắc chắn muốn thoát ứng dụng?',
    cancel: 'Huỷ',
    ok: 'Thoát',
  },
  button: {
    signIn: 'Đăng nhập',
    signUp: 'Đăng ký',
    forgotPassword: 'Quên mật khẩu?',
    resetPassword: 'Đặt lại mật khẩu',
    createAccount: 'Tạo tài khoản',
    profile: 'Thông tin',
    setting: 'Cài đặt',
    logout: 'Đăng xuất',
    update: 'Cập nhật',
    logInWithFacebook: 'Đăng nhập với Facebook',
    scanQRCodeButton: 'Quét mã QR',
    verify: 'Xác thực',
    seeAll: 'Xem tất cả',
    seeMore: 'Xem thêm',
    send: 'Gửi',
    confirm: 'Xác nhận',
  },
  validation: {
    string: {
      required: 'bắt buộc.',
      invalid: 'không đúng.',
      min: 'phải ít nhất',
      character: 'ký tự.',
      equalPassword: 'Mật khẩu không khớp',
    },
  },
  textInput: {
    hintPhone: 'Số điện thoại',
    hintPassword: 'Mật khẩu',
    hintUsername: 'Tên',
    hintEmail: 'Email',
    hintBirthday: 'Ngày sinh',
    hintName: 'Họ và tên',
    hintConfirmPassword: 'Xác nhận mật khẩu',
    hintPhoneOrEmail: 'Số điện thoại hoặc email',
    hintReject: 'Nhập phản hồi',
    hintAffiliateCode: 'Nhập mã',
    hintOldPassword: 'Mật khẩu cũ',
    hintNewPassword: 'Mật khẩu mới',
  },
  scenes: {
    auth: {
      signIn: {
        title: 'Đăng nhập',
        btnLogin: 'Đăng nhập',
      },
    },
    main: {
      home: {
        title: 'Trang chủ',
        hello: 'Hello ',
      },
      profile: {
        title: 'Tài khoản',
      },
    },
  },
};
