function generate() {
    let inputs = document.getElementsByTagName("input");

    let content = "快过年了，不要再讨论什么{0}了。你带你{1}回到家并不能给你带来任何实质性作用，朋友们兜里掏出一大把钱吃喝玩乐，你默默地{2}。亲戚朋友吃饭问你收获了什么，你说{3}，亲戚们懵逼了，你还在心里默默嘲笑他们，笑他们{4}。你父母的同事都在说自己的子女一年的收获，儿子买了个房，女儿买了个车，姑娘升职加薪了，你的父母默默无言，说我的{5}天天迷着个{6}，房间乱七八糟，{7}也不{8}几下。";
    for (var i=0; i<inputs.length; i++) {
        content = content.replace("{"+ i + "}", inputs[i].value);
    }
    document.querySelector("#content").value = content;
}

document.querySelector("#ok_button").addEventListener("click", generate);
document.querySelector("#content").addEventListener("focus", document.querySelector("#content").select);