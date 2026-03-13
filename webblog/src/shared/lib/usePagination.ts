import { useState } from 'react';

export const usePagination = <T>(data: T[]) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(12);

  const totalData = data.length;
  const indexOfLastPost = currentPage * dataPerPage;
  const indexOfFirstPost = indexOfLastPost - dataPerPage;
  const currentData = data.slice(indexOfFirstPost, indexOfLastPost);

  if (currentPage > Math.ceil(totalData / dataPerPage))
    setCurrentPage(Math.ceil(totalData / dataPerPage));

  return { currentData, dataPerPage, currentPage, setCurrentPage, totalData };
};
