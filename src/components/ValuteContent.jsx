import React from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

export const ValuteContent = ({currentValute, chooseValute}) => {
    return (
        <tbody className='valute-container__body'>
            {Object.values(currentValute).map(valute => (
              <Tippy 
                key={valute.CharCode}
                placement='bottom'
                content={valute.Name}
                className='tooltip'
                interactive={true}
              >
                <tr 
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
              </Tippy>
            ))}
        </tbody>
    )
}
