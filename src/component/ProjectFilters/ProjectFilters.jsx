
import { List, Item, Link, Container, CheckBoxContainer, CheckBoxLabel, CheckBoxInput, CheckBoxCustom } from "./ProjectFilters.styled";
import AsideMainTitle from "../../component/AsideMainTitle/AsideMainTitle";


const ProjectFilters = () => {

    return (
        <Container>
            <AsideMainTitle text={'Projects'} />

            <List>
                <Item><Link> <CheckBoxContainer>
                    <CheckBoxLabel>HTML
                        <CheckBoxInput type="checkbox" name="agreement" />
                        <CheckBoxCustom></CheckBoxCustom>
                    </CheckBoxLabel>
                </CheckBoxContainer> </Link></Item>
            </List>
        </Container>)
};

export default ProjectFilters;