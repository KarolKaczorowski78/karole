import { searchProductInput } from '../universal/selectors';

const updateInputField = (content) => {
    searchProductInput.placeholder = `Find in: ${content}`
}

export default updateInputField;