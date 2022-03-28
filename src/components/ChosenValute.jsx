import React from 'react'
import { ChosenValuteInfo } from './ChosenValuteInfo'

export const ChosenValute = ({chosenValute, previousValute, chooseValute}) => {
  return (
    <>
        {chosenValute &&
          <div>
            <table className='valute-container chosen'>
                  <thead>
                      <tr className='valute-container__header'>
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
          </div>
        }
    </>
  )
}
