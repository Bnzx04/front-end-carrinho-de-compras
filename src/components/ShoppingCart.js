import { useSelector, useDispatch } from 'react-redux';
// CÓDIGO FINAL DO DESAFIO: Importação da action clearCart
import { addItem, removeItem, clearCart } from '../redux/cartActions';

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem({ id: 1, name: 'Laptop', price: 1500 }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  // CÓDIGO FINAL DO DESAFIO: Função que dispara a limpeza completa
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Requisito 5: Cálculo do valor total geral multiplicando quantidade por preço unitário
  const totalGeneral = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div>
      <h1>Carrinho de Compras - TechGear</h1>

      <button onClick={handleAddItem}>
        Adicionar Laptop
      </button>

      {cartItems.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity} x R${item.price} 
                {/* Requisito 5: Exibição do subtotal multiplicado */}
                (Subtotal: R${item.quantity * item.price})
                <button onClick={() => handleRemoveItem(item.id)} style={{ marginLeft: '10px' }}>
                  Remover
                </button>
              </li>
            ))}
          </ul>

          <h3>Total do Carrinho: R${totalGeneral},00</h3>

          {/* CÓDIGO FINAL DO DESAFIO: Botão para disparar a limpeza do estado */}
          <button onClick={handleClearCart} style={{ backgroundColor: '#ef4444', color: 'white', padding: '8px', cursor: 'pointer' }}>
            Limpar Carrinho
          </button>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
