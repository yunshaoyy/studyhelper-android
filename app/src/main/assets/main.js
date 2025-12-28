function fxianzai() {
    let xianzai = new Date();
    document.getElementById("xianzai1").innerHTML = xianzai.getFullYear() + "年" + (xianzai.getMonth() + 1) + "月" + xianzai.getDate() + "日";
    document.getElementById("xianzai2").innerHTML = xianzai.getHours() + "时" + xianzai.getMinutes() + "分" + xianzai.getSeconds() + "秒";
}

let kaoyan = new Date(2028, 12 - 1, 21, 8, 30);
function fkaoyan() {
    let now = new Date();
    let lkaoyan = kaoyan - now;
    let gdays = Math.floor(lkaoyan / (1000 * 60 * 60 * 24));
    let ghours = Math.floor((lkaoyan % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let gminutes = Math.floor((lkaoyan % (1000 * 60 * 60)) / (1000 * 60));
    let gseconds = Math.floor((lkaoyan % (1000 * 60)) / 1000);
    document.getElementById("kaoyan").innerHTML = `还有${gdays}天${ghours}时${gminutes}分${gseconds}秒考研`;
}
setInterval(fxianzai, 1000);
setInterval(fkaoyan, 1000);