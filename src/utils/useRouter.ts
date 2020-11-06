import React, { useState, useEffect } from 'react';
import { routeMeta } from '../web/router/RouteMeta';

const go = (url) => {
  window.location.hash = url
}

export const useHashRouter = (route_list: routeMeta[]) => {
  /** 路由表 */
  const [routes, setRoutes] = useState<routeMeta[]>(route_list);

  return {
    routes,
    go
  };
}

/* 采用一种最弱智的 stack 管理办法, 有点像早期安卓的栈顶模式 */
const useHistory = (initial) => {
  const [stack, setStack] = useState(initial);

  const pushHistory = (path) => {
    if (stack[stack.length - 2] === path) {
      stack.pop();
      setStack(stack);
    } else {
      stack.push(path);
      setStack(stack)
    }
  };

  const popHistory = () => {
    stack.pop();
    setStack(stack);
  }

  return [stack, pushHistory , popHistory];
};

export const useHashRoute = (hash: string) => {
  const [route, setRoute] = useState(hash);
  const [history, pushHistory, popHistory] = useHistory([location.hash]);

  /** 利用原生 API 监听 hashchange */
  const handleHashchange = (event) => {
    /* 一个完整的路由应该有完善的栈管理规则，但是这个不是本项目的重点，只单纯在这个数组里进行栈顶判断 */
    pushHistory(location.hash);
    /* location.hash 是现成的 hash, 没有必要用 event, event 只给了 url */
    setRoute(location.hash);
    console.log('[ROUTER HISTORY]', history);
  };

  useEffect(() => {
    window.addEventListener('hashchange', handleHashchange);
    return () => {
      window.removeEventListener('hashchange', handleHashchange);
    }
  });

  return [route.substring(route.indexOf('#') + 1)];
}