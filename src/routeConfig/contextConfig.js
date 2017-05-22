import Dateviewer from '../app/Dateviewer/Dateviewer'
import Separatewords from '../app/Separatewords/Separatewords'
import Welcome from './Welcome'

export default[
  {
    path : '/',
    component : Welcome,
  }, {
    path : '/splitWords',
    component : Separatewords
  }, {
    path : '/viewData',
    component : Dateviewer
  }
]
