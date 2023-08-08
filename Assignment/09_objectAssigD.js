let professor = {
    proId: 1001,
    pName: `Piyush`,
    gender: `Male`,
    subject: `Mechanics`,
    city: `Pune`,
    Degrees: {
        engineering : `CSC`,
        PHD: `Adv Computing`,
        Section: `A`,
        },
    certificates :['Hacker Rank Participation','Certification in IFE course','Certificate in Adv Programming'],
    getDegrees:function()
    {
        console.log(`Value in Teacher Degrees :${this.Degrees.engineering}, ${this.Degrees.PHD}, ${this.Degrees.Section}`);
    }

}

professor.getDegrees();
console.log('===================================================================');
professor.totalExperience = "14 Years";
console.log(`total Experience : ${professor.totalExperience}`);
console.log('===================================================================');
console.log(`before modificate sallary is : ${professor.city}`);
professor.city=`Nagpur`;
console.log(`After modificate sallary is : ${professor.city}`);
console.log(professor);
console.log('===================================================================');
professor.certificates.push('Oracle certified');
console.log(`Last element of Array is   : ${professor.certificates[professor.certificates.length-1]}`);