import './App.css'
import { Navbar } from './components'
import { Home } from './pages'
import { Provider } from 'react-redux'
import store from './redux/store'


const App = () => {
    return (
        <Provider store={store}>
            <Navbar/>
            <Home />
        </Provider>
    )
}

export default App
