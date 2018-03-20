import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Admin from './components/Admin';
import Register1 from './components/registers/Register1';
import Register2 from './components/registers/Register2';
import Register3 from './components/registers/Register3';
import Register4 from './components/registers/Register4';
import Register5 from './components/registers/Register5';
import Register6 from './components/registers/Register6';
import Register7 from './components/registers/Register7';
import Register8 from './components/registers/Register8';
import LiscenseeProfile from './components/masters/LiscenseeProfile';
import Transactions from './components/Transactions';
import PendingRequests from './components/PendingRequests';
import MISReports from './components/MISReports';
import Masters from './components/Masters';
import Uploads from './components/Uploads';
import Utilities from './components/Utilities';
import EditProfile from './components/masters/EditProfile';
import TankMaster from './components/masters/TankMaster';
import CreateTank from './components/masters/CreateTank';
import Brand from './components/masters/Brand';
import CreateBrand from './components/masters/createBrand';
import Flavour from './components/masters/Flavour';
import CreateFlavour from './components/masters/CreateFlavour';
import Spirit from './components/masters/Spirit';
import CreateSpirit from './components/masters/CreateSpirit';
import OpeningBalance from './components/opening-balance/OpeningBalance';
import FlavourOpeningEntry from './components/opening-balance/FlavourOpeningEntry';
import SpiritOpeningEntry from './components/opening-balance/SpiritOpeningEntry';
import CreateSpiritOpeningEntry from './components/opening-balance/CreateSpiritOpeningEntry';
import ChangePassword from './components/masters/ChangePassword';
import RouteNotFound from './components/RouteNotFound';
import Summary from './components/Summary';
import Login from './components/Login';

export default (
<Route component={ App }>
  <Route path='/' component={ Login } />
  <Route path='/home' component={ Summary } />
  <Route path='/admin' component={ Admin } />
  <Route path='/register1' component={ Register1 } />
  <Route path='/register2' component={ Register2 } />
  <Route path='/register3' component={ Register3 } />
  <Route path='/register4' component={ Register4 } />
  <Route path='/register5' component={ Register5 } />
  <Route path='/register6' component={ Register6 } />
  <Route path='/register7' component={ Register7 } />
  <Route path='/register8' component={ Register8 } />
  <Route path='/profile' component={ EditProfile } />
  <Route path='/tankmaster' component={ TankMaster } />
  <Route path='/createTank' component={ CreateTank } />
  <Route path='/brand' component={ Brand } />
  <Route path='/createBrand' component={ CreateBrand } />
  <Route path='/flavour' component={ Flavour } />
  <Route path='/createFlavour' component={ CreateFlavour } />
  <Route path='/spirit' component={ Spirit } />
  <Route path='/createSpirit' component={ CreateSpirit } />
  <Route path='/openingBalance' component={ OpeningBalance } />
  <Route path='/flavourDetails' component={ FlavourOpeningEntry } />
  <Route path='/spiritDetails' component={ SpiritOpeningEntry } />
  <Route path='/createSpiritOpening' component={ CreateSpiritOpeningEntry } />
  <Route path='/changePassword' component={ ChangePassword } />
  <Route path='/LiscenseeProfile' component={ LiscenseeProfile } />
  <Route path='/Transactions' component={ Transactions } />
  <Route path='/PendingRequests' component={ PendingRequests } />
  <Route path='/MISReports' component={ MISReports } />
  <Route path='/Masters' component={ Masters } />
  <Route path='/Uploads' component={ Uploads } />
  <Route path='/Utilities' component={ Utilities } />
  <Route path="*" component={ RouteNotFound } />
</Route>
);
