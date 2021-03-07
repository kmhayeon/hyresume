import React from 'react';
import styled from 'styled-components';


type ComProps = {
    txt: string;
};



const Container = styled.div`
  background-color: ${(props) => props.theme.color.main};
  color: ${(props) => props.theme.color.sub};
`;

// 컴포넌트 정의
const Component = ({ txt }:ComProps) => {
    return (
        <div>
        <Container>
            <h1>{txt}🎨</h1>
        </Container>
            <h1>{txt}🎨22</h1>
        </div>
    );
};


Component.defaultProps = {
    txt: '테마적용하기입니다'
};

export default Component;