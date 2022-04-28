const students = [
    {
        Name : 'Nazmul Huda',
        Age : 25,
        Roll : 2,
        Gender: 'Male',
        Fees : 1500,
        Email : 'nazmulhasantamim1@gmail.com',
        Skill : 'MERN',
    },
    {
        Name : 'Asraful',
        Age : 35,
        Roll : 1,
        Gender: 'Male',
        Fees : 1600,
        Email : 'asraful@gmail.com',
        Skill : 'IOS Developer',
    },
    {
        Name : 'Sahab',
        Age : 12,
        Roll : 3,
        Gender: 'Male',
        Fees : 1000,
        Email : 'nazmulhasantamim1@gmail.com',
        ClassName : 'MERN',
    },
    {
        Name : 'Rajjak',
        Age : 18,
        Roll : 4,
        Gender: 'Male',
        Fees : 900,
        Email : 'nazmulhasantamim1@gmail.com',
        ClassName : 'MERN',
    },
    {
        Name : 'Sufiya',
        Age : 19,
        Roll : 5,
        Gender: 'Female',
        Fees : 1900,
        Email : 'nazmulhasantamim1@gmail.com',
        ClassName : 'IOS',
    },
    {
        Name : 'Asha',
        Age : 23,
        Roll : 6,
        Gender: 'Female',
        Fees : 2000,
        Email : 'nazmulhasantamim1@gmail.com',
        ClassName : 'APK',
    },
    {
        Name : 'Sarmin',
        Age : 21,
        Roll : 7,
        Gender: 'Female',
        Fees : 1200,
        Email : 'nazmulhasantamim1@gmail.com',
        ClassName : 'APK',
    },
    {
        Name : 'Rabiul',
        Age : 15,
        Roll : 8,
        Gender: 'Male',
        Fees : 1300,
        Email : 'nazmulhasantamim1@gmail.com',
        ClassName : 'IOS',
    },
    {
        Name : 'Jahid',
        Age : 14,
        Roll : 9,
        Gender: 'Male',
        Fees : 1000,
        Email : 'nazmulhasantamim1@gmail.com',
        ClassName : 'APK',
    },
    {
        Name : 'Nazrul',
        Age : 17,
        Roll : 10,
        Gender: 'Male',
        Fees : 900,
        Email : 'nazmulhasantamim1@gmail.com',
        ClassName : 'PHP',
    },
];



/**
 *Total Addmission Fees
 */


let total = 0
students.map( ( data, index )  =>  {
    console.log( `${index +1} Name : ${data.Name} ----------> Total Fees : ${data.Fees}` );
    total += data.Fees;
});

console.log(`Total Admission Fees = ${total}`);