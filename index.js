function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`

}

const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(wrap = "*") {
    const inner = function(kindWord = "special"){
        return `You are ${wrap}${kindWord}${wrap}!`;
    }
    return inner;
}