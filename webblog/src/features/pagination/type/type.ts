export interface PaginationPropsType {
  data: unknown[];
  currentPage: number;
  dataPerPage: number;
  onPageChange: (page: number) => void;
}
