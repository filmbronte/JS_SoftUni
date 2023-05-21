function editElement(ref, match, replacement) {
    let text = ref.textContent;
    let result = text.split(match).join(replacement);

    ref.textContent = result;
}