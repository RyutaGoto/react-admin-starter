import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const App = dynamic<{}>(
  () => import('../components/').then((module) => module.App),
  { ssr: false }
);

const Admin: NextPage = () => {
  return <App />;
};

export default Admin;
