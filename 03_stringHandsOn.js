var sentence = "    Hey you are doing good, keep it up    ";

function stringHandsOn() {
    console.log(`=========================Step1 Ques1=========================`);
    console.log(`Given String is :- ${sentence}`);


    console.log(`=========================Step2 Ques2=========================`);
    console.log(`length of String is ${sentence.length}`);


    console.log(`=========================Step3 Ques3=========================`);

    var result = sentence.trimStart();
    var finalTrim = result.trimEnd();
    console.log(`before trim ${sentence} `);
    console.log(`Aftre trim - ${finalTrim}`);


    console.log(`=========================Step4 Ques4=========================`);

    var resultTrimEnd = sentence.trimEnd();
    // console.log(resultTrimEnd);
    var trimEndLength = resultTrimEnd.length;
    var endSpaces = sentence.length - trimEndLength;
    // console.log(endSpaces);

    var resultTrimStart = sentence.trimStart();
    // console.log(resultTrimStart);
    var trimStartLength = resultTrimStart.length;
    // console.log(trimStartLength);
    var startSpace = sentence.length - trimStartLength;
    //console.log(startSpace);
    console.log(`total number of white spaces ${startSpace + endSpaces}`);

    console.log(`=========================Step5 Ques5=========================`);

    var trimeSentence = resultTrimStart.trimEnd();
    console.log(trimeSentence);
    var charAt0 = trimeSentence.charAt(0);
    // console.log(trimeSentence.length);
    var charAtLast = trimeSentence.charAt(33)
    console.log(`char at First is ${charAt0} and Char at last ${charAtLast}`);

    console.log(`=========================Step6 Ques6=========================`);

    var result = finalTrim.split(' ');
    var totalWords = result.length;
    console.log(`Number of words in String ${totalWords}`);

    console.log(`=========================Step7 Ques7=========================`);

    var indexOfGood =finalTrim.indexOf('good');
    console.log(`index of Good is : ${indexOfGood}`);

    console.log(`=========================Step8 Ques8=========================`);

    console.log(finalTrim.substring(22));
    console.log(finalTrim.slice(22));

    console.log(`=========================Step9 Ques9=========================`);

    console.log(finalTrim.includes("up"));

    console.log(`=========================Step10 Ques10=========================`);
    console.log(finalTrim.includes("Hey"));

}

stringHandsOn();

