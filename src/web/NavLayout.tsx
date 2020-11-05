import React from 'react';
import { generateDisplayName } from '../utils/generators';
import { routeMeta } from './router/RouteMeta';
import { useHashRouter } from '../utils/useRouter';

const RouteList = () => {
  const { routes, go } = useHashRouter(routeMeta);
  return (<>{routes.map(meta =>
    <li onClick={() => go(meta.path)} key={meta.path}>{ generateDisplayName(meta) }</li>
  )}</>);
}

export default function () {
  return (<>
    <RouteList />
  </>)
};