import { json_to_xml } from "../formatters/json_to_xml";
import { xml_to_json } from "../formatters/xml_to_json";

    const jsonReturned = {
        "name": "John",
        "age": "30",
        "cars": {
            "car": [
            {
                "name": "Ford",
                "models": {
                "model": [
                    "Fiesta",
                    "Focus",
                    "Mustang"
                ]
                }
            },
            {
                "name": "BMW",
                "models": {
                "model": [
                    "320",
                    "X3",
                    "X5"
                ]
                }
            },
            {
                "name": "Fiat",
                "models": {
                "model": [
                    "500",
                    "Panda"
                ]
                }
            }
            ]
        }
        };

describe('json_to_xml', () => {
    it('should convert a json object to an xml document', () => {
        const xml = json_to_xml(jsonReturned);

        let expectedXmlOutput = `<?xml version="1.0" encoding="UTF-8"?>`;

        const returnedXml = `
            <name>John</name>
            <age>30</age>
            <cars>
                <car>
                <name>Ford</name>
                <models>
                    <model>Fiesta</model>
                    <model>Focus</model>
                    <model>Mustang</model>
                </models>
                </car>
                <car>
                <name>BMW</name>
                <models>
                    <model>320</model>
                    <model>X3</model>
                    <model>X5</model>
                </models>
                </car>
                <car>
                <name>Fiat</name>
                <models>
                    <model>500</model>
                    <model>Panda</model>
                </models>
                </car>
            </cars>
        `;

        expectedXmlOutput += returnedXml.replace(/\s/g, '');
        expect(xml).toEqual(expectedXmlOutput);

        const json2Input = `<xml>${returnedXml}</xml>`;
        const json2 = xml_to_json(json2Input);
        expect(json2).toEqual(jsonReturned);

        const xml2 = json_to_xml(json2);
        expect(xml2).toEqual(expectedXmlOutput);

    });
});

