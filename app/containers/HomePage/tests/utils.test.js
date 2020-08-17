import { getCurrentPagination } from '../utils';
import { DEFAULT_PAGINATION, PAGINATION_KEY } from '../../../constants/config';

describe('Utils Tests', () => {
  describe('Pagination', () => {
    test('Get Current Pagination on next', () => {
      const newPaginations = getCurrentPagination(
        { offset: 0 },
        PAGINATION_KEY.NEXT,
      );
      expect(newPaginations).toEqual({ offset: DEFAULT_PAGINATION.BOX });
    });

    test('Get Current Pagination on prev', () => {
      const newPaginations = getCurrentPagination(
        { offset: DEFAULT_PAGINATION.BOX },
        PAGINATION_KEY.PREV,
      );
      expect(newPaginations).toEqual({ offset: 0 });
    });
  });
});
