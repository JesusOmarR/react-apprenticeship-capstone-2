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
          <div>
            <h3>Select a date</h3>
            <InputDate
              rol="input"
              ref={inputEl}
              timezone="[[timezone]]"
              type="date"
              aria-label="Select a date"
            />
            <button onClick={onChangeDate}>add</button>
          </div>
          {loading ? (
            <>...Loading</>
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
                <p>{data?.explanation}</p>
              </InfoContainer>
            </>
          )}
        </>
      )}
    </MainPageContainer>
  )
}

export default MainPage
