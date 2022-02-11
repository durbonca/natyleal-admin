import * as React from "react";
import { Admin, Resource } from 'react-admin';
import {
  FirebaseAuthProvider,
  FirebaseDataProvider,
} from 'react-admin-firebase';
import config from './utils/firebaseConfig';

import { catalogoList, catalogoEdit, catalogoCreate } from './resources/catalogo';

const options = { logging: true };

const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);
const App = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider} >  
      <Resource name="catalogo" list={catalogoList} edit={catalogoEdit} create={catalogoCreate}/>
    </Admin>
  )


export default App;
