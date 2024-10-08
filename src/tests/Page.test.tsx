import '@testing-library/jest-dom/vitest';
import { render } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import Page from '../pages/index';
import { pageNumber, searchResult, totalPages } from '../store/appSlice';
import { IAnimalsResponse } from '../utils/interfaces';

vi.mock('react-redux', () => ({
  useDispatch: vi.fn(),
}));

vi.mock('../App', () => ({
  default: () => (
    <div>
      <h2>Dunghill bird</h2>
      <div>ID: ANMA0000079699</div>
    </div>
  ),
}));

describe('Page', () => {
  const dispatch = vi.fn();

  beforeEach(() => {
    vi.mocked(useDispatch).mockReturnValue(dispatch);
    vi.clearAllMocks();
  });

  it('Data load', () => {
    const searchResultData: IAnimalsResponse = {
      page: {
        pageNumber: 1,
        pageSize: 12,
        numberOfElements: 1,
        totalElements: 1,
        totalPages: 1,
        firstPage: true,
        lastPage: true,
      },
      sort: {
        clauses: [[]],
      },
      animals: [
        {
          avian: true,
          canine: false,
          earthAnimal: false,
          earthInsect: false,
          feline: false,
          name: 'Dunghill bird',
          uid: 'ANMA0000079699',
        },
      ],
    };

    render(<Page data={searchResultData} />);

    expect(dispatch).toHaveBeenCalledWith(
      totalPages(searchResultData.page.totalPages),
    );
    expect(dispatch).toHaveBeenCalledWith(
      pageNumber(searchResultData.page.pageNumber),
    );
    expect(dispatch).toHaveBeenCalledWith(
      searchResult(searchResultData.animals),
    );
  });
});
