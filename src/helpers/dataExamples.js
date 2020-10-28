import {PaginationData, PaginationInfo} from 'model';

const dataTest = [
  {
    name: 'Foundation',
    desc: 'Lấy lại căng bản và giao tiếp',
    image: 'https://testoffice.talksenglish.com/upload/level/level-1.png',
  },
  {
    name: 'Basic communication',
    desc: 'Luyện tập giao tiếp chủ đề cơ bản',
    image: 'https://testoffice.talksenglish.com/upload/level/level-2.png',
  },
  {
    name: 'Developing communication',
    desc: 'Luyên tập giao tiếp chủ đề chuyên sâu',
    image: 'https://testoffice.talksenglish.com/upload/level/level-3.png',
  },
  {
    name: 'Debate-Discussion',
    desc: 'Lập luận tư duy phản biện',
    image: 'https://testoffice.talksenglish.com/upload/level/level-4.png',
  },
  {
    name: 'Talks Online',
    desc: 'Một kèm một',
    image: 'https://testoffice.talksenglish.com/upload/level/level-default.png',
  },
];

export const testListData = new PaginationData({
  data: dataTest,
  pagination: new PaginationInfo({currentPage: 1, totalPage: 100}),
});
