import React from "react";

import styles from './Siderbar.module.scss'

const list = [
  {
    id: 1,
    title: "Узнать погоду"
  },
  {
    id: 2,
    title: "Новости"
  },
  {
    id: 3,
    title: "NASA"
  },
]

const Sidebar: React.FC = () => {
  return <div className={styles.container}>
    {list.map((item) => (
      <ul key={item.id}>
        <li>
          <p>{item.title}</p>
        </li>
      </ul>
    ))}
  </div>;
};

export default Sidebar;
