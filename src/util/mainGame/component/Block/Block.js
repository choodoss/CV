import styled from "styled-components";



const Block = ({ style }) => {
    const OneBlock = styled.div`
position: absolute;
top:${style.top};
left:${style.left};
    width: 30px;
    height: 30px;
    background-color: #43D9AD;
    -webkit-box-shadow: inset 0px 0px 0px 5px rgba(48,138,111,1);
-moz-box-shadow: inset 0px 0px 0px 5px rgba(48,138,111,1);
box-shadow: inset 0px 0px 0px 5px rgba(48,138,111,1);
border-radius:4px;
`;
    console.log(style)
    return (
        <>
            <OneBlock>
            </OneBlock>
        </>
    )
}

export default Block;