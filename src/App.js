import HomePage from './pages/home/home';
import SearchPage from './pages/search/search';
import PetDetailsPage from './pages/detail/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound/notFound';
import Root from './components/root/root';
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';

const appRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root/>}>
      <Route index element={<HomePage/>}/>
      <Route path=":type" element={<HomePage/>}/>
      <Route path=":type/:id" element={<PetDetailsPage/>}/>
      <Route path="search" element={<SearchPage/>}/>
      <Route path="pet-details-not-found" element={<PetDetailsNotFound/>}/>
  </Route>
))
function App() {
  return (
   <RouterProvider router={appRouter}>

   </RouterProvider>
  );
}

export default App;
