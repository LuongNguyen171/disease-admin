import DasboardPage from "../components/pages/dashboard";
import AdminListPage from "../components/pages/adminList";
import PatientListPage from "../components/pages/patientList";
import StatisticalPage from "../components/pages/statisticalByRegion";
import AdminFormPage from "../components/pages/adminForm";
import LoginPage from "../components/pages/login";

const publicRouters = [
    { path: '/', component: DasboardPage },
    { path: '/admin-list', component: AdminListPage },
    { path: '/patient-list', component: PatientListPage },
    { path: '/statistical', component: StatisticalPage },
    { path: '/admin-form', component: AdminFormPage },
    { path: '/login', component: LoginPage, layout: null },

];

export { publicRouters };
