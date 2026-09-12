import { useState } from 'react';
import { Navigate, Route } from 'react-router-dom';
import VisitDetail from './pages/VisitDetail';

import {
  IonApp,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToast,
  IonToolbar,
  setupIonicReact
} from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';

import {
  calendar,
  people,
  person
} from 'ionicons/icons';

import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {

  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const [sesion, setSesion] = useState(
    localStorage.getItem('ionicSesion') === 'true'
  );

  const [mostrarError, setMostrarError] = useState(false);

  const iniciarSesion = () => {

    if (usuario === 'medico' && password === '1234') {

      localStorage.setItem('ionicSesion', 'true');

      setSesion(true);

    } else {

      setMostrarError(true);

    }
  };

  if (!sesion) {

    return (
      <IonApp>

        <IonPage>

          <IonHeader>
            <IonToolbar color="primary">
              <IonTitle>MediClinic</IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonContent className="ion-padding">

            <h2>Login médico</h2>

            <IonInput
              label="Usuario"
              labelPlacement="stacked"
              placeholder="Ingrese usuario"
              value={usuario}
              onIonInput={(e) =>
                setUsuario(e.detail.value ?? '')
              }
            />

            <IonInput
              label="Contraseña"
              labelPlacement="stacked"
              type="password"
              placeholder="Ingrese contraseña"
              value={password}
              onIonInput={(e) =>
                setPassword(e.detail.value ?? '')
              }
            />

            <IonButton
              expand="block"
              onClick={iniciarSesion}
            >
              Iniciar sesión
            </IonButton>

            <IonToast
              isOpen={mostrarError}
              message="Usuario o contraseña incorrectos"
              duration={2000}
              color="danger"
              onDidDismiss={() => setMostrarError(false)}
            />

          </IonContent>

        </IonPage>

      </IonApp>
    );
  }

  return (

    <IonApp>

      <IonReactRouter>

        <IonTabs>

          <IonRouterOutlet>

            <Route
              path="/visitas"
              element={<Tab1 />}
            />

            <Route
              path="/visitas/:id"
              element={<VisitDetail />}
            />

            

            <Route
              path="/pacientes"
              element={<Tab2 />}
            />

            <Route
              path="/perfil"
              element={<Tab3 />}
            />

            <Route
              path="/"
              element={
                <Navigate
                  to="/visitas"
                  replace
                />
              }
            />

          </IonRouterOutlet>

          <IonTabBar slot="bottom" color="primary">

            <IonTabButton
              tab="visitas"
              href="/visitas"
            >
              <IonIcon icon={calendar} />
              <IonLabel>Visitas</IonLabel>
            </IonTabButton>

            <IonTabButton
              tab="pacientes"
              href="/pacientes"
            >
              <IonIcon icon={people} />
              <IonLabel>Pacientes</IonLabel>
            </IonTabButton>

            <IonTabButton
              tab="perfil"
              href="/perfil"
            >
              <IonIcon icon={person} />
              <IonLabel>Perfil</IonLabel>
            </IonTabButton>

          </IonTabBar>

        </IonTabs>

      </IonReactRouter>

    </IonApp>
  );
};

export default App;