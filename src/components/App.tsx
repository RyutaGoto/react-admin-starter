import * as React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { Dashboard } from './Dashboard';
import { authProvider } from '../utils/authProvider';
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

export const App = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    dashboard={Dashboard}
  >
    <Resource name="posts" list={ListGuesser} />
    <Resource name="comments" list={ListGuesser} />
  </Admin>
);
