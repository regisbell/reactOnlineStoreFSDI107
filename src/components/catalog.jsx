import './catalog.css';
import Product from './product';
import React, { useEffect, useState } from 'react';
import DataService from '../services/dataService';

const Catalog = () => {
    // state vars are IMMUTABLES
    let [products, setProducts] = useState([]);

    const loadCatalog = () => {
        console.log("Catalog cmp loaded");
        let service = new DataService();
        let data = service.getCatalog();
        setProducts(data);
        console.log("Retrieved", data);
    };

    // hook to do something when the component is rendered the first time only
    useEffect(() => {
        // do this when the componemt loads
        loadCatalog();
    }); 

    return (
        <div className="catalog">
            <h1>This is my awesome Catalog</h1>
            <h3>We have {products.length} amazing products for you</h3>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
        </div>
    );
}

export default Catalog;