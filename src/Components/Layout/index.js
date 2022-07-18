import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import PrivateRoute from 'Components/Layout/PrivateRoute';
import Admins from '../Admins/index';
const AdminsProfile = lazy(() => import('Components/AdminFlow/Profile/Profile'));
const Employees = lazy(() => import('Components/Employees'));
const EmployeesHome = lazy(() => import('Components/EmployeesFlow/Home/Home'));
const EmployeesProfile = lazy(() => import('Components/EmployeesFlow/Profile/Profile'));
const SignUp = lazy(() => import('Components/EmployeesFlow/SignUp/SignUp'));
const Login = lazy(() => import('Components/Login'));
const SuperAdmins = lazy(() => import('Components/SuperAdmins'));
const Projects = lazy(() => import('Components/Projects'));
const Tasks = lazy(() => import('Components/Tasks'));
const TimeSheets = lazy(() => import('Components/TimeSheets'));
import Footer from '../Footer/index';
import Header from '../Header/index';
import Home from '../Home/index';
import Loader from 'Components/Shared/Loader';
import styles from './layout.module.css';
import ProjectReport from 'Components/GenerateReport/ProjectReport';

function Layout() {
  return (
    <div className={styles.container}>
      <Router>
        <Header />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" component={ProjectReport} /> {/*DELETE THIS PLS*/}
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/admins" role="ADMIN" component={Admins} />
            <PrivateRoute
              exact
              path="/admins/profile/:id"
              role={'ADMIN'}
              component={AdminsProfile}
            />
            <PrivateRoute
              exact
              path="/super-admins"
              role={['SUPERADMIN']}
              component={SuperAdmins}
            />
            <PrivateRoute
              exact
              path="/employees"
              role={['EMPLOYEE', 'ADMIN', 'PM']}
              component={Employees}
            />
            <PrivateRoute
              exact
              path="/employees/home/:id"
              role="EMPLOYEE"
              component={EmployeesHome}
            />
            <PrivateRoute
              exact
              path="/employees/profile/:id"
              role={['EMPLOYEE', 'ADMIN', 'PM']}
              component={EmployeesProfile}
            />
            <PrivateRoute
              exact
              path="/projects"
              role={['EMPLOYEE', 'ADMIN', 'PM']}
              component={Projects}
            />
            <PrivateRoute
              exact
              path="/time-sheets"
              role={['EMPLOYEE', 'ADMIN', 'PM']}
              component={TimeSheets}
            />
            <PrivateRoute
              exact
              path="/tasks"
              role={['EMPLOYEE', 'ADMIN', 'PM']}
              component={Tasks}
            />
            <Redirect to="/login" />
          </Switch>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
}

export default Layout;
