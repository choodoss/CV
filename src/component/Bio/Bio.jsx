import { TitleAbout } from "./Bio.styled";
import { outletMacker } from "./OutletMacker/OutletMacker";

const Bio = () => {
    const text =
        "I am a Frontend Developer with in-depth knowledge and skills in web application development. I recently successfully completed the GoIT courses. \r I have 16 years of experience in the commercial sector, but I am eager to transition my career to application development, which inspires continuous growth and challenges. I am open to learning and acquiring new knowledge, and I am ready to constantly expand my skills in this field. \r I have significant experience in the commercial sector in various positions, including managerial roles. I have successfully managed teams of over 60 employees, led multiple projects, and organized events with varying attendance ranging from 20 to 30,000 individuals. I have worked both independently and collaboratively, allowing me to enhance my project management skills and achieve set goals. \r My determination, motivation, and desire for continuous self-improvement complement my professional persona. \r I am ready to embrace new challenges and confidently move forward in application development. Please note that the translations provided are approximate and may require further refinement based on the specific context and requirements.";

    const result = outletMacker(text);
    return (
        <>
            <div>
                <TitleAbout>personal-info</TitleAbout>
            </div>
            {result}
        </>
    );
};

export default Bio;