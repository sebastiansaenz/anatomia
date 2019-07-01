import Vue from 'vue';
import Vuex from 'vuex';
import LessonsService from "@/servicios/LessonsService"

Vue.use(Vuex);

const lessonsService = new LessonsService()

export default new Vuex.Store({
  state: {
    lessons: []
  },
  mutations: {
    LOAD_LESSONS: (state, lessons) => {
      state.lessons = lessons
    }
  },
  actions: {
    loadLessons: context => {
      return new Promise((resolve, reject) => {
        lessonsService.load()
        .then(r => {
          context.commit('LOAD_LESSONS', r)
          resolve(r)
        })
        .catch(e => {
          reject(e)
        })
      })
    }
  }
});
