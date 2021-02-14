/**
 * Created by Rychou on 2018/4/19.
 */
import React, { Component } from 'react'
import $ from 'jquery'
import url from './audio/love.mp3' // 引入背景音乐文件
// import { Row, Col} from 'antd';

class Main extends Component {
    state = {
        date: {},
    }
    componentDidMount() {
        this.print();
        setInterval(() => {
            this.time(2020, 1, 22) // 你们的纪念日
        }, 1000
        )
        var audio = document.getElementById("audio");
        setTimeout(() => audio.play(), 7500) // 背景音乐在页面加载后，延迟播放的时长，单位：毫秒。
    }
    print = () => {
        $.fn.autotype = function () {
            var _this = $(this);
            var str = _this.html();
            // 正则替换代码行之间添加的多个空格，不去除换行输出会有明显的停顿：实际是在输出多个空格
            str = str.replace(/(\s){2,}/g, "$1");
            var index = 0;
            $(this).html('');
            var timer = function fn() {
                var args = arguments;
                var current = str.slice(index, index + 1);
                // html标签完整输出,如：<p>
                if (current == '<') {
                    index = str.indexOf('>', index) + 1;
                }
                else {
                    index++;
                }
                //位运算符: 根据setInterval运行奇偶次来判断是否加入下划线字符“_”，使输入效果更逼真
                if (index < str.length - 1) { //打印字符倒数第2个字符开始，不加下划线字符，以防止结束符可能会多输出一下划线字符
                    _this.html(str.substring(0, index) + (index & 1 ? '_' : ''));
                } else {
                    _this.html(str.substring(0, index));
                    clearTimeout(timer);
                };
                setTimeout(fn, 200)
            };
            // 延迟1s开始
            setTimeout(timer, 1000);
        };
        $("#autotype").autotype();
    }
    time = (year, month, day) => {
        var dateNow = new Date();
        var dateJNR = new Date(year, month - 1, day);
        // var anniversary = parseInt((dateNow - dateJNR) / (365*24*3600*1000))
        var d = parseInt((dateNow - dateJNR) / (24 * 3600 * 1000));
        var hour = parseInt(((dateNow - dateJNR) / (3600 * 1000)) % 24);
        var minute = parseInt((dateNow - dateJNR) / (1000 * 60) % 60);
        var second = parseInt((dateNow - dateJNR) / 1000 % 60);
        this.setState({ date: { d: d, hour: hour, minute: minute, second: second } });
    };
    render() {
        const date = () => {
            if (this.state.date.d !== undefined) {
                const { d, hour, minute, second } = this.state.date
                return (<p>我们一起走过: <span className="date-text">{d}</span> 天 <span className="date-text">{hour}</span> 小时 <span className="date-text">{minute}</span> 分 <span className="date-text">{second}</span> 秒 </p>
                )
            }
        }
        return (
            // <Row>
            //     {/* <Col span={8}></Col> */}
            // <Col span={12} offset={6}>
            // {/* <div className="App animated bounceInLeft"> */}
            <div className="App animated bounceInLeft">
                <div className="date">{date()}</div><br /><br />
                <div id="autotype">
                    <h2 style={{ fontWeight: 900 }}>我最爱的宝贝老婆！</h2>
                    <p >在煽情开始之前，先放首歌当背景音乐吧！Music!</p>
                    <p>今天是我们在一起的第2个情人节，这个数字现在看起来虽然有些小，但是我相信啊，它会一直长下去，长成一个好大好大的数字。</p>
                    <p>第一个情人节的时候我在如火如荼地赶论文ddl，特别遗憾错过了为我们庆祝的机会，那个时候感觉很对不起宝贝，所以呀，我精心策划了我们的100天纪念日。</p>
                    <p>那天我给你编了公主辫，你穿了好看的裙子，再涂上仙女指甲油，我牵着你的手走在大街上，就感觉拥有了全世界，大家都投来羡慕的目光，像是我把法国公主从油画里偷出来了一样。然后我们在气球、鲜花、红酒、美食还有小水母的陪伴下度过了一个美好的纪念日，真的好希望那天有暂停键。那一次见面，我们一起做了好多好多好多事情，虽然只有短短5天，但就像是过了5个月那么充实，所以此处可能要省去一个长篇小说了...</p>
                    <p>暑假那会，你刚考完试，第二天我就悄悄去看你，没想到还没到机场就被你发现了，本来想是去照顾你度过姨妈期的，结果姨妈就很坏，我在的时候一直都不来，我刚一走就出来欺负你。就这件事情，我单方面宣布：我跟姨妈势不两立！</p>
                    <p>接下来就进入了漫长的异地，这期间我们有欢笑也有争吵，但是我们都走过来了。感恩我们经历的那些事情，让我们看到对方的真心，也愈发厚重了我们之间的感情，最后沉淀下来的便是那简单又复杂的三个字：我爱你~</p>
                    <p>如今再逢情人节，我想说：我的心室是单人间，只住得下你一个人！都说所在隔山海，山海皆可平，我不想平山填海，只想简简单单地和你生活在一起，一日、两人、三餐、四季。</p>
                    <p>最后祝我最最最最最爱的宝贝老婆情人节快乐哦！</p>
                    <div style={{ textAlign: 'right' }}>
                        <p>爱你的猪猪🐷</p>
                        <p>2021年2月14日</p>
                    </div>
                </div>
                <audio id="audio" src={url}></audio>
            </div>
            // </Col>
            // {/* <Col span={8}></Col> */}
            // </Row>
        )
    }
}
export default Main