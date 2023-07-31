var marriage = function marriageEligibilty(gender,age)
{
    if(gender == "Male")
    {
        if(age >= 21)
        {
            console.log(`He is eligible for marriage`);
        }
        else
        {
            console.log(`He is not eligible for marriage`);
        }
    }
    else if(gender == "Female")
    {
        if(age >= 18)
        {
            console.log(`She is eligible for marriage`);
        }
        else
        {
            console.log(`She is not eligible for marriage`);
        }
    }
    else
    {
            console.log(`You Are not eligible for marriage `);
    }

}

marriage("Male",17);
marriage("Male",25);
marriage("Female",28);
marriage("Female",16);
marriage("Other",35);
marriage("Other",41);