'use strict';

// let student = {
//     "name": {
//         "first": "John",
//         "last": "Smith"
//     },
//     "status": "Good",
//     "favoriteColors": [
//         "blue",
//         "green"
//     ],
//     "courses": [
//         {
//             "name": "CS 142",
//             "grade": "A",
//             "instructors": [
//                 {
//                     "name": "Professor Smith",
//                     "department": "Computer Science"
//                 },
//                 {
//                     "name": "Professor Childs",
//                     "department": "Computer Science"
//                 }
//             ]
//         },
//         {
//             "name": "Biology 101",
//             "grade": "B+",
//             "instructors": [
//                 {
//                     "name": "Professor Jones",
//                     "department": "Life Sciences"
//                 }
//             ]
//         }
//     ]
// };

let student = {
    "@context":"https://purl.imsglobal.org/ctx/extended-transcript/v1p0",
    "id":"urn:uuid:DEAA611F-F02B-499A-86A0-F4C91ACB37FB",
    "type":"ExtendedTranscript",
    "createdAt":"2017-09-07T00:00:0000Z",
    "overviewUrl":"http://www.example.Capella.edu/transcriptkey",
    "issuer":{
        "id":"urn:uuid:BB4B9F52-EBAC-4291-8F6B-B057B3C55B91",
        "type":"Issuer",
        "name":"Capella University",
        "url":"http://www.Capella.edu",
        "address":"225 South 6th St, Minneapolis, MN 55402",
        "phone":"555-339-8650",
        "logo":"data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMg\nIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09\nPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3...",
        "issuingPersonFullName":"Gilbert Smith",
        "issuingPersonTitle":"CAO"
    },
    "person":{
        "id":"urn:uuid:AAD82CF7-BF8B-4514-8914-E35D0FAC8B7B",
        "type":"Person",
        "fullName":"Jim James",
        "givenName":"Jim",
        "familyName":"James",
        "email":"jjames@example.org",
        "url":"http://example.org/jjames",
        "studentId":"123456789",
        "sourcedId":"0123456789"
    },
    "records":[
        {
            "id":"urn:uuid:C7D2630D-6928-49B1-A06C-43A4462E2F38",
            "type":"Record",
            "date":"2017-08-08T00:00:0000Z",
            "recordOf":{
                "id":"urn:uuid:9e4bebe3-bd38-4b72-89da-7b07e7ed916d",
                "type":"TranscriptEntityLink",
                "entityType":"Degree",
                "entityId":"urn:uuid:6010E1DF-E925-4710-A17C-4DD9D576FAD8"
            },
            "status":{
                "id":"urn:uuid:CE885C9C-5122-40EB-BB72-51C87859DBB1",
                "type":"RecordStatus",
                "completed":false
            }
        },
        {
            "id":"urn:uuid:7F74C3E7-BF81-4F87-BE1D-689CC0A1BA96",
            "type":"Record",
            "date":"2016-12-01T00:00:0000Z",
            "term":"Fall 2016",
            "points":2,
            "recordOf":{
                "id":"urn:uuid:fc5a8f7e-2dc8-474f-8f25-9685aa3aea4c",
                "type":"TranscriptEntityLink",
                "entityType":"Course",
                "entityId":"urn:uuid:0147F2A5-799A-47E6-832F-B114A7674AA7"
            },
            "status":{
                "id":"urn:uuid:D4ACF5F3-3627-4739-911F-A61D252D1EC0",
                "type":"RecordStatus",
                "completed":true
            }
        },
        {
            "id":"urn:uuid:E00C240F-2749-4B43-B03A-53CA7F7807D5",
            "type":"Record",
            "date":"2017-09-01T00:00:0000Z",
            "result":"Distinguished",
            "recordOf":{
                "id":"urn:uuid:46f6518c-4a61-4493-b45b-b96be5a8294d",
                "type":"TranscriptEntityLink",
                "entityType":"Competency",
                "entityId":"urn:uuid:D2986DEB-AF8D-42B9-9E29-E64784B9E12C"
            },
            "status":{
                "id":"urn:uuid:AC0DAE54-0158-4AAD-8DF0-AA0A2D4BE6F7",
                "type":"RecordStatus",
                "completed":true
            }
        },
        {
            "id":"urn:uuid:91039D21-6FB4-4DE7-9828-656EB24C3545",
            "type":"Record",
            "date":"2017-10-09T00:00:0000Z",
            "term":"Winter 2017",
            "result":"In Progress",
            "recordOf":{
                "id":"urn:uuid:76fe50dd-d9f4-4f39-a1fc-5fba69b552d6",
                "type":"TranscriptEntityLink",
                "entityType":"Course",
                "entityId":"urn:uuid:DF4EFF25-7A2D-45A6-822E-074E4314984A"
            },
            "status":{
                "id":"urn:uuid:6440DE04-A2C4-4472-BFD7-BB86183C9916",
                "type":"RecordStatus",
                "completed":false
            }
        },
        {
            "id":"urn:uuid:7C109AF6-E551-448A-8E16-059B2FDFD505",
            "type":"Record",
            "date":"2017-01-01T00:00:0000Z",
            "recordOf":{
                "id":"urn:uuid:e073a603-6e99-43be-972c-4f1390f83dde",
                "type":"TranscriptEntityLink",
                "entityType":"Competency",
                "entityId":"urn:uuid:CCE7988C-8F99-4432-BFD9-B90A72705CAD"
            },
            "status":{
                "id":"urn:uuid:1D76FEC7-53F4-4D10-BAD7-C315B97D87B6",
                "type":"RecordStatus",
                "completed":false
            }
        },
        {
            "id":"urn:uuid:D673C190-CCAF-4981-89A8-574E08736CBD",
            "type":"Record",
            "date":"2017-01-01T00:00:0000Z",
            "recordOf":{
                "id":"urn:uuid:1db9e14e-7662-49d0-be0f-fcf399aa13ab",
                "type":"TranscriptEntityLink",
                "entityType":"Competency",
                "entityId":"urn:uuid:A5C089B3-4705-4217-BF51-DF175BE822E8"
            },
            "status":{
                "id":"urn:uuid:D689E04D-28FE-439F-B7E3-917700156A5A",
                "type":"RecordStatus",
                "completed":false
            }
        },
        {
            "id":"urn:uuid:1EBDCF8D-72A3-4AC7-BB37-530D9FBA7EAB",
            "type":"Record",
            "date":"2017-01-01T00:00:0000Z",
            "recordOf":{
                "id":"urn:uuid:861439ca-846c-40ad-af52-d9423e4b9d5d",
                "type":"TranscriptEntityLink",
                "entityType":"Certificate",
                "entityId":"urn:uuid:4E711BED-975E-4BCA-A8AE-572E9DE3AD1E"
            },
            "status":{
                "id":"urn:uuid:FDF9463A-C47C-41E7-81C5-D3DCC64F6750",
                "type":"RecordStatus",
                "completed":false
            }
        },
        {
            "id":"urn:uuid:87E81578-4A6D-41B1-AC9A-004E06BE6903",
            "type":"Record",
            "date":"2016-12-01T00:00:0000Z",
            "term":"Fall 2016",
            "credits":0,
            "result":"W",
            "recordOf":{
                "id":"urn:uuid:861439ca-846c-40ad-af52-d9423e4b9d5d",
                "type":"TranscriptEntityLink",
                "entityType":"Course",
                "entityId":"urn:uuid:16A17E3B-831C-4E55-BC73-88BFE6775C16"
            },
            "status":{
                "id":"urn:uuid:B1D4DCF3-BD39-4110-85C9-3AADE55D959E",
                "type":"RecordStatus",
                "completed":true
            }
        },
        {
            "id":"urn:uuid:E0CE9636-F196-446A-BB5D-8B95AD447285",
            "type":"Record",
            "date":"2016-12-01T00:00:0000Z",
            "result":"Distinguished",
            "recordOf":{
                "id":"urn:uuid:BEA4DC0D-CD95-4099-A621-D2651AD530EF",
                "type":"TranscriptEntityLink",
                "entityType":"Assessment",
                "entityId":"urn:uuid:2F9435C6-858C-4ED2-82F8-B303CEDFC1D4"
            },
            "evidence":[
                {
                    "id":"urn:uuid:222F840D-B4F4-4792-84B1-E42CDB035D93",
                    "name":"My Portfolio",
                    "url":"http://example.org/jimjames/portfolio.html"
                }
            ],
            "status":{
                "id":"urn:uuid:6BDE7C87-A5E7-4EE5-A6EE-EEB205C5136F",
                "type":"RecordStatus",
                "completed":true
            }
        }
    ],
    "transcriptEntities":{
        "id":"urn:uuid:92775BB4-F9D1-4D42-A50E-BE965EE99D4B",
        "type":"TranscriptEntitySet",
        "certificates":[
            {
                "id":"urn:uuid:4E711BED-975E-4BCA-A8AE-572E9DE3AD1E",
                "type":"Certificate",
                "name":"Contemporary Theory in Mental Health Services",
                "areaOfStudy":"Counseling",
                "associations":[
                    {
                        "id":"urn:uuid:6CEF8312-4591-45B8-97B5-71528C0B49CD",
                        "type":"Association",
                        "associationType":"isParentOf",
                        "entityType":"Competency",
                        "entityId":"urn:uuid:CCE7988C-8F99-4432-BFD9-B90A72705CAD"
                    },
                    {
                        "id":"urn:uuid:597420C5-60B4-4EB0-84F0-2888161170FC",
                        "type":"Association",
                        "associationType":"isParentOf",
                        "entityType":"Competency",
                        "entityId":"urn:uuid:A5C089B3-4705-4217-BF51-DF175BE822E8"
                    }
                ]
            }
        ],
        "degrees":[
            {
                "id":"urn:uuid:6010E1DF-E925-4710-A17C-4DD9D576FAD8",
                "type":"Degree",
                "name":"Master of Business Admin FP",
                "programName":"General Business Admin FP",
                "areaOfStudy":"Master of Business",
                "level":"Graduate",
                "associations":[
                    {
                        "id":"urn:uuid:65854D76-D9D2-4DB3-94E2-05DB39584329",
                        "type":"Association",
                        "associationType":"isParentOf",
                        "entityType":"Course",
                        "entityId":"urn:uuid:0147F2A5-799A-47E6-832F-B114A7674AA7"
                    },
                    {
                        "id":"urn:uuid:7B3FFB72-9E49-47FD-85DC-7EC6CA4A2222",
                        "type":"Association",
                        "associationType":"isParentOf",
                        "entityType":"Course",
                        "entityId":"urn:uuid:16A17E3B-831C-4E55-BC73-88BFE6775C16"
                    },
                    {
                        "id":"urn:uuid:7B3FFB72-9E49-47FD-85DC-7EC6CA4B2992",
                        "type":"Association",
                        "associationType":"isParentOf",
                        "entityType":"Course",
                        "entityId":"urn:uuid:DF4EFF25-7A2D-45A6-822E-074E4314984A"
                    }
                ]
            }
        ],
        "competencies":[
            {
                "id":"urn:uuid:D2986DEB-AF8D-42B9-9E29-E64784B9E12C",
                "type":"Competency",
                "name":"Examines the use of critical, strategic, and ethical thinking in decision-making."
            },
            {
                "id":"urn:uuid:CCE7988C-8F99-4432-BFD9-B90A72705CAD",
                "type":"Competency",
                "name":"Explore theories and models of individual, cultural, couple, family, and community resilience used by professional counselors."
            },
            {
                "id":"urn:uuid:A5C089B3-4705-4217-BF51-DF175BE822E8",
                "type":"Competency",
                "name":"Describe approaches to facilitate optimal development, resilience, and wellness with diverse populations over the lifespan."
            }
        ],
        "courses":[
            {
                "id":"urn:uuid:0147F2A5-799A-47E6-832F-B114A7674AA7",
                "type":"Course",
                "name":"Foundational Skills for Business Leaders",
                "courseCode":"MBA-FP6008",
                "associations":[
                    {
                        "id":"urn:uuid:77387963-D863-49EB-BD9C-D770182B1EFD",
                        "type":"Association",
                        "associationType":"isParentOf",
                        "entityType":"Competency",
                        "entityId":"urn:uuid:D2986DEB-AF8D-42B9-9E29-E64784B9E12C"
                    }
                ]
            },
            {
                "id":"urn:uuid:DF4EFF25-7A2D-45A6-822E-074E4314984A",
                "type":"Course",
                "name":"Introduction to Accounting",
                "courseCode":"MBA-FP6012",
                "associations":[
                    {
                        "id":"urn:uuid:396425CD-8A06-4187-A893-508D07DE8E01",
                        "type":"Association",
                        "associationType":"isParentOf",
                        "entityType":"Competency",
                        "entityId":"urn:uuid:CCE7988C-8F99-4432-BFD9-B90A72705CAD"
                    },
                    {
                        "id":"urn:uuid:B03FEB66-6FA0-498A-9865-ECFD594779FE",
                        "type":"Association",
                        "associationType":"isParentOf",
                        "entityType":"Competency",
                        "entityId":"urn:uuid:A5C089B3-4705-4217-BF51-DF175BE822E8"
                    }
                ]
            },
            {
                "id":"urn:uuid:16A17E3B-831C-4E55-BC73-88BFE6775C16",
                "type":"Course",
                "name":"Organizational Strategy",
                "courseCode":"MBA-FP6028",
                "associations":[
                    {
                        "id":"urn:uuid:EBB12CA4-C8B1-4564-80AE-1D281ED554E5",
                        "type":"Association",
                        "associationType":"isParentOf",
                        "entityType":"Assessment",
                        "entityId":"urn:uuid:2F9435C6-858C-4ED2-82F8-B303CEDFC1D4"
                    }
                ]
            }
        ],
        "assessments":[
            {
                "id":"urn:uuid:2F9435C6-858C-4ED2-82F8-B303CEDFC1D4",
                "type":"Assessment",
                "name":"THE MICROECONOMICS OF CUSTOMER associations",
                "assessmentMethod":"Artifact",
                "hasGroupParticipation":false,
                "assessmentEvaluation":"Distinguished"
            }
        ]
    }
}

