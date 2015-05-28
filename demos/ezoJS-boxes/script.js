//data
var box = 0;

//stylesheets
var styles = {
    box : {
        background_color: eColor.clouds,
        border_radius: px(10),
        margin: eCon.auto,
        margin_bottom: px(10)
    },
    title: {
        text_align: eCon.center,
        color: eColor.flamingo

    },
    button: {
        background_color: eColor.belizeHole,
        width: px(100),
        height: px(40),
        margin: px(10),
        display: eCon.inline_block,
        color: eColor.clouds,
        text_align: eCon.center,
        font_size: px(26),
        cursor: "pointer"
    },
    text : {
        margin_left: "15%",
        margin_right: "15%"
    },
    boxt : {
        text_align: eCon.center
    },
    butt: {
        display: eCon.inline_block
    }


}


//pages
var mainPage = function () {
    window.setInterval(function () { //runs every tick
        e$("doc").setCSS(styles.box,"box");
        e$("doc").setCSS(styles.boxt,"data");
    },1);

    e$("doc").setTitle("ezoJS Boxes");
    // title heading
    e$("doc").addHeading(1,"title");
    e$("title").setCSS(styles.title);
    e$("title").setText("ezoJS Box Blog Maker");
    //text area
    e$("doc").addTextArea("text",10,90);
    e$("text").setCSS(styles.text);
    //button div
    e$("doc").addDiv("buttons");
    e$("buttons").setCSS(styles.butt);
    // add button
    e$("buttons").insert(eDom.div("add"));
    e$("add").setCSS(styles.button);
    e$("add").setText("Add");
    e$("add").setAction(function () {
        box = box + 1;
       e$("container").insert(eDom.div("b"+box));
        var node = e$("b"+box);
        node.addClass("box");
        node.insert(eDom.heading(1,"h"+box));
        var title = e$("text").value.split("\n");
        title = title[0];
        e$("h"+box).setText(title);
        e$("h"+box).addClass("data");
        node.insert(eDom.par("p"+box));
        var par = e$("text").value.split("\n");
        var data = "";
        par[0] = "";
        for (var i = 1; i < par.length;i++) {
            par[i] = par[i]+"\n";
        }
        for (var i = 1; i < par.length;i++) {
            data = data + par[i];
        }
        node.height = px(100+(15*par.length));
        node.setSize("50%",node.height);
        e$("p"+box).setText(data);
        e$("p"+box).addClass("data");
        e$("text").setValue("");

    });
    // clear button
    e$("buttons").insert(eDom.div("clear"));
    e$("clear").setCSS(styles.button);
    e$("clear").setText("Clear");
    e$("clear").setAction(function () {
        var e = e$("container").children.length;
        for (var i = e-1; i >= 0;i--)
        {
            e$("container").selectChild(i).destroy();
        }
        box = 0;
        e$("text").setValue("");
    });

    // remove button
    e$("buttons").insert(eDom.div("remove"));
    e$("remove").setCSS(styles.button);
    e$("remove").setText("Remove");
    e$("remove").setAction(function () {
        var index = prompt("Remove which box?",1);
        var i = parseInt(index);
        i = i - 1;
        e$("container").selectChild(i).destroy();
    });

    //save button
    e$("buttons").insert(eDom.div("save"));
    e$("save").setCSS(styles.button);
    e$("save").setText("Save");
    e$("save").setAction(function () {
       var e = e$("container").children.length;
       var con = e$("container");
       var data = new Object();
        for (var i = 0; i < e;i++) {
            data[con.selectChild(i).getAttr("id")] = {
                num : i,
                id : con.selectChild(i).getAttr("id"),
                title: con.selectChild(i).selectChild(0).innerText,
                par: con.selectChild(i).selectChild(1).innerText,
                height:  con.selectChild(i).height

            }
        }
        console.log(data);
        localStorage.setItem("data",JSON.stringify(data));
        localStorage.setItem("box",box);
    });

    //load button
    e$("buttons").insert(eDom.div("load"));
    e$("load").setCSS(styles.button);
    e$("load").setText("Load");
    e$("load").setAction(function () {
        box = parseInt(localStorage.getItem("box"));
        var data = JSON.parse(localStorage.getItem("data"));

        for (keys in data) {
            e$("container").insert(eDom.div(data[keys].id));
            var node = e$(data[keys].id);
            node.addClass("box");
            node.insert(eDom.heading(1, "h" + data[keys].num));
            e$("h" + data[keys].num).setText(data[keys].title);
            e$("h" + data[keys].num).addClass("data");
            node.setSize("50%", ( data[keys].height));
            node.insert(eDom.par("p" + data[keys].num));
            e$("p" + data[keys].num).setText(data[keys].par);
            e$("p" + data[keys].num).addClass("data");
        }
    });
    // horizontal rule
    e$("doc").horRule();
    //container for boxes
    e$("doc").addDiv("container");




};
//run
$(document).ready(function ( ) {
    eManager.add(mainPage,"index");
    eManager.append("index");
});
