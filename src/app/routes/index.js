import async from "../custom-components/async";

import {
  BookOpen as BookOpenIcon,
  CheckSquare as CheckSquareIcon,
  Grid as GridIcon,
  Heart as HeartIcon,
  Layout as LayoutIcon,
  List as ListIcon,
  MapPin as MapPinIcon,
  Monitor as MonitorIcon,
  PieChart as PieChartIcon,
  Sliders as SlidersIcon,
  Users as UsersIcon,
  Calendar as CalendarIcon,
  Folder as FolderIcon
} from "react-feather";

// Landing
import Landing from "../pages/landing";



// Dashboards
const Default = async(() => import("../pages/dashboards/available-locations"));
const Social = async(() => import("../pages/dashboards/my-fines"));
const SignIn = async(() => import("../pages/auth/SignIn"));
const SignUp = async(() => import("../pages/auth/SignUp"));
const settingProfile = async(() => import("../pages/pages/profile"));
const settingSettingsProfile = async(()=>import("../pages/pages/settings"))
const helpUser = async(()=>import("../pages/help"));


// Routes
const landingRoutes = {
  path: "/",
  name: "Landing Page",
  component: Landing,
  children: null
};

// Route Settings Profile
const settingProfileRoutes = {
  path: "/settings/my-profile",
  name: "Settings Profile",
  component: settingProfile,
  children:null
 };

 const settingSettingsProfileRoutes = {
  path: "/settings/settings-profile",
  name: "Settings setting Profile",
  component: settingSettingsProfile,
  children:null
 };
 const settingHelpRoutes = {
  path: "/settings/help",
  name: "Settings help",
  component: helpUser,
  children:null
 };



// Route Sign In
const authSingInRoutes = {
  path: "/",
  name: "Sign In",
  component: SignIn,
  children:null
 };

 // Route Sign Up
 const authSingUpRoutes = {
  path: "/auth/sign-up",
  name: "Sign Up",
  component: SignUp,
  children:null
 };


 // Route mis multas
 const dashboardSocialRoutes =     {
  path: "/comparecencia/my-fines",
  name: "Mis Multas",
  component: Social,
  icon: FolderIcon,
}

// Route locaciones disponibles
 const dashboardDefaultRoutes = {
  path: "/comparecencia/available-locations",
  name: "Locaciones Disponibles",
  component: Default,
  icon: MapPinIcon
}




// Dashboard specific routes
export const dashboard = [
  dashboardSocialRoutes,
  dashboardDefaultRoutes,
  settingProfileRoutes,
  authSingUpRoutes,
  settingSettingsProfileRoutes,
  settingHelpRoutes
];

export const settings = [
  settingProfileRoutes,
  settingSettingsProfileRoutes,
  settingHelpRoutes
];

//Auth specific routes
export const page = [
  authSingInRoutes,
  authSingUpRoutes
];
//export const authSingUp = [authSingUpRoutes];

// All routes
export default [
  dashboardSocialRoutes,
  dashboardDefaultRoutes,
  
  ];


  /*const dashboardRoutes = {
  path: "/dashboard",
  name: "Comparecencia Virtual",
  //header: "Main",
  icon: SlidersIcon,
  containsHome: true,
  children: [
    {
      path: "/dashboard/default",
      name: "Mis Multas",
      component: Default,
      icon: FolderIcon
    },
    {
      path: "/dashboard/social",
      name: "Locaciones Disponibles",
      component: Social,
      icon: MapPinIcon,
    },
  ]
};*/
