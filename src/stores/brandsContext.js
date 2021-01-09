import React, { createContext, useContext } from 'react';
import { createBrandsStore } from './brandsStore';
import { useLocalObservable } from 'mobx-react';

const BrandsContext = createContext(null);

export const BrandsProvider = ({children}) => {
    const brandsStore = useLocalObservable(createBrandsStore);

    return (
        <BrandsContext.Provider value={brandsStore}>
            {children}
        </BrandsContext.Provider>
    )
}

export const useBrandsStore = () => useContext(BrandsContext);