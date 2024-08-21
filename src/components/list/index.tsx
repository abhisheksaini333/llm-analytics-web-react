import React from 'react';
import './styles.css';

interface ListProps {
  items: Array<{ id: number, label: string }>;
  onItemClick: (item: { id: number, label: string }) => void;
}

const List: React.FC<ListProps> = ({ items, onItemClick }) => {
  return (
    <ul className='list'>
      {items.map((item) => (
        <li key={item.id} onClick={() => onItemClick(item)} className='list-item'>
          {item.label}
        </li>
      ))}
    </ul>
  );
};

export default List;
