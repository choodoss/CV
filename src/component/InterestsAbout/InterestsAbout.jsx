import { TitleAbout } from '../Bio/Bio.styled';
import { outletMacker } from '../Bio/OutletMacker/OutletMacker';

const InterestsAbout = () => {
    const text = "I prefer fantasy literature. The pinnacle of my preferences is Patrick Rothfuss's \"The Name of the Wind\" However, I also enjoy classic works by Alexandre Dumas, especially \"The Countess of Monsoreau.\" Lately, I have been focusing on professional literature, such as Kyle Simpson's \"You Don't Know JS: Up & Going.\" \r Movies are my weakness. Horror films scare me, so I prefer movies from various genres, excluding horror. I particularly love science fiction. \r Whenever possible, I play \"Knack 2\" on PlayStation or other games with my son. I have an interest in chess (not an expert). \r And finally, I hope to resume regular workouts at the gym, although currently, it's just my future plans."
    const result = outletMacker(text);

    return (
        <>
            <div>
                <TitleAbout>interest</TitleAbout>
            </div>
            {result}
        </>
    );
};

export default InterestsAbout;
