import { CartItemType } from "../../App";
import { ImageWrapper } from "./Item.styles";

import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  DialogContentText,
  DialogContent,
} from "@material-ui/core";
type Props = {
  item: CartItemType;
  handleClose: () => void;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const ItemDialog = ({ item, handleClose, handleAddToCart }: Props) => {
  return (
    <Dialog open={item !== null} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">{item.title}</DialogTitle>
      <DialogContent>
        <ImageWrapper>
          <img src={item.image} alt={item.title} />
        </ImageWrapper>
        <DialogContentText>Categories: {item.category}</DialogContentText>
        <DialogContentText>{item.description}</DialogContentText>
        <DialogContentText>
          <strong>{`$${item.price}`}</strong>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Close
        </Button>
        <Button
          onClick={() => {
            handleAddToCart(item);
            handleClose();
          }}
          color="primary"
        >
          Add To Cart
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ItemDialog;
