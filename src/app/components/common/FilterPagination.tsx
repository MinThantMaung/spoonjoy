import React from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

type Props = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

const PaginationComponent = ({ currentPage, totalPages, onPageChange }: Props) => {
    const handlePrev = () => {
        if (currentPage > 1) {
          onPageChange(currentPage - 1);
        }
      };
    
    const handleNext = () => {
        if (currentPage < totalPages) {
          onPageChange(currentPage + 1);
        }
    };

    return (
        <>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                    <PaginationPrevious onClick={handlePrev} className='hover:cursor-pointer'/>
                    </PaginationItem>

                    {[...Array(totalPages)].map((_, i) => (
                    <PaginationItem key={i} className='hover:cursor-pointer'>
                        <PaginationLink
                        isActive={i + 1 === currentPage}
                        onClick={() => onPageChange(i + 1)}
                        >
                        {i + 1}
                        </PaginationLink>
                    </PaginationItem>
                    ))}

                    <PaginationItem>
                        <PaginationNext onClick={handleNext} className='hover:cursor-pointer'/>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </>
    );
};

export default PaginationComponent;