let studentSchema = {
    attrs: createSchema(student)
};
console.log("Schema: ", studentSchema);

let studentCredentialModel = createCredentialModel(student);
console.log("Credential Model: ", studentCredentialModel)

/*
const studentSchemaGoal = {
    attrs: [
        "name.first",
        "name.last",
        "status",
        "favoriteColors[]"
        "courses[].name",
        "courses[].grade",
        "courses[].instructors[].name",
        "courses[].instructors[].department"
    ]
}
*/

function createSchema(schema) {
    const result = [];
    for(let key of Object.keys(schema)) {
        if(typeof schema[key] === 'string' || typeof schema[key] === 'boolean' || typeof schema[key] === 'number') {
            result.push(key);
        } else if(Array.isArray(schema[key])) {
            for(const item of schema[key]) {
                if(typeof item === "string") {
                    result.push(`${key}[]`);
                    break;
                } else if(Array.isArray(item)) {
                    console.log('Not yet implemented');
                    process.exit(1);
                } else if(typeof item === "object") {
                    const subSchema = createSchema(item);
                    for(const subSchemaItem of subSchema) {
                        result.push(`${key}[].${subSchemaItem}`);
                    }
                }
            }
        } else if(typeof schema[key] === "object") {
            const subSchema = createSchema(schema[key]);
            for(const subSchemaItem of subSchema) {
                result.push(`${key}.${subSchemaItem}`);
            }
        } else {
            console.log(`Type ${typeof student[key]} is not supported`);
            process.exit(1);
        }
    }
    return Array.from(new Set(result));
}


