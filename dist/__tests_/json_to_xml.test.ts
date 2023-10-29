import { json_to_xml } from "../formatters/json_to_xml";

describe('json_to_xml', () => {
    it('should convert a json object to an xml document', () => {
        const json = {
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
    
        const xml = json_to_xml(json);

        let expected = `<?xml version="1.0" encoding="UTF-8"?>`;

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

        expected += returnedXml.replace(/\s/g, '');

        expect(xml).toEqual(expected);
    });
});

