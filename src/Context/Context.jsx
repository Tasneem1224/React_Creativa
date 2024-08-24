import React from "react";

const UseContext = React.createContext();

const UseProvider = UseContext.Provider;

const UseConsumer = UseContext.Consumer;

export { UseProvider, UseConsumer };
