// 폰트 불러오는 파일
//App.js 최상단에서 불러와서 전체 사용가능
import { createGlobalStyle } from 'styled-components';

const Font = createGlobalStyle`
  @font-face {
    font-family: 'EF_jejudoldam';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-EF@1.0/EF_jejudoldam.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'BMJUA';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  
  body {
    font-family: 'BMJUA', sans-serif;
  }
`;

export default Font;