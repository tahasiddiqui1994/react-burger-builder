import React from 'react'

const AddContext = React.createContext() ;
const RemoveContext = React.createContext() ;

const AddProvider = AddContext.Provider ;
const AddConsumer = AddContext.Consumer ;

const RemoveProvider = RemoveContext.Provider ;
const RemoveConsumer = RemoveContext.Consumer ;

export { AddProvider, AddConsumer, RemoveProvider, RemoveConsumer } ;