import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import NavLoginRegister from './components/NavLoginRegister';
import RegisterUserForm from './components/RegisterUserForm';
import Search from './components/Search';
import SearchHookForm from './components/SearchHookForm';
import CompanyUA from './pages/CompanyUA';
import CompanyUR from './pages/CompanyUR';
import EditCompany from './pages/EditCompany';
import EdiitUser from './pages/EditUser';
import Evaluation from './pages/Evaluation';
import LandingUA from './pages/LandingUA';
import ListCompaniesUA from './pages/ListCompaniesUA';
import ListCompaniesUR from './pages/ListCompaniesUR';
import Login from './pages/Login';
import RegisterCompany from './pages/RegisterCompany';
import RegisterUser from './pages/RegisterUser';
import { AuthProvider } from './shared/context/authContext';

export default function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/user">User</Link>
      <Link to="/company">Company</Link>
      <AuthProvider>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/user">
            <RegisterUser></RegisterUser>
          </Route>
          <Route path="/company">
            <RegisterCompany></RegisterCompany>
          </Route>
          <Route exact path="/">
            <LandingUA>
              <h2>SOY UN CHILDREN</h2>
              <h3>Otro children</h3>
            </LandingUA>
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}