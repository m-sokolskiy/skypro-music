import { useParams } from "react-router-dom";
import { RecommendationArr } from "../../components/Array";
import * as S from "./style/recommendationPage.S"


export const RecommendationPage = () => {
    // useParams хук позволяет получить параметры из адресной строки объявленые ранее
    const params = useParams()
    // Метод find вернет первый найденный в массиве элемент подходящий под условия
    const item = RecommendationArr.find((item) => item.id === Number(params.id));

    return (
        <S.App >
            <S.AppHeader >
                <S.Igm src={item.img} alt="favorite" />
            </S.AppHeader>
        </S.App>
    );
};