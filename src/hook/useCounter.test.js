import { renderHook, act } from '@testing-library/react'
import useCounter from './useCounter';

describe('useCounter', () => {
  test(`Default value of count will be zero`, () => {
    const callBack = jest.fn();
    const { result } = renderHook(() => useCounter(0, callBack));


    expect(result.current.count).toBe(0);
  });
});