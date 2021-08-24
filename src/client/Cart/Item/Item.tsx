import Button from "@material-ui/core/Button";
// Types
import { CartItemType } from "../../App";
// Styles
import { Wrapper } from "./Item.styles";

type Props = {
  item: CartItemType;
  onClick: () => void;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddToCart, onClick }) => (
  <Wrapper onClick={onClick}>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <h3>${item.price}</h3>
    </div>
    <Button
      onClick={(e) => {
        e.stopPropagation();
        handleAddToCart(item);
      }}
      data-cy={`add-to-cart-${item.id}`}
    >
      Add to cart
    </Button>
  </Wrapper>
);

export default Item;
