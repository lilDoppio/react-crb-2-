import React from 'react'
import { ChosenValuteInfo } from './ChosenValuteInfo'

export const ChosenValute = ({chosenValute, previousValute, chooseValute}) => {
  return (
    <>
        {chosenValute &&
          <div className='previous-valute-container'>
            <div className='valute-label'>
              <span>
                {chosenValute.Name}
              </span>
              <button
                onClick={() => chooseValute('')}
              >
                Закрыть
              </button>
            </div>
            <table className='valute-table'>
                  <thead>
                      <tr className='valute-table__header'>
                          <td>Букв. код</td>
                          <td>Курс</td>
                          <th>Дата</th>
                      </tr>
                  </thead>
                  <ChosenValuteInfo
                    chosenValute={chosenValute}
                    previousValute={previousValute}
                  />
            </table>
          </div>
        }
    </>
  )
}
