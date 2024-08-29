//import React from 'react';
import './App.css'
import Table from './components/table/Table';


const App = () => {
  const netIncomes = 
  [
    {brand: 'McDonalds', income: 1291283}, 
    {brand: 'Burger King', income: 1927361}, 
    {brand: 'KFC', income: 1098463}
  ];

  const totalIncome = netIncomes.reduce((accumulator,item) => accumulator + item.income, 0);
  const averageIncome = totalIncome / netIncomes.length;

  return (
    <div>
      <h1>Ingresos Netos</h1>
      <Table netIncomes={netIncomes}/>
      <p id='resultado'>Promedio de Ingresos Netos: {averageIncome.toFixed(2)}</p>
    </div>
  );
};

export default App;
