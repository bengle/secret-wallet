Ext.define('myFirslstSencha.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.MessageBox'
        //'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'My Notes'/*,
                    items: {
                        docked:'right',
                        xtype: 'button',
                        title: '',
                        url:''
                    }*/
                },

                html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")
            },
            {
                title: 'Add',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Edit Note'
                    },
                    {
                        docked: 'bottom',
                        xtype: 'button',
                        text: 'click me',
                        listeners: {
                            tap:function(){
                                var store = window.localStorage;
                                var title = document.getElementById('J_ItemName').value,
                                    address = document.getElementById('J_Address').value,
                                    pwd = document.getElementById('J_Password').value;
                                store.setItem(title,"{'address':"+address+",'password':"+pwd+"}");
                                alert('保存完成！');
                                window.location.href = 'http://127.0.0.1/myFirslstSencha/index.html';
                                //console.log(JSON.parse(store.getItem(title)).password);
                            }
                        }
                    }
                    /*,
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }*/
                ],
                html: '<section><ul>'+
                        '<li><label>名称：</label><input id="J_ItemName" style="text" placeholder="保存的项目名称" value="" required/></li>'+
                        '<li><label>地址：</label><input id="J_Address" style="text" placeholder="保存的项目地址" value="" required/></li>'+
                        '<li><label>密码：</label><input id="J_Password" style="text" placeholder="保存的项目密码" value="" required/></li>'+
                      '</ul></section>'
            }
        ]
    }
});
