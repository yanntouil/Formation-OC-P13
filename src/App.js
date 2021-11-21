import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'//HashRouter
import Home from './Pages/Home';
import Layout from './Components/Layout/Layout';
import Login from './Pages/Login';
import DashboardIndex from './Pages/Dashboard/Index';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authAutoLogin } from './redux/auth/authActions';
import AuthRoute from './Components/Route/AuthRoute';


export default function App() {
    const dispatch = useDispatch()
    
    useEffect(() => {// Reconnect user
        const token = localStorage.getItem('token')
        if (token) dispatch(authAutoLogin(token))
    }, [dispatch])

    return (
        <>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" exact element={<Home />}/>
                        <Route path="/login" exact element={
                            <AuthRoute redirectTo="/dashboard" element={<Login />} authenticated={false} />
                        }/>
                        <Route path="/dashboard" exact element={
                            <AuthRoute redirectTo="/login" element={<DashboardIndex />} />
                        } />
                    </Routes>
                </Layout>
            </Router>
        </>
    )
}


