import { Container, Title, Description, DescriptionSpan, DateTime, Position, ExpList, Item, PositionList, ItemPosition } from "./Expirians.styled";
import wrapperExpDescription from "./wrapperExpDescription";
import data from './ExpiriansText.json'
import { nanoid } from "nanoid";
import SubTitle from "../SubTitle/SubTitle";
import Box from "../Box/Box";

const Expirians = () => {

    const result = data.items.map((i) => (
        <Item key={nanoid()}>
            <PositionList>
                {i.map((item, index) =>
                    index === 0 ? (
                        <ItemPosition key={nanoid()}>
                            <Title>{item.title}</Title>
                            <Position>{item.position}</Position>
                            <DateTime>{item.dateTime}</DateTime>
                            <DescriptionSpan>{item.workTime}</DescriptionSpan>
                        </ItemPosition>
                    ) : (
                        <ItemPosition key={nanoid()}>
                            <Description>{wrapperExpDescription(item.description)}</Description>
                        </ItemPosition>
                    )
                )}
            </PositionList>
        </Item>
    ));

    return (
        <Box>
            <SubTitle text={'expirians'} />
            <Container>
                <ExpList>
                    {result}
                </ExpList>
            </Container >
        </Box>)
};

export default Expirians;