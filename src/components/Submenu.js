import { useAuth } from '../context/auth'
import styled from 'styled-components';
import Link from 'next/link'

const LinkLateral = styled.a`
    cursor: pointer;
    padding: 8px;
    font-weight: 400;
    display: flex;
    flex-direction: ${({ click }) => (click ? 'row' : 'column')};
    align-items: center;
    font-size: ${({ click }) => (click ? '1rem' : '.8rem')};

    &:nth-child(3){
        border-bottom: ${({ click }) => (click ? '1px solid #D3D3D3' : 'none')};
        padding-bottom: 12px;
        
    }
    &:nth-child(5){
        border-bottom: ${({ click }) => (click ? '1px solid #D3D3D3' : 'none')};
        padding-bottom: 12px;
    }

    &:first-child.active {
        background-color: ${({ click }) => (click ? '#D3D3D3' : '${props => props.theme.colors.background}')} ;
    }

  :hover{
        background-color:${props => props.theme.colors.hover};;
    }
   
`;

const Span = styled.span`
    margin: 0px 15px;
    //margin: ${({ click }) => (click ? '0px 15px' : '5px')};
    font-size: 1.3rem;
`


function SubMenu({ item }) {
    const { click, setClick } = useAuth();

    return (
        <>
            <Link href={item.path}>
                <LinkLateral click={click} className='active' /* onClick={() => setClick(!click)} */>
                    <Span>{item.icon}</Span>
                    <p>{item.title}</p>
                </LinkLateral>
            </Link>

        </>
    );
}

export default SubMenu;