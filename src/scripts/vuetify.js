import Vuetify, {
  VApp,
  VBtn,
} from 'vuetify/lib';

export default (Vue) => {
  Vue.use(Vuetify, {
    components: {
      VApp,
      VBtn,
    },
    theme: {
      primary: '#444',
      secondary: '#188355',
      accent: '#188355',
      error: '#444',
      success: '#188355',
      warning: '#444',
      info: '#444',
    },
  });
};
