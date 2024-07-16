import * as S from './style/RecommendationList.S.js'

const RecommendationList = () => {

    return (
        <S.SidebarItem >
            <S.SidebarLink to="/classic_music">
                <S.SidebarImg alt="classic_music" src="../img/classic_music.png"/>
            </S.SidebarLink>
            <S.SidebarLink to="/electro_music">
                <S.SidebarImg alt="classic_music" src="../img/electro_music.png"/>
            </S.SidebarLink>
            <S.SidebarLink to="/rock_music">
                <S.SidebarImg alt="classic_music" src="../img/rock_music.png"/>
            </S.SidebarLink>
        </S.SidebarItem>
    )
}
export default RecommendationList