export const results = [
    {
        name: "John Smith",
        age: 18,
        gender: 'male'
    },
    {
        name: "Nick Tyson",
        age: 40,
        gender: 'male'
    },
    {
        name: "Morgan Freeman",
        age: 80,
        gender: 'male'
    },
    {
        name: "Alexa Smith",
        age: 35,
        gender: 'female'
    },
    {
        name: "Mavis Brown",
        age: 23,
        gender: 'female'
    },
    {
        name: "Meghan Lee",
        age: 65,
        gender: 'female'
    },
    {
        name: "John Lee",
        age: 33,
        gender: 'male'
    },
    {
        name: "Maura Smith",
        age: 12,
        gender: 'female'
    },
    {
        name: "Mei Brown",
        age: 18,
        gender: 'female'
    },
    {
        name: "John Clark",
        age: 46,
        gender: 'male'
    },
    {
        name: "John Moore",
        age: 20,
        gender: 'male'
    },

];

export const fetch = function () {
    return new Promise((resolve) => resolve({
        status: 200,
        contentType: 'json',
        body: {},
        json: () => {
            return new Promise(resolve => {
                setTimeout(resolve({
                    results: results
                }), 1000)
            })
        }
    }))
};