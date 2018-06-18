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
import Register10 from './components/registers/Register10';
import Register1Summary from './components/registers/Register1Summary';
import Register2Summary from './components/registers/Register2Summary';
import Register3Summary from './components/registers/Register3Summary';
import Register4Summary from './components/registers/Register4Summary';
import Register5Summary from './components/registers/Register5Summary';
import Register6Summary from './components/registers/Register6Summary';
import Register7Summary from './components/registers/Register7Summary';
import Register8Summary from './components/registers/Register8Summary';
import Register9Summary from './components/registers/Register9Summary';
import Register10Summary from './components/registers/Register10Summary';
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
import GrapeVariety from './components/masters/GrapeVariety';
import CreateGrapeVariety from './components/masters/CreateGrapeVariety';
import Brand from './components/masters/Brand';
import CreateBrand from './components/masters/CreateBrand';
import Flavour from './components/masters/Flavour';
import CreateFlavour from './components/masters/CreateFlavour';
import Spirit from './components/masters/Spirit';
import CreateSpirit from './components/masters/CreateSpirit';
import Vintage from './components/masters/Vintage';
import CreateGrapesSupplier from './components/masters/CreateGrapesSupplier';
import GrapesSupplier from './components/masters/GrapesSupplier';
import CreateVintage from './components/masters/CreateVintage';
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
import TirageOpeningEntry from './components/opening-balance/TirageOpeningEntry';
import CreateTirageOpeningEntry from './components/opening-balance/CreateTirageOpeningEntry';
import DisgorgedOpeningEntry from './components/opening-balance/DisgorgedOpeningEntry';
import CreateDisgorgedOpeningEntry from './components/opening-balance/CreateDisgorgedOpeningEntry';
import LabelledBottleOpeningEntry from './components/opening-balance/LabelledBottleOpeningEntry';
import CreateLabelledBottleOpeningEntry from './components/opening-balance/CreateLabelledBottleOpeningEntry';
import FinishedGoodsOpeningEntry from './components/opening-balance/FinishedGoodsOpeningEntry';
import CreateFinishedGoodsOpeningEntry from './components/opening-balance/CreateFinishedGoodsOpeningEntry';
import WineryUser from './components/admin/WineryUser';
import ExciseOfficer from './components/admin/ExciseOfficer';
import ChangePassword from './components/masters/ChangePassword';
import RouteNotFound from './components/RouteNotFound';
import Summary from './components/Summary';
import Login from './components/Login';
import { AdminRoute, User1Route, User12Route, User3Route } from './auth-route-handle';

