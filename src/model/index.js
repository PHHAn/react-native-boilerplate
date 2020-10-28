export class PaginationInfo {
  constructor({currentPage = 1, totalPage = 0} = {}) {
    this.currentPage = currentPage;
    this.totalPage = totalPage;
  }
}

export class PaginationData {
  constructor({data = [], pagination = new PaginationInfo()} = {}) {
    this.data = data;
    this.pagination = new PaginationInfo(pagination);
  }
}
