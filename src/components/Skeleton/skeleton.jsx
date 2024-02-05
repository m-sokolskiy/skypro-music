import ContentLoader from "react-content-loader"

const SkeletonPlaylistRender = () => (
  <ContentLoader
    speed={2}
    width={1107}
    height={51}
    viewBox="0 0 1107 51"
    backgroundColor="#181818"
    foregroundColor="#454545"
  >
    <rect x="0" y="4" rx="0" ry="0" width="51" height="51" />
    <rect x="65" y="20" rx="0" ry="0" width="356" height="19" />
    <rect x="481" y="20" rx="0" ry="0" width="271" height="19" />
    <rect x="802" y="20" rx="0" ry="0" width="305" height="19" />
  </ContentLoader>
)

const SkeletonPlaylist = () => {
  return (
    <>
      <SkeletonPlaylistRender />
      <SkeletonPlaylistRender />
      <SkeletonPlaylistRender />
      <SkeletonPlaylistRender />
      <SkeletonPlaylistRender />
      <SkeletonPlaylistRender />
      <SkeletonPlaylistRender />
      <SkeletonPlaylistRender />
      <SkeletonPlaylistRender />
      <SkeletonPlaylistRender />
      <SkeletonPlaylistRender />
      <SkeletonPlaylistRender />
      <SkeletonPlaylistRender />
    </>
  )

}

export default SkeletonPlaylist

