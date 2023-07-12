import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from "styled-components";

const Animation = styled.div`
  opacity: ${({ $visible }) => ($visible === 'true' ? '1' : '0')};
  transition: opacity 250ms ease-in-out;
`;

const AnimatedOutlet = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, 100);
    }, []);

    return (
        <Animation $visible={visible ? 'true' : 'false'}>
            <Outlet />
        </Animation>
    );
};

export default AnimatedOutlet;