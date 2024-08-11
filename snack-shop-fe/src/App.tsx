import { Products } from './Components/ProductList'
import { Header } from './Components/Header'
import { NavigationBar } from './Components/NavigationBar';

const App = () => {


  return (
    <>
      <Header headingText={"Snack Shop"} />
      <NavigationBar />
      <Products />
    </>
  )
};

export default App;