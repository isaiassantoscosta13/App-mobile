import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import colors from "../styles/colors";

import { Welcome } from "../pages/welcome";
import { Userident } from "../pages/Userident";
import { Confirmation } from "../pages/Confirmation";
import { Login } from "../pages/Login";
import { Cadastro } from "../pages/Cadastro";
import { Menu } from "../pages/Menu";
import {Art} from "../pages/Art";
import { TArt } from "../pages/TArt";
import { Finance } from "../pages/Finance";
import { RefSave } from "../pages/RefSave";
import { AliSave } from "../pages/AliSave";

const stackRoutes = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.blue_light, 
            },
        }}
    >
        <stackRoutes.Screen
            name="Welcome"
            component={Welcome}
        />
        <stackRoutes.Screen
            name="Userident"
            component={Userident}
        />
        <stackRoutes.Screen
            name="Confirmation"
            component={Confirmation}
        />
        <stackRoutes.Screen
            name="Login"
            component={Login}
        />
        <stackRoutes.Screen
            name="Cadastro"
            component={Cadastro}
        />
        <stackRoutes.Screen
            name="Menu"
            component={Menu}
        />
        <stackRoutes.Screen
            name="TArt"
            component={TArt}
        />
        <stackRoutes.Screen
            name="Art"
            component={Art}
        />
        <stackRoutes.Screen
            name="Finance"
            component={Finance}
        />
        <stackRoutes.Screen
            name="RefSave"
            component={RefSave}
        />
        <stackRoutes.Screen
            name="AliSave"
            component={AliSave}
        />

    </stackRoutes.Navigator>
)

export default AppRoutes;