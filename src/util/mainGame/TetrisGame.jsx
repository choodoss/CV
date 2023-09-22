import { Container, Game } from "./TetrisGame.styles";
import Figure from "./component/Figure/Figure";

const TetrisGame = () => {

    const figure = [
        [1, 1, 0],
        [0, 1, 0],
        [0, 0, 0],
    ];

    return (
        <>
            <Container>
                <Game>
                    <Figure figure={figure} />
                </Game>
            </Container>
        </>
    )
}

export default TetrisGame;

