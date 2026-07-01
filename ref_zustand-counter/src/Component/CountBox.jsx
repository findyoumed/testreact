import React from 'react'
import counterStore from '../stores/counterStore';

const CountBox = () => {
  const {count} = counterStore();

  return (
    <>
      <h3>countBox : {count}</h3>   
    </>
  )
}

export default CountBox
