import CartItem from "./CartItem/CartItem";
import { Wrapper } from "./Cart.styles";
import { CartItemType } from "../App";
import PurchaseButton from "./PurchaseButton";
type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
  handleEmptyCart: () => void;
  closeCartDrawer: () => void;
};

const Cart: React.FC<Props> = ({
  cartItems,
  addToCart,
  removeFromCart,
  handleEmptyCart,
  closeCartDrawer,
}) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <div>
        <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
        <PurchaseButton
          closeCartDrawer={closeCartDrawer}
          handleEmptyCart={handleEmptyCart}
          cartItems={cartItems}
        >
          Checkout
        </PurchaseButton>
      </div>
    </Wrapper>
  );
};

export default Cart;
