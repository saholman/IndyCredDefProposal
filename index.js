'use strict';

let student = {
    "name": {
        "first": "John",
        "last": "Smith"
    },
    "status": "Good",
    "favoriteColors": [
        "blue",
        "green"
    ],
    "courses": [
        {
            "name": "CS 142",
            "grade": "A",
            "instructors": [
                {
                    "name": "Professor Smith",
                    "department": "Computer Science"
                },
                {
                    "name": "Professor Childs",
                    "department": "Computer Science"
                }
            ]
        },
        {
            "name": "Biology 101",
            "grade": "B+",
            "instructors": [
                {
                    "name": "Professor Jones",
                    "department": "Life Sciences"
                }
            ]
        }
    ]
};
let studentSchema = {
    attrs: createStudentSchema(student)
};
console.log("Schema: ", studentSchema);

let studentCredentialModel = createStudentCredentialModel(student);
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

function createStudentSchema(schema) {
    const result = [];
    for(let key of Object.keys(schema)) {
        if(typeof schema[key] === "string") {
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
                    const subSchema = createStudentSchema(item);
                    for(const subSchemaItem of subSchema) {
                        result.push(`${key}[].${subSchemaItem}`);
                    }
                }
            }
        } else if(typeof schema[key] === "object") {
            const subSchema = createStudentSchema(schema[key]);
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

function createStudentCredentialModel(schema) {
    const result = [];
    for(let key of Object.keys(schema)) {
        if(typeof schema[key] === "string") {
            result.push(schema[key]);
        } else if(typeof schema[key] === "object") {
            if(Array.isArray(schema[key])) {
                result.push(`${key}[]`)
            }
            const subModel = createStudentCredentialModel(schema[key]);
            for(const subModelItem of subModel) {
                if(subModelItem.indexOf('[]') !== -1 && isNaN(key)) {
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