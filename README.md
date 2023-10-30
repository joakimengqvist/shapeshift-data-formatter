### Shapeshift data formatter
A collection of data formatter functions.

#### To run and install this package
`$ npm install shapeshift-data-formatter`
```
import { json_to_xml, xml_to_json } from 'shapeshift-data-formatter'

const xml = json_to_xml(json);
const json = xml_to_json(xml)
```
#### Functions

* **xml_to_json**
	 takes xml as input and returns a json object with corresponding data.

* **json_to_xml**
	 takes json as input and returns a xml with corresponding data.


#### Other information

##### Terms of usage (MIT) - [Lisence](https://github.com/joakimengqvist/shapeshift-data-formatter/blob/master/LICENSE.txt)

Basicly feel free to use, fork etc. But The author takes no responsibility of the code as stated in the license.
