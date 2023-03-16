import maskForm from './forms/atividade/atividade.html?raw'
import {atividade} from './forms/atividade/atividade'
import './style.scss'


const app = document.querySelector('#app')

if (app) {
  app.innerHTML = maskForm
  atividade()
}
