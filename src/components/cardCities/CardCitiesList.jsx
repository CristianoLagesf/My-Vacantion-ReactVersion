import { useSelector } from 'react-redux'
import CardCities from './CardCities'
import { selectAllCities } from './CardCitiesSlice'

const CardCitiesList = () => {
    const cities = useSelector(selectAllCities)
    return (
        <div className="grid grid-cols-3 gap-x-5 gap-y-7 mt-[220px] mb-[220px] flex justify-center">
            {cities.map((cities) => {
                return (
                    <div key={cities.id}>
                        <CardCities cities={cities} />
                    </div>
                )
            })}
        </div>
    )
}

export default CardCitiesList