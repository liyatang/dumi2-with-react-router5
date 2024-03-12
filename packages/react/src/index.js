import { isEqual } from 'lodash-es';
import { useRef } from 'react';
import { useRouteMatch } from 'react-router';

function useMemoRouteMatch() {
  // 在一些场景里，match 是新的。
  const match = useRouteMatch();

  const refMatch = useRef(match);

  if (!isEqual(refMatch.current, match)) {
    refMatch.current = match;
  }

  return refMatch.current;
}

export { useMemoRouteMatch };
