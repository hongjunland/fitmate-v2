import { atom } from "recoil";

const signedInState = atom({
    key: 'signedInState',
    default: false
})

export default signedInState;