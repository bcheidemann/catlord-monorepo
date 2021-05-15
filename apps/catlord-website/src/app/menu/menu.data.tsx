import { DropdownElement } from "@catlord/components";
import { Routes } from "../routes/routes.enum";

export type NavData = {
    route: Routes;
};

export const menuData: Array<DropdownElement<NavData>> = [
    {
        id: 'home',
        text: 'Home',
        data: {
            route: Routes.home
        },
    },
    {
        id: 'mods',
        text: 'Mods',
        elements: [
            {
                id: 'catcrafting',
                text: 'CatCrafting',
                data: {
                    route: Routes.catcrafting,
                },
            },
            {
                id: 'yerawizard',
                text: 'YerAWizard',
                data: {
                    route: Routes.yerawizard,
                },
            },
            {
                id: 'catcrafting',
                text: 'CatCrafting',
                data: {
                    route: Routes.chestframes,
                },
            },
        ],
        data: {
            route: null,
        },
    },
    {
        id: 'map',
        text: 'Map',
        data: {
            route: Routes.map,
        },
    },
    {
        id: 'login',
        text: 'Login',
        data: {
            route: Routes.login,
        },
    },
];
