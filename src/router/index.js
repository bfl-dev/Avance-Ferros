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
        path: 'select-travel/:origin:destination',
        components: {content: SelectTravel},
        props: true
      },
      {
        path: 'select-seats/:travelId',
        components: {content: SelectSeats},
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

const routes =
  [
    homePaths,
    flowPaths
  ]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

export default router
