const lists = ["good mood", "passport", "toothbrush"];

export default function ItemList() {
  return (
    <ul>
      <Item />
      <Item />
      <Item />
    </ul>
  );
}

function Item() {
  return (
    <li className="item">
      <label>
        <input type="checkbox" />
        good mood
      </label>
    </li>
  );
}
