import React from 'react';
import ListItem from './components/ListItem';
import { routeMeta } from './router/RouteMeta';
import { useHashRouter } from '../utils/useRouter';

const RouteList = () => {
  const { routes, go } = useHashRouter(routeMeta);
  return (<ul>{routes.map(meta =>
    <li onClick={() => go(meta.path)} key={meta.path}><ListItem meta={meta}/></li>
  )}</ul>);
}

export default function () {
  return (<>
    <RouteList />
  </>);
};