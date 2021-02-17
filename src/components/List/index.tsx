import React from "react";
import ListItem from "../ListItem";
import "./styles.css";

interface ListProps {
  title: string;
  items: Number[];
}

const List: React.FC<ListProps> = ({ title, items }) => {
  return (
    <div className="List">
      <div className="list_header">
        <strong>{title}</strong>
        <strong className="list_counter">1/4</strong>
      </div>
      <div className="list_items">
        {items.map((item, index) => (
          <ListItem key={index}></ListItem>
        ))}
      </div>
    </div>
  );
};

export default List;
