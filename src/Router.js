import {BrowserRouter,Route,Switch} from 'react-router-dom'
import HaberDetay from './pages/HaberDetay';
import HaberEkle from './pages/HaberEkle';
import HaberGuncelle from './pages/HaberGuncelle';
import Home from './pages/Home';
function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/haberekle" component={HaberEkle} />
        <Route path="/haberdetay/:id" component={HaberDetay} />
        <Route path="/haberguncelle/:id" component={HaberGuncelle}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
