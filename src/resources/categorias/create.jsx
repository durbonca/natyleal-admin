import React from 'react';
import { Create, SimpleForm, TextInput, required } from 'react-admin';

const create = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="titulo" validate={required()} />
        </SimpleForm>
    </Create>
);

export default create;