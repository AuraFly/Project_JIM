import Item from "./Item";
import { TOPIC1, TOPIC2, TOPIC3 } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:px-8 px-5 py-16 bg-green-800">
      <Item Links={TOPIC1} title="SOMETHING" />
      <Item Links={TOPIC2} title="SOMETHING" />
      <Item Links={TOPIC3} title="SOMETHING" />
    </div>
  );
};

export default ItemsContainer;
