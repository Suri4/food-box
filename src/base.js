import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCtTjTec_o30MtZyMiDM8SL50MQpPQxCZU",
  authDomain: "food-box-a91c5.firebaseapp.com",
  databaseURL: "https://food-box-a91c5.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
