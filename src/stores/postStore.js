import axios from 'axios'
import {create} from 'zustand'

const usePostStore = create( (set, get)=> ({
  posts : [],
  currentPost : null,
  loadiing : false,
  createPost : async (body, token, user) => {
    const rs = await axios.post('http://localhost:8899/post',body,{
        headers : {Authorization : `Bearer ${token}`}
    })
    // set(state=>({
    //     posts: [ {...rs.data, user, likes :[], comments:[]},...state.posts ]
    // }))
  },
  getAllPosts : async(token) => {
    set({loading : true})
    const rs = await axios.get('http://localhost:8899/post',{
      headers : {Authorization : `Bearer ${token}`}
    })
    console.log('rs.data', rs.data)
    set({posts : rs.data.posts, loading: false})
  }
}))

export default usePostStore

//shalow in zustand