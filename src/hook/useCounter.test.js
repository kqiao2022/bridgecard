import { renderHook, act } from '@testing-library/react'
import useCounter from './useCounter';

describe('useCounter', () => {
  test(`Default value of count will be zero`, () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.count).toBe(0);
  });
});