/*
let studentCredentialModelGoal = [
    "John",
    "Smith",
    "Good",
    "favoriteColors[]",
    "blue",
    "green",
    "courses[]",
    "CS 142",
    "A",
    "courses[].instructors[]",
    "Professor Smith",
    "Computer Science",
    "courses[].instructors[]",
    "Professor Childs",
    "Computer Science",
    "courses[]",
    "Biology 101",
    "B+",
    "courses[].instructors[]",
    "Professor Jones",
    "Life Sciences"
]
*/

function createCredentialModel(schema) {
    const result = [];
    for(let key of Object.keys(schema)) {
        if(typeof schema[key] === 'string' || typeof schema[key] === 'boolean' || typeof schema[key] === 'number') {
            result.push(schema[key]);
        } else if(typeof schema[key] === "object") {
            if(Array.isArray(schema[key])) {
                result.push(`${key}[]`)
            }
            const subModel = createCredentialModel(schema[key]);
            for(const subModelItem of subModel) {
                if(subModelItem.indexOf && subModelItem.indexOf('[]') !== -1 && isNaN(key)) {
                    result.push(`${key}[].${subModelItem}`);
                } else {
                    result.push(subModelItem);
                }
            }
        } else {
            console.log(`Type ${typeof student[key]} is not supported`);
            process.exit(1);
        }
    }
    return result;
}