// import Header from './components/Header'
// import Body from './components/Body'
// import OrderManagement from './components/OrderManagement'
import Base from './components/Base';
import Index from './components/Index';
import { BrowserRouter as Switch, Route, Routes } from 'react-router-dom';
const react = require('react');
const reactDom = require('react-dom');

function App() {
    return (
        <div>
            <Switch>
                <Routes>
                    <Route exact path='/' element={<Index/>}/>
                    <Route exact path='/base' element={<Base/>}/>
                </Routes>
            </Switch>
        </div>
    )
}

export default App;