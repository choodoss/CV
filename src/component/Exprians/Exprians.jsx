import { TitleAbout } from "../Bio/Bio.styled";
import { Container, Title, Description, DescriptionSpan, DateTime, Position, ExpList, Item, PositionList, ItemPosition } from "./Exprians.styled";
import wrapperExpDescription from "./wrapperExpDescription";
import data from './ExpiriansText.json'
import { nanoid } from "nanoid";

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
                            {/* <Title>{item.title}</Title> */}
                            <Description>{wrapperExpDescription(item.description)}</Description>
                        </ItemPosition>
                    )
                )}
            </PositionList>
        </Item>
    ));

    return (
        <>
            <div>
                <TitleAbout>expirians</TitleAbout>
            </div>
            <Container>
                <ExpList>
                    {result}
                </ExpList>
            </Container >
        </>)
};

export default Expirians;

// const ExperienceItem = ({ item }) => {
//     const { title, position, dateTime, workTime, description } = item;
//     return (
//         <Item key={nanoid()}>
//             <PositionList>
//                 <ItemPosition>
//                     <Title>{title}</Title>
//                     <Position>{position}</Position>
//                     <DateTime>{dateTime}</DateTime>
//                     <DescriptionSpan>{workTime}</DescriptionSpan>
//                 </ItemPosition>
//                 <ItemPosition>
//                     <Title>{title}</Title>
//                     <Description>{wrapperExpDescription(description)}</Description>
//                 </ItemPosition>
//             </PositionList>
//         </Item>
//     );
// };

// const Expirians = () => {
//     const experienceItems = data.items.map((item) => (
//         <ExperienceItem key={item.title} item={item} />
//     ));

//     return (
//         <>
//             <div>
//                 <TitleAbout>expirians</TitleAbout>
//             </div>
//             <Container>
//                 <ExpList>{experienceItems}</ExpList>
//             </Container>
//         </>
//     );
// };