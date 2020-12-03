import React, { useEffect, useState } from 'react';
import styles from './index.less';
import axios from 'axios';

const Home = (props: any) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get('/api/users').then(res => {
      setList(res.data);
    });
  }, []);
  return (
    <div>
      <h2>用户列表</h2>
      <ul>
        {list.map((item: any, i: number) => {
          return (
            <li key={i}>
              {item.name} -- {item.age}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Home;
