import axios from "axios";

export default class ValuteService {
    static async getCurrent() {
        try {
            const valuteInfo = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
            return valuteInfo.data.Valute
        } catch (e) {
            console.log(e)
        }
    }
    static async getPrevious() {
        const array = []
        const date = new Date()
        for (let i = 1; i <= 10; i++) {
            try {
                date.setDate(date.getDate() - 1) 
                const valuteInfo = await axios.get(`https://www.cbr-xml-daily.ru/archive/2022/03/${date.getDate()}/daily_json.js`)
                array.push(valuteInfo.data.Valute)
            } catch (e) {
                array.push('Произошла ошибка')
            }
        }
        return array
    }
}