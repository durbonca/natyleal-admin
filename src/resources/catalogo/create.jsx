import React from 'react';
import { Create, SimpleForm, AutocompleteArrayInput, TextInput, NumberInput, FileInput, ImageField, required, ReferenceArrayInput } from 'react-admin';

const create = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput style={{width: '100%'}} source="titulo" validate={required()} />
            <TextInput style={{width: '100%'}} source="descripcion" validate={required()} />
            <FileInput style={{width: '100%'}} source="file" label="Imagenes" accept="image/*" >
                <ImageField source="file.src" title="file.title" />
            </FileInput>
            <NumberInput style={{width: '100%'}} source="precio" />
            <ReferenceArrayInput source="categorias" reference="categorias">
                <AutocompleteArrayInput optionText='titulo' />            
            </ReferenceArrayInput>      
        </SimpleForm>
    </Create>
);

export default create;