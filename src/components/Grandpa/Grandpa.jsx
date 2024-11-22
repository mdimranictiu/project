import React, { createContext } from 'react';
import Dad from '../Dad/Dad';
import Uncle from '../Uncle/Uncle';
import Aunt from '../Aunt/Aunt';
import './Grandpa.css'

export const AssetContext =createContext('gold');

const Grandpa = () => {
    const asset ='diamond ring'
    return (
        <div className='grandpa '>
            <h2>Grandpa</h2>
            <AssetContext.Provider value="gold">
            <section className='flex'>
            <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Aunt></Aunt>

            </section>
            </AssetContext.Provider>
        </div>
    );
};

export default Grandpa;
/*

1. Create a content and export it
2. Add Provider for the context with a value
3 . UseContext to Access value in the Context API



*/