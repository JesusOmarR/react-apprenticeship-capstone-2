import { ResourceContainer } from './ShowResource.styled'

function ShowResource({ source }) {
  console.log(source)
  return source ? (
    <ResourceContainer>
      {source.includes('youtube') ? (
        <iframe
          className="responsive-source"
          src={source}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      ) : (
        <img className="responsive-source" src={source} />
      )}
    </ResourceContainer>
  ) : (
    <div></div>
  )
}
export default ShowResource
