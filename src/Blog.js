import React from 'react';
import styled from 'styled-components';

const Spacer=styled.div`
  padding-left: 2vw;
`

const Google = () => (
  <p>This is Google. It's a search engine started by Sergey Brin and Larry Page.</p>
  <p>PageRank is the search algorithm that started it all. Today's it's a 100 trillion dollar company.</p>
)

//then a bunch of other components like the Google one, just with different text...

function App(){
  return (
    <Spacer>
    <Google/>
    <Amazon/>
    <FaceBook/>
    <Apple/>
    </Spacer>
  );
}

export default Blog;