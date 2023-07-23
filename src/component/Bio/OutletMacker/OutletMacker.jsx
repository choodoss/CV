import { nanoid } from "nanoid";
import { TextItem, TextList, Box } from "./OutletMacker.styled";

export const outletMacker = (text, type) => {
    const viewportWidth = document.documentElement.clientWidth;
    const charWidth = 18;
    const maxLength = Math.floor((viewportWidth / 2.5) / charWidth);
    const result = [];
    let currentLineNumber = 1;
    let currentLine = "* ";
    const words = text.split(" ");
    const wordsLength = words.length;

    words.forEach((word, index) => {
        if (index === 0) {
            result.push(
                <TextItem key={nanoid()}>
                    {" "}{currentLineNumber}&nbsp;&nbsp;&nbsp;/**
                </TextItem>
            );
        }
        if (currentLine.length + word.length <= maxLength) {
            if (word === '\r') {
                const lineNumber = currentLineNumber + 1;
                const lineText = lineNumber.toString().length === 1 ? " " + lineNumber : lineNumber;
                result.push(
                    <TextItem key={nanoid()}>
                        {lineText}&nbsp;&nbsp;&nbsp;&nbsp;{currentLine.trim()}
                    </TextItem>
                );
                currentLineNumber += 1;
                currentLine = "*";
                result.push(
                    <TextItem key={nanoid()}>
                        {lineText}&nbsp;&nbsp;&nbsp;&nbsp;{currentLine.trim()}
                    </TextItem>
                );
                currentLine = "*";
            }
            currentLine += word + " ";
        } else {
            const lineNumber = currentLineNumber + 1;
            const lineText = lineNumber.toString().length === 1 ? " " + lineNumber : lineNumber;
            result.push(
                <TextItem key={nanoid()}>
                    {lineText}&nbsp;&nbsp;&nbsp;&nbsp;{currentLine.trim()}
                </TextItem>
            );
            currentLineNumber += 1;
            currentLine = "* " + word + " ";
        }
        if (index === wordsLength - 1 && currentLine.trim().length > 0) {
            result.push(
                <TextItem key={nanoid()}>
                    {currentLineNumber + 1}&nbsp;&nbsp;&nbsp;&nbsp;{currentLine.trim()}
                </TextItem>
            );
            result.push(
                <TextItem key={nanoid()}>
                    {currentLineNumber + 2}&nbsp;&nbsp;&nbsp;&nbsp;*/
                </TextItem>
            );
        }
    });
    return <Box><TextList>{result}</TextList></Box>
}
