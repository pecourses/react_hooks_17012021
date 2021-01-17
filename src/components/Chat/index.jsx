import React, { useState, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import reducer from './reducer';

const data = {
  users: [
    {
      id: 1,
      name: 'Tom Fox',
    },
    {
      id: 2,
      name: 'John Smith',
    },
    {
      id: 3,
      name: 'Ivan Inanov',
    },
  ],
  messages: [
    {
      userId: 1,
      body: 'some text',
    },
    {
      userId: 2,
      body: 'some text',
    },
    {
      userId: 1,
      body: 'some text',
    },
    {
      userId: 1,
      body: 'some text',
    },
    {
      userId: 2,
      body: 'some text',
    },
  ],
};
const getData = () => data;

function Chat(props) {
  const [state, dispatch] = useReducer(reducer,{
    users: new Map(),
    messages: [],
  });

  useEffect(() => {
    const data = getData();
    dispatch({
      type: 'GET_SUCCESS',
      data,
    });
  }, []);

  const {messages} = state;
  
  return(
    <ul>
      {messages.map((i,index) => (
        <li key={index}>{JSON.stringify(i)}</li>
      ))}
    </ul>
  );  
}

export default Chat;