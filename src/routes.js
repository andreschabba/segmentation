import Home from './components/Home.vue';
import Instructions from './components/Instructions.vue';
import TryOut from './components/TryOut.vue';

export const routes = [{
        path: '',
        component: Home
    },
    {
        path: '/instructions',
        component: Instructions
    },
    {
        path: '/tryOut',
        component: TryOut
    }
]