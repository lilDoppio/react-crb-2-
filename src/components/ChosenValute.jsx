import React from 'react'
import { ChosenValuteInfo } from './ChosenValuteInfo'

export const ChosenValute = ({chosenValute, previousValute}) => {
  return (
    <div>
        {chosenValute &&
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
        }
    </div>
  )
}
