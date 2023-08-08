import { nanoid } from "nanoid";
import { TextItem, TextList, Box } from "./OutletMacker.styled";

export const outletMacker = (text) => {
    // Получаем ширину видимой части страницы
    const viewportWidth = document.documentElement.clientWidth;
    // Предполагаемая ширина символа (может потребоваться настройка)
    const charWidth = 13;
    // Максимальная длина строки с учетом отступов и ширины окна
    const maxLength = Math.floor(((viewportWidth - 311) - (viewportWidth * 0.1)) / charWidth) - 6;

    // Массив для хранения JSX-элементов
    const result = [];
    // Общий счетчик строк
    let totalLineNumber = 1;
    // Счетчик строк с текстом
    let textLineNumber = 1;
    // Текущая строка (начальное значение)
    let currentLine = "* ";

    // Разбиваем текст на слова
    const words = text.split(" ");
    // Общее количество слов
    const wordsLength = words.length;

    // Проходимся по каждому слову в тексте
    words.forEach((word, index) => {
        // Если это первое слово, добавляем начальный комментарий
        if (index === 0) {
            result.push(
                <TextItem key={nanoid()}>
                    {" "}{textLineNumber}&nbsp;&nbsp;&nbsp;/**
                </TextItem>
            );
        }

        // Если длина текущей строки с учетом нового слова не превышает максимальную длину
        if (currentLine.length + word.length <= maxLength) {
            // Если встретился символ '\r', то это разделитель строк
            if (word === '\r') {
                // Получаем номер следующей строки с текстом
                const lineText = textLineNumber.toString().length === 1 ? " " + textLineNumber : textLineNumber;
                // Добавляем текущую строку с номером в результат
                result.push(
                    <TextItem key={nanoid()}>
                        {lineText}&nbsp;&nbsp;&nbsp;&nbsp;{currentLine.trim()}
                    </TextItem>
                );
                // Увеличиваем номер строки с текстом и общий счетчик строк
                textLineNumber += 1;
                totalLineNumber += 1;
                // Сбрасываем текущую строку и добавляем пустую строку в результат
                currentLine = "*";
                result.push(
                    <TextItem key={nanoid()}>
                        {lineText}&nbsp;&nbsp;&nbsp;&nbsp;{currentLine.trim()}
                    </TextItem>
                );
                // Сбрасываем текущую строку для следующей итерации
                currentLine = "*";
            }
            // Добавляем текущее слово к текущей строке
            currentLine += word + " ";
        } else {
            // Если длина текущей строки с новым словом превышает максимальную длину
            // Получаем номер следующей строки с текстом
            const lineText = textLineNumber.toString().length === 1 ? " " + textLineNumber : textLineNumber;
            // Добавляем текущую строку с номером в результат
            result.push(
                <TextItem key={nanoid()}>
                    {lineText}&nbsp;&nbsp;&nbsp;&nbsp;{currentLine.trim()}
                </TextItem>
            );
            // Увеличиваем номер строки с текстом и общий счетчик строк
            textLineNumber += 1;
            totalLineNumber += 1;
            // Обновляем текущую строку с новым словом
            currentLine = "* " + word + " ";
        }

        // Если дошли до последнего слова и текущая строка с текстом не пустая
        if (index === wordsLength - 1 && currentLine.trim().length > 0) {
            // Получаем номер следующей строки с текстом
            const lineText = (textLineNumber + 1).toString().length === 1 ? " " + (textLineNumber + 1) : (textLineNumber + 1);
            // Добавляем текущую строку с номером в результат
            result.push(
                <TextItem key={nanoid()}>
                    {lineText}&nbsp;&nbsp;&nbsp;&nbsp;{currentLine.trim()}
                </TextItem>
            );
            // Увеличиваем номер строки с текстом и общий счетчик строк
            textLineNumber += 1;
            totalLineNumber += 1;
            // Добавляем комментарий завершения
            result.push(
                <TextItem key={nanoid()}>
                    {lineText}&nbsp;&nbsp;&nbsp;&nbsp;*/
                </TextItem>
            );
        }
    });

    // Возвращаем результат с использованием соответствующих компонентов
    return (<Box><TextList>{result}</TextList></Box>)
}