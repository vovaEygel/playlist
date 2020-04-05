import Vue from 'vue'
import Vuex from 'vuex'
import { youtubeService } from '../services/youtube.service.js';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currVideo: {
            url: 'https://www.youtube.com/embed/G1B4hAr3Ark',
            name: 'hugo kant'
        },
        videoList: []
    },
    getters: {
        getList(state) {
            return state.videoList;
        },
        getCurrVideo(state) {
            return state.currVideo;
        }
    },
    mutations: {
        setVideoList(state, { videos }) {
            state.videoList = videos;
        },
        getCurrVideo(state, { video }) {
            state.currVideo = videos;
        }
    },
    actions: {
        async getVideos(context, { userSearch }) {
            let videos = await youtubeService.getVideos(userSearch);
            console.log(videos)
            context.commit({ type: 'setVideoList', videos })
        }
    },
    modules: {}
})