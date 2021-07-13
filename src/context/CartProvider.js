import React, {useState} from 'react';
import CartContext from './CartContext';

const CartProvider = ({children}) => {
  const [produtos, setProdutos] = useState([]);

  addProduto = produto => {
    setProdutos([...produtos, produto]);
  };

  delProduto = produtoId => {
    setProdutos(produtos.splice(produtoId, 1));
  };

  return (
    <CartContext.Provider
      value={{
        produtos: produtos,
        addProduto: addProduto,
        delProduto: delProduto,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
