import { Reducer } from "@reduxjs/toolkit";
import { ReduxStoreWithManager, StateSchemaKey } from "App/providers/StoreProvider/config/StateSchema";
import { FC, useEffect } from "react";
import { useStore } from "react-redux";

export type ReducersList = {
	[reducerKey in StateSchemaKey]?: Reducer; 
}

interface DynamicModuleLoaderProps {
	reducers: ReducersList;
	removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader:FC<DynamicModuleLoaderProps> = (props) => {
	const {
		reducers,
		children, 
		removeAfterUnmount
	} = props;
	const store = useStore() as ReduxStoreWithManager;

	useEffect(() => {
		Object.entries(reducers).forEach(([reducerKey, reducer]) => {
			store.reducerManager.add(reducerKey as StateSchemaKey, reducer);
		});
		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(([reducerKey]) => {	
					store.reducerManager.remove(reducerKey as StateSchemaKey);
				});
			}
		};
	}, []);

	return (
		<>
			{children}
		</>
	);
};