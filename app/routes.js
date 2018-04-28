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
import Register9 from './components/registers/Register9';
import Register1Summary from './components/registers/Register1Summary';
import Register2Summary from './components/registers/Register2Summary';
import Register3Summary from './components/registers/Register3Summary';
import Register4Summary from './components/registers/Register4Summary';
import Register5Summary from './components/registers/Register5Summary';
import Register6Summary from './components/registers/Register6Summary';
import Register7Summary from './components/registers/Register7Summary';
import Register8Summary from './components/registers/Register8Summary';
import Register9Summary from './components/registers/Register9Summary';
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
import WineType from './components/masters/WineType';
import CreateWineType from './components/masters/CreateWineType';
import WineVariety from './components/masters/WineVariety';
import CreateWineVariety from './components/masters/CreateWineVariety';
import Brand from './components/masters/Brand';
import CreateBrand from './components/masters/CreateBrand';
import Flavour from './components/masters/Flavour';
import CreateFlavour from './components/masters/CreateFlavour';
import Spirit from './components/masters/Spirit';
import CreateSpirit from './components/masters/CreateSpirit';
import OpeningBalance from './components/opening-balance/OpeningBalance';
import FlavourOpeningEntry from './components/opening-balance/FlavourOpeningEntry';
import CreateFlavourOpeningEntry from './components/opening-balance/CreateFlavourOpeningEntry';
import SpiritOpeningEntry from './components/opening-balance/SpiritOpeningEntry';
import CreateSpiritOpeningEntry from './components/opening-balance/CreateSpiritOpeningEntry';
import GrapesOpeningEntry from './components/opening-balance/GrapesOpeningEntry';
import CreateGrapesOpeningEntry from './components/opening-balance/CreateGrapesOpeningEntry';
import CrushedJuiceOpeningEntry from './components/opening-balance/CrushedJuiceOpeningEntry';
import CreateCrushedJuiceOpeningEntry from './components/opening-balance/CreateCrushedJuiceOpeningEntry';
import FermentedWineOpeningEntry from './components/opening-balance/FermentedWineOpeningEntry';
import CreateFermentedWineOpeningEntry from './components/opening-balance/CreateFermentedWineOpeningEntry';
import BottledWineOpeningEntry from './components/opening-balance/BottledWineOpeningEntry';
import CreateBottledWineOpeningEntry from './components/opening-balance/CreateBottledWineOpeningEntry';
import LabelledBottleOpeningEntry from './components/opening-balance/LabelledBottleOpeningEntry';
import CreateLabelledBottleOpeningEntry from './components/opening-balance/CreateBottledWineOpeningEntry';
import FinishedGoodsOpeningEntry from './components/opening-balance/FinishedGoodsOpeningEntry';
import CreateFinishedGoodsOpeningEntry from './components/opening-balance/CreateFinishedGoodsOpeningEntry';
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
  <Route path='/register9' component={ Register9 } />
  <Route path='/register1Summary' component={ Register1Summary } />
  <Route path='/register2Summary' component={ Register2Summary } />
  <Route path='/register3Summary' component={ Register3Summary } />
  <Route path='/register4Summary' component={ Register4Summary } />
  <Route path='/register5Summary' component={ Register5Summary } />
  <Route path='/register6Summary' component={ Register6Summary } />
  <Route path='/register7Summary' component={ Register7Summary } />
  <Route path='/register8Summary' component={ Register8Summary } />
  <Route path='/register9Summary' component={ Register9Summary } />
  <Route path='/profile' component={ EditProfile } />
  <Route path='/tankmaster' component={ TankMaster } />
  <Route path='/createTank' component={ CreateTank } />
  <Route path='/wineType' component={ WineType } />
  <Route path='/createWineType' component={ CreateWineType } />
  <Route path='/variety' component={ WineVariety } />
  <Route path='/createWineVariety' component={ CreateWineVariety } />
  <Route path='/brand' component={ Brand } />
  <Route path='/createBrand' component={ CreateBrand } />
  <Route path='/flavour' component={ Flavour } />
  <Route path='/createFlavour' component={ CreateFlavour } />
  <Route path='/spirit' component={ Spirit } />
  <Route path='/createSpirit' component={ CreateSpirit } />
  <Route path='/openingBalance' component={ OpeningBalance } />
  <Route path='/flavourDetails' component={ FlavourOpeningEntry } />
  <Route path='/createFlavourOpening' component={ CreateFlavourOpeningEntry } />
  <Route path='/spiritDetails' component={ SpiritOpeningEntry } />
  <Route path='/createSpiritOpening' component={ CreateSpiritOpeningEntry } />
  <Route path='/grapesDetails' component={ GrapesOpeningEntry } />
  <Route path='/createGrapesOpening' component={ CreateGrapesOpeningEntry } />
  <Route path='/crushedJuiceDetails' component={ CrushedJuiceOpeningEntry } />
  <Route path='/createCrushedJuiceOpening' component={ CreateCrushedJuiceOpeningEntry } />
  <Route path='/fermentedWineDetails' component={ FermentedWineOpeningEntry } />
  <Route path='/createFermentedWineOpening' component={ CreateFermentedWineOpeningEntry } />
  <Route path='/bottledWineDetails' component={ BottledWineOpeningEntry } />
  <Route path='/createBottledWineOpening' component={ CreateBottledWineOpeningEntry } />
  <Route path='/labelledBottleDetails' component={ LabelledBottleOpeningEntry } />
  <Route path='/createLabelledBottleOpening' component={ CreateLabelledBottleOpeningEntry } />
  <Route path='/finishedGoodsDetails' component={ FinishedGoodsOpeningEntry } />
  <Route path='/createFinishedGoodsOpening' component={ CreateFinishedGoodsOpeningEntry } />
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