export default (
<Route component={ App }>
  <Route path='/' component={ Login } />
  <Route path='/admin' component={ AdminRoute(Admin) } />
  <Route path='/wineryUser' component={ AdminRoute(WineryUser) } />
  <Route path='/exciseOfficer' component={ AdminRoute(ExciseOfficer) } />
  <Route path='/home' component={ User1Route(Summary) } />
  <Route path='/profile' component={ User1Route(EditProfile) } />
  <Route path='/tankmaster' component={ User1Route(TankMaster) } />
  <Route path='/createTank' component={ User1Route(CreateTank) } />
  <Route path='/wineType' component={ User1Route(WineType) } />
  <Route path='/createWineType' component={ User1Route(CreateWineType) } />
  <Route path='/variety' component={ User1Route(GrapeVariety) } />
  <Route path='/createGrapeVariety' component={ User1Route(CreateGrapeVariety) } />
  <Route path='/brand' component={ User1Route(Brand) } />
  <Route path='/createBrand' component={ User1Route(CreateBrand) } />
  <Route path='/flavour' component={ User1Route(Flavour) } />
  <Route path='/createFlavour' component={ User1Route(CreateFlavour) } />
  <Route path='/spirit' component={ User1Route(Spirit) } />
  <Route path='/createSpirit' component={ User1Route(CreateSpirit) } />
  <Route path='/vintage' component={ User1Route(Vintage) } />
  <Route path='/createVintage' component={ User1Route(CreateVintage) } />
  <Route path='/grapesSupplier' component={ User1Route(GrapesSupplier) } />
  <Route path='/createGrapesSupplier' component={ User1Route(CreateGrapesSupplier) } />
  <Route path='/register1' component={ User12Route(Register1) } />
  <Route path='/register2' component={ User12Route(Register2) } />
  <Route path='/register3' component={ User12Route(Register3) } />
  <Route path='/register4' component={ User12Route(Register4) } />
  <Route path='/register5' component={ User12Route(Register5) } />
  <Route path='/register6' component={ User12Route(Register6) } />
  <Route path='/register7' component={ User12Route(Register7) } />
  <Route path='/register8' component={ User12Route(Register8) } />
  <Route path='/register9' component={ User12Route(Register9) } />
  <Route path='/register10' component={ User12Route(Register10) } />
  <Route path='/register1Summary' component={ User12Route(Register1Summary) } />
  <Route path='/register2Summary' component={ User12Route(Register2Summary) } />
  <Route path='/register3Summary' component={ User12Route(Register3Summary) } />
  <Route path='/register4Summary' component={ User12Route(Register4Summary) } />
  <Route path='/register5Summary' component={ User12Route(Register5Summary) } />
  <Route path='/register6Summary' component={ User12Route(Register6Summary) } />
  <Route path='/register7Summary' component={ User12Route(Register7Summary) } />
  <Route path='/register8Summary' component={ User12Route(Register8Summary) } />
  <Route path='/register9Summary' component={ User12Route(Register9Summary) } />
  <Route path='/register10Summary' component={ User12Route(Register10Summary) } />
  <Route path='/openingBalance' component={ User12Route(OpeningBalance) } />
  <Route path='/flavourDetails' component={ User12Route(FlavourOpeningEntry) } />
  <Route path='/createFlavourOpening' component={ User12Route(CreateFlavourOpeningEntry) } />
  <Route path='/spiritDetails' component={ User12Route(SpiritOpeningEntry) } />
  <Route path='/createSpiritOpening' component={ User12Route(CreateSpiritOpeningEntry) } />
  <Route path='/grapesDetails' component={ User12Route(GrapesOpeningEntry) } />
  <Route path='/createGrapesOpening' component={ User12Route(CreateGrapesOpeningEntry) } />
  <Route path='/crushedJuiceDetails' component={ User12Route(CrushedJuiceOpeningEntry) } />
  <Route path='/createCrushedJuiceOpening' component={ User12Route(CreateCrushedJuiceOpeningEntry) } />
  <Route path='/bulkWineDetails' component={ User12Route(FermentedWineOpeningEntry) } />
  <Route path='/createFermentedWineOpening' component={ User12Route(CreateFermentedWineOpeningEntry) } />
  <Route path='/bottledWineDetails' component={ User12Route(BottledWineOpeningEntry) } />
  <Route path='/createBottledWineOpening' component={ User12Route(CreateBottledWineOpeningEntry) } />
  <Route path='/tirageDetails' component={ User12Route(TirageOpeningEntry) } />
  <Route path='/createTirageOpening' component={ User12Route(CreateTirageOpeningEntry) } />
  <Route path='/disgorgedDetails' component={ User12Route(DisgorgedOpeningEntry) } />
  <Route path='/createDisgorgedOpening' component={ User12Route(CreateDisgorgedOpeningEntry) } />
  <Route path='/labelledBottleDetails' component={ User12Route(LabelledBottleOpeningEntry) } />
  <Route path='/createLabelledBottleOpening' component={ User12Route(CreateLabelledBottleOpeningEntry) } />
  <Route path='/finishedGoodsDetails' component={ User12Route(FinishedGoodsOpeningEntry) } />
  <Route path='/createFinishedGoodsOpening' component={ User12Route(CreateFinishedGoodsOpeningEntry) } />
  <Route path='/changePassword' component={ User12Route(ChangePassword) } />
  <Route path='/LiscenseeProfile' component={ User12Route(LiscenseeProfile) } />
  <Route path='/Transactions' component={ User12Route(Transactions) } />
  <Route path='/PendingRequests' component={ User12Route(PendingRequests) } />
  <Route path='/MISReports' component={ User12Route(MISReports) } />
  <Route path='/Masters' component={ User12Route(Masters) } />
  <Route path='/Uploads' component={ User12Route(Uploads) } />
  <Route path='/Utilities' component={ User12Route(Utilities) } />
  <Route path="*" component={ RouteNotFound } />
</Route>
);
