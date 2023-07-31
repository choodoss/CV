import { nanoid } from "nanoid"

const wrapperExpDescription = (text) => {
    const arr = text.split('.')
    const result = arr.map((item, index, array) => (
        <li key={nanoid()}>{`${item}${index === array.length - 1 ? '' : '.'}`}</li>
    ))
    return <ul>{result}</ul>;
}

export default wrapperExpDescription;