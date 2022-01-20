import React, { useEffect, useState } from 'react'
import { MainPageContainer } from './MainPage.styled'
import useApiCall from '../../Utils/useApiCall'
import ShowResource from '../../Components/ShowResource'

function MainPage() {
  const [date, setDate] = useState('')
  const [data, error, loading] = useApiCall(
    `https://api.nasa.gov/planetary/apod?api_key=kLQnbR8V84gxfrdCRO3hKqcaAWsUdEfcQAtxMPqq&date=${date}`
  )

  const onChangeDate = (event) => {
    console.log(event.target.value)
    setDate(event.target.value)
  }
  return loading ? (
    <>...Loading</>
  ) : (
    <MainPageContainer>
      <input
        value={date}
        onChange={onChangeDate}
        timezone="[[timezone]]"
        type="date"
      />
      <ShowResource source={data?.url} />
    </MainPageContainer>
  )
}

export default MainPage
