import React from 'react'
import { List, Datagrid, TextField, TopToolbar, CreateButton} from 'react-admin';

const ListActions = (props) => {

    return (
    <TopToolbar>
        <CreateButton/>
    </TopToolbar>)
};


const list = (props) => {
    return (
        <List {...props} title="Lista de categorias" actions={<ListActions/>}>
           <Datagrid rowClick="edit">
                <TextField source="titulo" />
           </Datagrid>
        </List>
    )
}


export default list;