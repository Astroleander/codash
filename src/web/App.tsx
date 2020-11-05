import React from 'react';
import { useHashRoute } from '../utils/useRouter';
import NavLayout from './NavLayout';
import SolutionLayout from './SolutionLayout';

const ViewRouter =  () => {
  const [route] = useHashRoute(location.hash);
  if (route === '') return <NavLayout />;
  let algo = import('../code' + route);

  return <React.Suspense fallback={<div>loading...</div>}>
    <SolutionLayout />
  </React.Suspense>
}

export default function App() {
  return (
    <ViewRouter />
  )
}
