checkAge = (age) => {
    return (age > 18) || confirm('Did parents allow you?');
}

function min(a, b) {
    if (a < b) return a;
    else return b;
}

function pow(x, n) {
    let ans = x;
    for (let i = 1; i < n; i++) {
      ans *= x;
    }
    return ans;
}
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}
ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);