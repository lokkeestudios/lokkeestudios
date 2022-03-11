import { isRadioElement } from './is';
const findSelectedRadio = (node, nodes) => nodes
    .filter(isRadioElement)
    .filter((el) => el.name === node.name)
    .filter((el) => el.checked)[0] || node;
export const correctNode = (node, nodes) => {
    if (isRadioElement(node) && node.name) {
        return findSelectedRadio(node, nodes);
    }
    return node;
};
export const correctNodes = (nodes) => {
    const resultSet = new Set();
    nodes.forEach((node) => resultSet.add(correctNode(node, nodes)));
    return nodes.filter((node) => resultSet.has(node));
};
