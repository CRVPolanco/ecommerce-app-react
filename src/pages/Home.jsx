import React from 'react';
import { SearchInput } from '../components/SearchInput';
import { FilterOptions } from '../components/FilterOptions';
import { ProductList } from '../containers/ProductList';
import { AppContext } from '../context/AppContext';

const Home = () => {

  const { filtedProducts } = React.useContext(AppContext);

	return (
		<>
      <SearchInput />
			<ProductList filtedProducts={filtedProducts}/>
		</>
	);
}

export { Home };
