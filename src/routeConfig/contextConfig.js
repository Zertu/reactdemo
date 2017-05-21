import Dateviewer from '../app/Dateviewer/Dateviewer'
import Separatewords from '../app/Separatewords/Separatewords'
import Welcome from './Welcome'

export default[
  {
    path : '/',
    component : Welcome,
    exact:true,
    strict:true
  }, {
    path : '/splitWords',
    component : Separatewords
  }, {
    path : '/viewData',
    component : Dateviewer
  }
]
