import { searchProductInput } from '../universal/selectors';

const updateInputField = (content) => {
    searchProductInput.value = `Find in: ${content}`
}

export default updateInputField;