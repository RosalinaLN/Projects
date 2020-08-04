import React, { Suspense } from 'react';
import Navigation from './components/shared/Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Movie = React.lazy(() => {
  return import('./components/Movie/Movie')
})

const MovieDetail = React.lazy(() => {
  return import('./components/Movie/MovieDetail/MovieDetail')
})

const NotFound = React.lazy(() => {
  return import('./components/NotFound')
})

function App() {
  return (
    <BrowserRouter> 
      <Navigation />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route exact path="/" component={Movie} />
          <Route path="/movie/:id" component={MovieDetail} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
