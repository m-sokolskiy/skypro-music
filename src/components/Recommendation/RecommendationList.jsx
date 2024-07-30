import { useNavigate } from 'react-router-dom'
import * as S from './style/RecommendationList.S.js'
import { useGetSelectionOnIdQuery } from '../../services/trackAPI.js'

const RecommendationList = ({ item }) => {

    const [setSelection, { data, error, isLoading }] = useGetSelectionOnIdQuery

    const navigation = useNavigate()


    const handleSelection = () => {
        setSelection({ id: data.id, data: data.items});
        navigation(`/category/${item.id}`)
    }

    return (
        <S.SidebarItem >
            <div>{item.id}</div>
        </S.SidebarItem>

    )
}
export default RecommendationList