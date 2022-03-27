import React from 'react'

export const ChosenValuteInfo = ({chosenValute, previousValute}) => {
    const date = new Date()
    
    return (
        <tbody>
            {
                previousValute.map(item => (
                    Object.values(item).map(item => (
                        !item.CharCode
                        ? 
                        date.setDate(date.getDate() - 1)
                        &&
                        <tr key={date}>
                            <td>Данных нет</td>
                            <td></td>
                            <td>{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</td>
                        </tr>
                        :
                        item.CharCode === chosenValute.CharCode 
                        && 
                        date.setDate(date.getDate() - 1)
                        &&
                        <tr key={item.CharCode}>
                            <td>{item.CharCode}</td>
                            <td>{item.Value}</td>
                            <td>{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</td>
                        </tr>
                    ))
                ))
            }
       </tbody>
    )
}
