import React from 'react'
import { List, Datagrid, TextField, ImageField, TopToolbar, CreateButton} from 'react-admin';

const ListActions = (props) => {
    return (
    <TopToolbar>
        <CreateButton/>
    </TopToolbar>)
};



const list = (props) => {
    return (
        <List {...props} title="Lista del catalogo" actions={<ListActions/>}>
           <Datagrid rowClick="edit">
                <TextField source="titulo" />
                <TextField source="descripcion" />
                <TextField source="precio" />
                <ImageField source="file.src" title="file.title" />
           </Datagrid>
        </List>
    )
}


export default list;