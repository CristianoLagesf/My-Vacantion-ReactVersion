import { selectAllHoteis } from '../cardHoteis/CardHoteisSlice'
import { useSelector } from 'react-redux'
import CardFlightSearch from './CardFlightSearch'

const CardPackSearchList = () => {
    const hoteis = useSelector(selectAllHoteis)
    return (
        <div className="flex flex-col gap-y-5">
            {hoteis.map((hoteis) => {
                return (
                    <div key={hoteis.id}>
                        <CardFlightSearch flights={flights} />
                    </div>
                )
            })}
        </div>
    )
}


export default CardPackSearchList