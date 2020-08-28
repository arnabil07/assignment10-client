 import React from 'react';
import Header from './components/header/Header';
import Cart from './components/cart/Cart';
import Items from './components/items/Items';
 
 const App = () => {
   return (
     <div>
       <Header></Header>
       <Cart></Cart>
       <Items></Items>
     </div>
   );
 };
 
 export default App;