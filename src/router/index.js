import Home from '@/pages/HomeView.vue'
import HomeBody from '@/components/HomeBody.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/UserManagement/Login.vue'
import Register from '@/components/UserManagement/Register.vue'
import AccountSettings from '@/components/UserManagement/AccountShowcase.vue'
import AccountEditor from '@/components/UserManagement/AccountEditor.vue'
import Logo from '@/components/icons/Logo.vue'
import TravelTracker from '@/components/TravelInfo/TravelTracker.vue'
import SelectTravel from '@/components/SelectTravel.vue'
import TrainPoints from "@/components/TrainPoints/TrainPoints.vue";
import SelectSeats from '@/components/TravelInfo/SelectSeats.vue'
import Payment from "@/components/Payment/Payment.vue";
import AdminLoginView from "@/pages/AdminLoginView.vue";
import AdminVIew from "@/pages/AdminView.vue";
import AdminHomeBody from "@/components/Admin/AdminHomeBody.vue";
import AdminUsersBody from "@/components/Admin/AdminUsersBody.vue";
import AdminTrainsBody from "@/components/Admin/AdminTrainsBody.vue";
import addTrainPopup from "@/components/Admin/Popups/AddTrainPopup.vue";
import addUserPopup from "@/components/Admin/Popups/AddUserPopup.vue";
import editUserPopup from "@/components/Admin/Popups/EditUserPopup.vue";
import editTrainPopup from "@/components/Admin/Popups/EditTrainPopup.vue";
import Confirmation from "@/components/Confirmation/Confirmation.vue";

const homePaths = {
  path: '/',
  component: Home,
  children:
    [
      {
        path: '',
        name: 'home',
        components: {content: HomeBody}
      },
      {
        path: 'account-showcase',
        name: 'account-showcase',
        components: {content: AccountSettings},
      },
      {
        path: 'account-editor',
        name: 'account-editor',
        components: {content: AccountEditor},
      },
      {
        path: 'kkk',
        components: {content: Logo}
      },
      {
        path: 'redeem-points',
        components: {content: TrainPoints}
      },
      {
        path: 'tracker',
        components: {content: TravelTracker}
      },
      {
        path: 'select-travel/:origin:destination:date',
        components: {content: SelectTravel},
        props: true
      },
      {
        path: 'select-seats/:travelId',
        components: {content: SelectSeats},
        props: true
      },
      {
        path: 'payment/:travelID',
        components: {content: Payment},
        props: true
      },
      {
        path: 'confirmation/:userTrip',
        components: {content: Confirmation},
        props: true
      }
    ]
};

const flowPaths = {
  path: '/flow',
  component: Home,
  children: [
    {
      path: 'register',
      components: { overlay: Register, content: HomeBody },
    },
    {
      path: 'login',
      components: {overlay: Login, content: HomeBody }
    }
  ]
}; //todo: ver como hace q aparezca el overlay y no interfiera con el contenido

const adminLogin = {
  path: '/admin/login',
  component: AdminLoginView
}

const adminBook = {
  path: 'baq',
  children: [
    {
      path: 'users/add',
      components: {content: AdminUsersBody, overlay: addUserPopup}
    },
    {
      path: 'users/edit/:id',
      components: {content: AdminUsersBody, overlay: editUserPopup},
      props: true
    },
    {
      path: 'trains/add',
      components: {content: AdminTrainsBody, overlay: addTrainPopup}
    },
    {
      path: 'trains/edit/:id',
      components: {content: AdminTrainsBody, overlay: editTrainPopup},
      props: true
    }
  ]
}

const adminPaths = {
  path: '/admin',
  component: AdminVIew,
  children: [
    {
      path: '',
      components: {content: AdminHomeBody}
    },
    {
      path: 'users',
      components: {content: AdminUsersBody}
    },
    {
      path: 'trains',
      components: {content: AdminTrainsBody}
    },
    adminBook
  ]
}

const routes =
  [
    homePaths,
    flowPaths,
    adminLogin,
    adminPaths
  ]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router
