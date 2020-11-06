import React from 'react';
import { useHashRoute } from '../utils/useRouter';
import NavLayout from './NavLayout';
import SolutionLayout from './SolutionLayout';

const ViewRouter =  () => {
  const [route] = useHashRoute(location.hash);
  if (route === '') return <NavLayout />;
  return <SolutionLayout route={route} />;
}

export default function App() {
  return (
    <article>
      <ViewRouter />
    </article>
  )
}
