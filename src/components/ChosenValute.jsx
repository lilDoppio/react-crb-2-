import React from 'react'

export const ChosenValute = ({chosenValute, previousValute}) => {
  return (
    <div>
        {chosenValute &&
          <table>
                <thead>
                    <tr className='valute-container__header'>
                        <td>Букв. код</td>
                        <td>Курс</td>
                        <th>Дата</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        previousValute.map(item => (
                            item === 'Произошла ошибка' 
                            ? console.log('Произошла ошибка')
                            : Object.values(item).map(item => (
                              item.CharCode === chosenValute.CharCode 
                              && 
                              <tr>
                                  <td>{item.CharCode}</td>
                                  <td>{item.Value}</td>
                                  <td></td>
                              </tr>
                            ))
                        ))
                    }
                    
                </tbody>
          </table>
        }
    </div>
  )
}
