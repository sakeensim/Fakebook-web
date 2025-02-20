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
    set(state=>({
        posts: [ {...rs.data.result, user, likes :[], comments:[]},...state.posts ]
    }))
  },
  getAllPosts : async(token) => {
    set({loading : true})
    const rs = await axios.get('http://localhost:8899/post',{
      headers : {Authorization : `Bearer ${token}`}
    })
    console.log('rs.data', rs.data)
    set({posts : rs.data.posts, loading: false})
  },

  setCurrentPost : (post) => set({currentPost : post}),
  updatePost : async (postId,token,body ) => {
    const rs = await axios.put(`http://localhost:8899/post/${postId}`,body,{
      headers : {Authorization : `Bearer ${token}`}
    })
  },

  deletePost : async(postId,token) =>{
    const rs = await axios.delete(`http://localhost:8899/post/${postId}`,{
      headers : {Authorization : `Bearer ${token}`}
    })
    set(state=>({
      posts: state.posts.filter(item => item.id !== postId )
  }))
  },
  
  createComment : async (body, token) => {
    const rs = await axios.post('http://localhost:8899/comment' ,body, {
     headers : { Authorization : `Bearer ${token}`} 
    }) 
   },

   createLike : async (token, body) => {
    const rs = await axios.post('http://localhost:8899/like', body, {
     headers : { Authorization : `Bearer ${token}`} 
    })
   },
   unLike : async  (token, id) => {
    const rs = await axios.delete(`http://localhost:8899/like/${id}`, {
     headers : { Authorization : `Bearer ${token}`} 
    })
   },
}))
//react-query

export default usePostStore

//shalow in zustand