import React from "react";

export const CaruselContext = React.createContext<{
	childrenCounter: number;
	setChildrenCounter: React.Dispatch<React.SetStateAction<number>>;
}>({
	childrenCounter: 0,
	setChildrenCounter: () => {},
});
