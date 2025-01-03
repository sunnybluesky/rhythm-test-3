console.log("chartuploader is onload");
loadFlag.chartUploader = true;
const chart = {
  async upload(src, opt = null) {
    if (typeof src != "string") {
      console.error("chart.upload()のsrcの型が文字列型ではありません。");
      return;
    }
    if (opt == null) {
    } else {
    }
    var el = document.createElement("script");
    el.src = src;
    document.head.append(el);
    el.addEventListener("load", () => {
      this.list.src.push(src);

      var audioElement = document.getElementById('player'); 
      audioElement.src = this.list.audioSrc[this.list.src.indexOf(src)]
      
      console.log(this.list.audioSrc[this.list.src.indexOf(src)])
      
      audioElement.addEventListener('canplaythrough', () => {
        setTimeout(() => {
          var index = this.list.name[this.list.src.indexOf(src)];
          var v = this.getData(index);
          loadFlag.compChartUpload = true;
          return v;
        }, 100);
      })
    });
  },
  getData: function (name) {
    var index = this.list.name.indexOf(name);
    if (index == -1) {
      console.error("一致するデータが見つかりませんでした。");
      return null;
    } else {
      return this.list.data[index];
    }
  },
  list: {
    name: [],
    data: [],
    src: [],
    audioSrc:[],
  },
};
