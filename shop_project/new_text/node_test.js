let data = {
    name: "Jeff",
    height: 170,
    weight: 65,
    age: 26,
    class: "A-",
    interest : ["喝酒","爬山","寫程式"]
};
console.log(data);
console.log(`安安，我是${data["name"]}，今年${data["age"]}歲，`);
data["interest"].push("玩遊戲");
console.log(data);