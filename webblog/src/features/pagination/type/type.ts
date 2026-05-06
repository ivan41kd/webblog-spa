export interface PaginationPropsType {
  pages: (number | string)[];
  currentPage: number;
  dataPerPage: number;
  onPageChange: (page: number) => void;
  totalPages: number;
  type?: 'base' | 'loadMore';
}
