// @ts-nocheck
export function json_to_xml(jsonObj) {
    let xmlString = '';
    
    if (typeof jsonObj === 'string') {
      jsonObj = JSON.parse(jsonObj);
    }

    const format = (obj) => {
      for (const prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          if (Array.isArray(obj[prop])) {
            // Handle arrays by using a pluralized element name
            for (const item of obj[prop]) {
              format({ [prop]: item });
            }
          } else if (typeof obj[prop] === 'object') {
            let formattedProp = prop;
            if (Number(prop) || prop === '0') {
              formattedProp = `${prop}`
            }
            xmlString += `<${formattedProp}>`;
            format(obj[prop]);
            xmlString += `</${formattedProp}>`;
          } else {
            let formattedProp = prop;
            if (Number(prop) || prop === '0') {
              formattedProp = `${prop}`
            }
            xmlString += `<${formattedProp}>${obj[prop]}</${formattedProp}>`;
          }
        }
      }
    };

    xmlString += '<?xml version="1.0" encoding="UTF-8"?>';

    format(jsonObj);

    return xmlString;
  }