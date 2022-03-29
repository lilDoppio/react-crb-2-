import '../src/App.scss'
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
      <div className='current-valute-container'>
        <div className='cbr-link'>
        <a href="https://www.cbr-xml-daily.ru/" target='_blank'>Курсы валют, API</a>
        </div>
        <table className='valute-table'>
          <thead>
            <tr className='valute-table__header'>
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
      </div>
      <ChosenValute 
        chosenValute={chosenValute}
        previousValute={previousValute}
        chooseValute={getChosenValute}
      />
    </div>
  );
}

export default App;
