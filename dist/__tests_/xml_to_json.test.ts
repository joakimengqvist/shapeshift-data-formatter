import { xml_to_json } from "../formatters/xml_to_json";

describe('xml_to_json', () => {
    it('should convert an xml document to a json object', () => {
        const xml = `
            <xml>
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
            </xml>
        `;
    
        const json = xml_to_json(xml);

        let expected = {
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

        expect(json).toEqual(expected);
    });
});