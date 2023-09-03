import {useState} from 'react'
import axios from 'axios'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

export const useResource = (event) => {

}