import styled from 'styled-components'

export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: center;
  width: 100vw;
  margin-bottom: 1rem;
  .title {
    margin: 1rem 0;
    color: white;
  }

  .picture-title {
    margin: 0.5rem;
    font-size: 1.4rem;
    color: white;
  }
`
export const InputDate = styled.input`
  width: 10rem;
  margin: 1rem 0 auto;
  font-weight: 600;
`
export const DataCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  background-color: #9097a5;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 4px 1.5px black;
  .about-title {
    margin: 0;
  }

  .date-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  .alert {
    color: white;
    background-color: red;
    padding: 0.3rem 0.7rem;
    width: 15rem;
  }

  @media only screen and (max-width: 720px) {
    width: 95%;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 68vw;
  margin: 1rem auto;
  border-radius: 5px;
  background-color: black;
  padding: 1rem;
  fontsize: 10vw;
`
