import { useRef, useState } from 'react'
import {
  MainPageContainer,
  InputDate,
  DataCard,
  InfoContainer,
} from './MainPage.styled'

import ShowResource from '../../Components/ShowResource'
import spaceError from '../../assets/spaceerror.jpeg'
import useApiCall from '../../Utils/useApiCall'

function MainPage() {
  const inputEl = useRef(null)
  const [date, setDate] = useState('')
  const [showMore, setShowMore] = useState(false)

  const [data, error, mayorError, loading] = useApiCall(
    `https://api.nasa.gov/planetary/apod?api_key=kLQnbR8V84gxfrdCRO3hKqcaAWsUdEfcQAtxMPqq&date=${date}`
  )

  const onChangeDate = () => {
    console.log(inputEl.current.value)
    setDate(inputEl.current.value)
  }
  return (
    <MainPageContainer>
      {mayorError ? (
        <>
          <h1>There was an error, please try again</h1>
          <img src={spaceError} />
        </>
      ) : (
        <>
          <div className="input-container">
            <h3>Select a date</h3>
            <div>
              <InputDate
                rol="input"
                ref={inputEl}
                timezone="[[timezone]]"
                type="date"
                aria-label="Select a date"
              />
              <button onClick={onChangeDate}>Search</button>
            </div>
          </div>
          {loading ? (
            <div className="loader-container">
              <div className="lds-ripple">
                <div></div>
                <div></div>
              </div>
            </div>
          ) : (
            <>
              <DataCard>
                <div className="date-container">
                  {error && <div className="alert">{error}</div>}
                </div>

                <h1 className="title">Picture of the day: {data.date}</h1>
                <p className="picture-title"> {data.title}</p>
                <ShowResource source={data?.url} />
              </DataCard>
              <InfoContainer>
                <h2 className="about-title">About this photo:</h2>
                <p>
                  {showMore
                    ? data?.explanation
                    : `${data?.explanation?.substring(0, 250)}`}{' '}
                  <span onClick={() => setShowMore(!showMore)}>
                    {showMore ? 'Show less' : 'Show more'}
                  </span>
                </p>
              </InfoContainer>
            </>
          )}
        </>
      )}
    </MainPageContainer>
  )
}

export default MainPage
