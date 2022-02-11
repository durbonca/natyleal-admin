import React from 'react';
import { Edit, AutocompleteArrayInput, ReferenceArrayInput, SimpleForm, TextInput, FileInput, ImageField, required } from 'react-admin';

const edit = (props) => {
    return (
        <Edit {...props}>
        <SimpleForm>
            <TextInput style={{width: '100%'}} source="titulo" validate={required()} />
            <TextInput style={{width: '100%'}} source="descripcion" validate={required()} />
            <FileInput style={{width: '100%'}} source="file" label="Imagenes" accept="image/*" >
                <ImageField source="src" title="title" />
            </FileInput>
            <TextInput style={{width: '100%'}} source="precio" />
            <ReferenceArrayInput source="categorias" reference="categorias">
                <AutocompleteArrayInput optionText='title' />            
            </ReferenceArrayInput>      
        </SimpleForm>
    </Edit>
    )
}

export default edit
