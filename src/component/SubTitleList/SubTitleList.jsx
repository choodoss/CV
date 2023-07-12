import { List, InterestsItem, InterestsLink } from "./SubTitleList.styled";
import { nanoid } from 'nanoid'


const SubTitleList = ({ arg }) => {

    return (<>
        <List>
            {arg.map(item => <InterestsItem key={nanoid()}> <InterestsLink to={`${item}`}>{item}</InterestsLink></InterestsItem>)}
        </List>
    </>)
};

export default SubTitleList;