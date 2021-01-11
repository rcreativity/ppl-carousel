import { SingleItem, ItemImage, ItemDescription, Info } from "./styled";

export default function Item({ count, item }) {
  return (
    <SingleItem count={count} url={item.url}>
      <ItemImage className="image" url={item.url} />
      <ItemDescription className="description">
        <Info>Name: {item.name}</Info>
        <Info>Price: ${item.price}</Info>
        <Info>Category: {item.category}</Info>
      </ItemDescription>
    </SingleItem>
  );
}
