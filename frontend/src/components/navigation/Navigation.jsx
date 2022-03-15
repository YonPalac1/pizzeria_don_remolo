import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useLocation} from 'react-router-dom'
import './navigation.css'

export const Navigation = () => {

   
  const location = useLocation().pathname // Get route

  const favIcon =  <FontAwesomeIcon className='icon' icon={faChevronRight} />;

  const values = [{
    place: 'Carrito',
    color: location === '/cart' ? 'orange' : 'black'
  },
  { 
    place: 'Detalles',
    color: location === '/details' ? 'orange' : 'black'
  },
  { 
    place: 'Envio',
    color: location === '/payment' ? 'orange' : 'black'
  },
  {
    place: 'Confirmación',
    color: location === '/confirmation' ? 'orange' : 'black'
  }
]

 
    return (
    <div className='navigation-header'>
        {    
        values.map((value,i) => {
          return <span key={i} style={{color: value.color}}>{value.place} {favIcon}</span>
        })
        }
            
    </div>
  )
}
