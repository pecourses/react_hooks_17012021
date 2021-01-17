import React from 'react';
import {useMouse} from './useMouse';

export default function Mouse(props){
  const [x,y] = useMouse();
  return <img src="https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg" />;
}