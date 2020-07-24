import React from 'react';
import styled from 'styled-components';

const Spacer=styled.div`
  padding-left: 2vw;
`

const Google = () => (
  
//then a bunch of other components like the Google one, just with different text...

function Blog(){
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