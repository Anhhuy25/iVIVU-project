import React, { useContext, useEffect, useState } from 'react';


const AppContext = React.createContext();

const getLocalStorage = () => {
  let cartItems = localStorage.getItem('cartItems');

  if (cartItems) {
    return JSON.parse(localStorage.getItem('cartItems'));
  } else {
    return [];
  }
}

const AppProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getLocalStorage());
  const [newList, setNewList] = useState([]);

  const specificItem = (id) => {
    const clickItem = cartItems.filter(item => item.id === id);
    setNewList(clickItem)
  }

  const addItem = (item) => {
    if (item.quantity === 1) {
      console.log('hello');

    }
    setCartItems([...cartItems, item]);
  }

  const removeItem = (id) => {
    const chooseItem = cartItems.filter(x => x.id !== id);

    setCartItems(chooseItem)
  }

  const incItem = (id) => {
    const increase = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 }
      }
      return item;
    })

    setCartItems(increase)
  }

  const decItem = (id) => {
    const decreace = cartItems.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    })

    setCartItems(decreace)
  }

  let { total } = cartItems.reduce((cartTotal, cartItem) => {
    const { price, quantity } = cartItem;

    cartTotal.total += quantity * price;
    return cartTotal;
  }, { total: 0 });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems])

  return (
    <AppContext.Provider
      value={{
        cartItems, setCartItems,
        addItem, removeItem,
        incItem, decItem,
        total,
        newList, specificItem,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}


const useGlobalContext = () => {
  return useContext(AppContext);
}


export { AppContext, AppProvider, useGlobalContext };