import React from 'react';
import logo from './logo.svg';
import data from './data.json'
import './App.css';
import FilterableProductTable from './components/FilterableProductTable.js'
import SearchBar from './components/SearchBar.js'
import ProductTable from './components/ProductTable.js'


function App() {
  return (
    <div className="App">
      <FilterableProductTable products={data} />

      <SearchBar />

      <ProductTable />

    </div>
  );
}

export default App;
