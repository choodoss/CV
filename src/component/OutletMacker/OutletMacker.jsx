import { nanoid } from "nanoid";
import { TextItem, TextList, Box, Text } from "./OutletMacker.styled";

export const outletMacker = (text) => {
    const viewportWidth = document.documentElement.clientWidth;

    if (viewportWidth <= 481) {
        return <Text>{text}</Text>;
    }

    const charWidth = 13;
    let maxLength = Math.floor(((viewportWidth - 311) - (viewportWidth * 0.1)) / charWidth) - 6;
    if (viewportWidth <= 999) {
        maxLength = Math.floor((viewportWidth - (viewportWidth * 0.1)) / charWidth);
    }
    const result = [];
    let textLineNumber = 1;
    let currentLine = "* ";
    const words = text.split(" ");
    const wordsLength = words.length;

    words.forEach((word, index) => {

        if (index === 0) {
            result.push(
                <TextItem key={nanoid()}>
                    &nbsp;{textLineNumber}&nbsp;&nbsp;&nbsp;/**
                </TextItem>
            );
            textLineNumber += 1
        }

        if (currentLine.length + word.length <= maxLength) {

            if (word === '\r') {
                let lineText = textLineNumber.toString().length === 1 ? " " + textLineNumber : textLineNumber;

                result.push(
                    <TextItem key={nanoid()}>
                        {lineText}&nbsp;&nbsp;&nbsp;&nbsp;{currentLine.trim()}
                    </TextItem>
                );

                textLineNumber += 1;
                lineText = textLineNumber.toString().length === 1 ? " " + textLineNumber : textLineNumber;

                currentLine = "*";
                result.push(
                    <TextItem key={nanoid()}>
                        {lineText}&nbsp;&nbsp;&nbsp;&nbsp;{currentLine.trim()}
                    </TextItem>
                );
                textLineNumber += 1;
                currentLine = "*";
            }

            currentLine += word + " ";
        } else {
            const lineText = textLineNumber.toString().length === 1 ? " " + textLineNumber : textLineNumber;

            result.push(
                <TextItem key={nanoid()}>
                    {lineText}&nbsp;&nbsp;&nbsp;&nbsp;{currentLine.trim()}
                </TextItem>
            );

            textLineNumber += 1;
            currentLine = "* " + word + " ";
        }

        if (index === wordsLength - 1 && currentLine.trim().length > 0) {
            let lineText = (textLineNumber + 1).toString().length === 1 ? " " + (textLineNumber + 1) : (textLineNumber + 1);

            result.push(
                <TextItem key={nanoid()}>
                    {lineText}&nbsp;&nbsp;&nbsp;&nbsp;{currentLine.trim()}
                </TextItem>
            );

            textLineNumber += 1;
            lineText += 1;
            result.push(
                <TextItem key={nanoid()}>
                    {lineText}&nbsp;&nbsp;&nbsp;&nbsp;*/
                </TextItem>
            );
        }
    });

    return (<Box><TextList>{result}</TextList></Box>)
}