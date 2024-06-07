import { PaginationWrapper, PageBtn, PageNumBtn } from './Pagination.styled';

const Pagination = ({page, handleClickNext,  handleClickPrevoius, handlePageSet, totalEvents, eventsPerPage}) => {
    const activePage = page ? page : 1;
    const totalPages = Math.ceil(totalEvents / eventsPerPage);
    console.log(page)
    console.log('activepage', activePage)

    const pages = Array.from({length: totalPages}, (_, index) => index + 1);

    return (
    <PaginationWrapper>
        <PageBtn type='button' onClick={handleClickPrevoius} disabled={page === 1}>Previous</PageBtn>

        {pages.map((pageNum) => (
        <PageNumBtn
            key={pageNum}
            onClick={() => handlePageSet(pageNum)}
            style={{ 
                backgroundColor: activePage === pageNum  ? '#E59560' : "#BACEC1", 
            }}
            >
          {pageNum}
        </PageNumBtn>
        ))} 

        <PageBtn type='button' onClick={handleClickNext} disabled={page === totalPages}>Next</PageBtn> 
    </PaginationWrapper>
  )
}

export default Pagination;
