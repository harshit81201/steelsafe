import React from 'react';
import { Footer, Header } from './components.jsx';
import Home from './Home.jsx';
import { About, Companies, Contact, Framework, Initiatives } from './Pages.jsx';

const routes = { '/': Home, '/about/': About, '/initiatives/': Initiatives, '/framework/': Framework, '/companies/': Companies, '/contact/': Contact };

export default function App({ path }) {
  const Page = routes[path];
  return <><Header path={path}/><main id="main" tabIndex="-1">{Page ? <Page/> : <div className="shell section"><h1>Page not found</h1><a className="text-link" href="/">Return home</a></div>}</main><Footer/></>;
}
