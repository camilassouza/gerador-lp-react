import P from 'prop-types';
import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks'
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { useState } from 'react';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';


export const Menu = ({ links = [], logoData }) => {
    console.log('links', links)
    const [visible, setVisibles] = useState(false)

    return (
        <>
            <Styled.Button onClick={() => setVisibles(!visible)}>
                {visible ? <CloseIcon /> : <MenuIcon />  }
            </Styled.Button>

            <Styled.Container visible={visible}>
                <SectionContainer>
                    <Styled.MenuContainer>
                        <LogoLink {...logoData} />
                        <NavLinks links={links} />
                    </Styled.MenuContainer>
                </SectionContainer>
            </Styled.Container>
        </>
    );
};

Menu.propTypes = {
    ...NavLinks.propTypes,
    logoData: P.shape(LogoLink.propTypes).isRequired
};