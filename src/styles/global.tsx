import styled, {createGlobalStyle} from "styled-components"
import Barlow from '/fonts/Barlow-Regular.woff2'
import Barlow2 from '/fonts/Barlow-Regular.woff'
import Barlow3 from '/fonts/Barlow-Regular.ttf'
import BarlowCondensed from '/fonts/BarlowCondensed-Regular.woff2'
import BarlowCondensed2 from '/fonts/BarlowCondensed-Regular.woff'
import BarlowCondensed3 from '/fonts/BarlowCondensed-Regular.ttf'
import BarlowCondensed4 from '/fonts/BarlowCondensed-Bold.woff2'
import BarlowCondensed5 from '/fonts/BarlowCondensed-Bold.woff'
import BarlowCondensed6 from '/fonts/BarlowCondensed-Bold.ttf'
import Bellefair from '/fonts/Bellefair-Regular.woff2'
import Bellefair2 from '/fonts/Bellefair-Regular.woff'
import Bellefair3 from '/fonts/Bellefair-Regular.ttf'


const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "Barlow";
    src: url(${Barlow}) format('woff2');
  url(${Barlow2}) format('woff'),
  url(${Barlow3}) format('truetype');
    font-weight: 400
  }

  @font-face {
    font-family: "BarlowCondensed";
    src: url(${BarlowCondensed}) format('woff2');
  url(${BarlowCondensed2}) format('woff'),
  url(${BarlowCondensed3}) format('truetype');
    font-weight: 400
  }

  @font-face {
    font-family: "Bellefair";
    src: url(${Bellefair}) format('woff2');
  url(${Bellefair2}) format('woff'),
  url(${Bellefair3}) format('truetype');
    font-weight: 400
  }

  @font-face {
    font-family: "BarlowCondensed";
    src: url(${BarlowCondensed4}) format('woff2');
  url(${BarlowCondensed5}) format('woff'),
  url(${BarlowCondensed6}) format('truetype');
    font-weight: 700
  }

  * {
    --fz: 16px;

    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    //colors
    --black: #0B0D17;
    --light-blue: #D0D6F9;
    --white: #FFFFFF;

    //typo
    font-family: 'Barlow', sans-serif;
    color: var(--white);
    font-size: 18px;
    line-height: 32px;
    font-weight: 400;

  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
  }

  h1 {
    font-family: 'Bellefair', sans-serif;
    font-size: 150px;
    line-height: 172px;
  }

  h2 {
    font-family: 'Bellefair', sans-serif;
    font-size: 100px;
    line-height: 115px;
  }

  h3 {
    font-family: 'Bellefair', sans-serif;
    font-size: 56px;
    line-height: 64px;
  }

  h4 {
    font-family: 'Bellefair', sans-serif;
    font-size: 32px;
    line-height: 37px;
  }

  h5 {
    font-family: 'BarlowCondensed', sans-serif;
    font-size: 28px;
    letter-spacing: 4.72px;
    line-height: 34px;
    text-transform: uppercase;
  }

  h6 {
    font-family: 'Bellefair', sans-serif;
    font-size: 28px;
    line-height: 32px;
  }
`

export const H7 = styled.div`
  font-family: 'BarlowCondensed', sans-serif;
  font-size: 14px;
  letter-spacing: 2.35px;
  line-height: 17px;
`

export const Container = styled.div`
  max-width: 1100px;
  padding: 210px 10px 100px;
  margin: 0 auto;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Num = styled.span`
  margin-right: 28px;
  font-weight: 700;
  opacity: 25%
`

export const Info = styled.div`
 
`

export const Description = styled.div`
  color: var(--light-blue);
  max-width: 444px;
`

export default GlobalStyle