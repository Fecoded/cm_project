import React, { Fragment, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { Route, Switch, Redirect } from 'react-router-dom';
import { selectCurrentUser } from '../redux/admin/admin.selectors';
import { selectCommodityItem } from '../redux/commodity/commodity.selectors';

// Error Handling
import ErrorHandler from '../components/error-boundary/error-boundary.component';

// Spinner
import Spinner from '../components/spinner/spinner-component';

// PROTECTED ROUTING
import PrivateRouteAdmin from '../components/routing/PrivateRouteAdmin';
import PrivateRouteUser from '../components/routing/PrivateRouteUser';

// Admin Component
const AdminLogin = lazy(() => import('./auth/admin/login'));
const CreateCommodity = lazy(() => import('./home/admin/createCommodity'));
const EditCommodity = lazy(() => import('./home/admin/editCommodity'));
const CommodityList = lazy(() => import('./home/admin/commodityList'));
const UserList = lazy(() => import('./home/admin/userList'));

// User Component
const UserLogin = lazy(() => import('./auth/user/Login'));
const UserRegister = lazy(() => import('./auth/user/Register'));
const HomePage = lazy(() => import('./home/user/homePage'));
const CommodityItem = lazy(() =>
  import('../components/card/commodityItem.component')
);
const StallPage = lazy(() => import('./stall/stallPage'));
const ProfilePage = lazy(() => import('./profile/profile'));
const CommodityItems = lazy(() =>
  import('../components/card/commodityItem.component')
);
const Cart = lazy(() => import('./cart/cart'));
const WalletPage = lazy(() => import('./wallet/walletPage'));

const Routes = ({ admin: { isAuthenticated, user }, commodityItem }) => (
  <Fragment>
    <Switch>
      <ErrorHandler>
        <Suspense fallback={<Spinner />}>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login' component={UserLogin} />
          <Route exact path='/register' component={UserRegister} />
          <PrivateRouteUser exact path='/stall' component={StallPage} />
          <PrivateRouteUser exact path='/profile' component={ProfilePage} />
          <PrivateRouteUser exact path='/wallet' component={WalletPage} />
          <PrivateRouteUser exact path='/cart' component={Cart} />
          <Route exact path='/commodity' component={CommodityItems} />
          <Route
            path='/commodity/:itemname'
            render={() =>
              commodityItem !== null ? <CommodityItem /> : <Spinner />
            }
          />
          <Route
            exact
            path='/admin/login'
            render={() =>
              isAuthenticated && user ? (
                <Redirect to='/admin/upload' />
              ) : (
                <AdminLogin />
              )
            }
          />
          <PrivateRouteAdmin
            exact
            path='/admin/upload'
            component={CreateCommodity}
          />
          <PrivateRouteAdmin exact path='/admin/users' component={UserList} />
          <PrivateRouteAdmin
            exact
            path='/admin/edit'
            component={EditCommodity}
          />
          <PrivateRouteAdmin
            exact
            path='/admin/commodities'
            component={CommodityList}
          />
        </Suspense>
      </ErrorHandler>
    </Switch>
  </Fragment>
);

Routes.propTypes = {
  admin: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  admin: selectCurrentUser,
  commodityItem: selectCommodityItem,
});

export default connect(mapStateToProps)(Routes);
