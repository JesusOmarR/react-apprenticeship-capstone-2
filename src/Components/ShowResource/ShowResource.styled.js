import styled from 'styled-components'

export const ResourceContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 98%;

  padding-top: 56.25%;

  .responsive-source {
    transition: all 0.2s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 97%;
    border-radius: 10px;
    margin: auto;
  }
`
