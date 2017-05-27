import Crawer from '../app/Crawer/Crawer'
import Datavisualization from '../app/Datavisualization/Datavisualization'
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
  },
  {
    path : '/crawer',
    component : Crawer
  },
  {
    path:'/datavisualization',
    component:Datavisualization
  }
]
