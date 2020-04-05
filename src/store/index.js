import Vue from 'vue'
import Vuex from 'vuex'
import { youtubeService } from '../services/youtube.service.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videoList: []
  },
  getters: {
    getList(state) {
      return state.videoList;
    }
  },
  mutations: {
    setVideoList(state, { videos }) {
      state.videoList = videos;
    }
  },
  actions: {
    async getVideos(context, { userSearch }) {
      let videos = await youtubeService.getVideos(userSearch);
      console.log(videos)
      context.commit({ type: 'setVideoList', videos })
    }
  },
  modules: {
  }
})
