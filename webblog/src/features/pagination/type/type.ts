export interface PaginationTypeProps {
  data: unknown[];
  currentPage: number;
  dataPerPage: number;
  onPageChange: (page: number) => void;
}
