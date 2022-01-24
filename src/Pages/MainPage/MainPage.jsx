import { useRef, useState, useEffect } from 'react'
import {
  MainPageContainer,
  InputDate,
  DataCard,
  InfoContainer,
} from './MainPage.styled'

import ShowResource from '../../Components/ShowResource'

function MainPage() {
  const [date, setDate] = useState('')
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [mayorError, setMayorEror] = useState(null)

  const inputEl = useRef(null)
  useEffect(() => {
    let controller = new AbortController()
    let signal = controller.signal
    setMayorEror(false)
    setError(false)

    setLoading(true)
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=kLQnbR8V84gxfrdCRO3hKqcaAWsUdEfcQAtxMPqq&date=${date}`,
      { signal }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.code === 400) {
          setError(data.msg)
          setLoading(false)
          return
        }
        if (data.code === 500) {
          setMayorEror(data.msg)
          setLoading(false)
          return
        }

        setData(data)
        setLoading(false)
        console.log(data)
      })
      .catch((err) => {
        setLoading(false)
        setError(err)
        console.log(err)
      })

    return () => {
      controller.abort()
    }
  }, [date])

  const onChangeDate = () => {
    console.log(inputEl.current.value)
    setDate(inputEl.current.value)
  }
  return loading ? (
    <>...Loading</>
  ) : (
    <MainPageContainer>
      {mayorError && <h1>There was an error, please try again</h1>}
      <h1 className="title">Picture of the day: {data.date}</h1>
      <p className="picture-title"> {data.title}</p>

      <DataCard>
        <div className="date-container">
          <div>
            <InputDate ref={inputEl} timezone="[[timezone]]" type="date" />
            <button onClick={onChangeDate}>add</button>
          </div>

          {error && <div className="alert">{error}</div>}
        </div>

        <ShowResource source={data?.url} />
      </DataCard>
      <InfoContainer>
        <h2 className="about-title">About this photo:</h2>
        <p>{data?.explanation}</p>
      </InfoContainer>
    </MainPageContainer>
  )
}

export default MainPage
