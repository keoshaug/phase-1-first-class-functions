function receivesAFunction (exercise) {
    exercise();
    return "Spy";
};

    exercise();



let returnsANamedFunction = "A Named Function"

function returnsANamedFunction() {
    return function returnsANamedFunction () {
        return 'string'
    }
}

function returnsAnAnonymousFunction(meiji) {
    let statesman;
    if (meiji == 1) {
        statesman = "Ito Hirobumi"
    } else if (meiji == 2) {
        statesman = "Kuroda Kiyotaka"
    } else {
        statesman = "Inoue Kaoru"
    }

    return function () {
        console.log(`Mr. ${stateman} is here!`);
      };
};








