function printCertificate(grade, names){
    let [firstName , lastName] = names;
    if (grade >= 3) {
        printCertificateBody();
        printNames();
        printGrade();
    }
    else {
        console.log(`${firstName} ${lastName} does not qualify.`);
    }
    function printCertificateBody(){
        console.log('~~~- {@} -~~~');
        console.log('~- Certificate -~');
        console.log('~~~- ~---~ -~~~');
    }
    function printNames() {
        console.log(`${firstName} ${lastName}`);
    }
    function printGrade() {
        if (grade >= 3.00 && grade < 3.50) {
            console.log(`Poor (${grade.toFixed(2)})`);
        }
        else if (grade >= 3.50 && grade < 4.50) {
            console.log(`Good (${grade.toFixed(2)})`);
        }
        else if (grade >= 4.50 && grade < 5.50) {
            console.log(`Very good (${grade.toFixed(2)})`);
        }
        else {
            console.log(`Excellent (${grade.toFixed(2)})`);
        }

    }
}

printCertificate(4.99, ['victoria', 'germanova'])