// @ts-nocheck
export function xml_to_json(xml) {
  if (typeof xml === 'string') {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, 'text/xml');
    return format(xmlDoc.documentElement);
  } else {
    return format(xml.documentElement);
  }
}

function format(node) {
  if (node.nodeType === 1) {
    const obj = {};

    if (node.hasChildNodes()) {
      for (const childNode of node.childNodes) {
        if (childNode.nodeType === 1) {
          const childName = childNode.nodeName;
          const childValue = format(childNode);

          if (Array.isArray(obj[childName])) {
            obj[childName].push(childValue);
          } else if (obj[childName]) {
            obj[childName] = [obj[childName], childValue];
          } else {
            obj[childName] = childValue;
          }
        }
      }
    }

    return Object.keys(obj).length === 0 ? node.textContent : obj;
  }

  return node.textContent;
}