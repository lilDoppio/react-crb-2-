import React from 'react'

export const ValuteContent = ({currentValute, chooseValute}) => {


    return (
        <tbody className='valute-container__body'>
            {Object.values(currentValute).map(valute => (
              <tr 
                key={valute.CharCode}
                onClick={() => chooseValute(valute)}
              >
                <td>
                  {valute.CharCode}
                </td>
                <td>
                  {valute.Value}
                </td>
                <td>
                  {(((valute.Value - valute.Previous) / valute.Previous) * 100).toFixed(2)}
                </td>
              </tr>
            ))}
        </tbody>
    )
}
