import '../src/App.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { ValuteContent } from './components/ValuteContent'
import ValuteService from './API/ValuteService'
import { ChosenValute } from './components/ChosenValute'

function App() {
  const [currentValute, setCurrentValute] = useState({})
  const [previousValute, setPreviousValute] = useState([])
  const [chosenValute, setChosenValute] = useState('')

  useEffect(async () => {
    const currentValuteInfo = await ValuteService.getCurrent()
    const previousValuteInfo = await ValuteService.getPrevious()
    setCurrentValute(currentValuteInfo)
    setPreviousValute(Object.values(previousValuteInfo))
  }, [])

  const getChosenValute = (valute) => {
    setChosenValute(valute)
  }


  return (
    <div className="App">
        <table className='valute-container'>
          <thead>
            <tr className='valute-container__header'>
              <td>Букв. код</td>
              <td>Курс</td>
              <th>%</th>
            </tr>
          </thead>
          <ValuteContent 
            currentValute={currentValute} 
            chooseValute={getChosenValute}
          />
        </table>
        <ChosenValute 
          chosenValute={chosenValute}
          previousValute={previousValute}
        />
    </div>
  );
}

export default App;
