import React, { useCallback } from "react";
import debounce from "lodash.debounce";

export enum DebounceTimeList {
  FILTER = 500,
}

export const useDebounce = (
  fn: (...args: any[]) => void,
  depends: React.DependencyList
  // eslint-disable-next-line react-hooks/exhaustive-deps
) => useCallback(debounce(fn, DebounceTimeList.FILTER), depends);
