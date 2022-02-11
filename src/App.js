import * as React from "react";
import { Admin, Resource } from 'react-admin';
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from 'react-admin-firebase';
import config from './utils/firebaseConfig';

import { catalogoList, catalogoEdit, catalogoCreate } from './resources/catalogo';
import { categoriasList, categoriasEdit, categoriasCreate } from './resources/categorias';

const options = { logging: true };

const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);
const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider} >  
      <Resource name="catalogo" list={catalogoList} edit={catalogoEdit} create={catalogoCreate}/>
      <Resource name="categorias" list={categoriasList} edit={categoriasEdit} create={categoriasCreate}/>
    </Admin>
  )


export default App;
