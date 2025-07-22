import styled from '@emotion/styled'

const Btn = styled.button`
width: fit-content;
font-size: 30px;
padding: 10px;
background-color: #ff9baa;
text-align: center;
height: fit-content;
align-self: center;
color: white;`

export function ReloadButton() {  
    const handleReload = () => { window.location.reload(); };  
    return ( <Btn onClick={handleReload}>Play again</Btn> );  
}