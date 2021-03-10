    var app=new Vue({
			el:"#app",
			data:{
				list:[],
				item:"",
				showAllFile:true,
				showAllPic:false,
				uploadTime:""
			},
			methods:{
				//获取上传的文件并显示到页面中
				getFile:function(event){
					//文件数组的第一个文件就是上传的文件
					let file=event.target.files[0];
					
					//记录文件的上传时间
					var time=new Date();
					var date=time.toLocaleDateString(); //当前日期
					var minute=time.getMinutes(); //当前分钟数
					var hour=time.getHours(); //当前小时数
					let Time=date+"  "+hour+':'+minute; //文件的上传时间
					
					//将文件放入列表中
					let newItem={filename:file.name,uploadTime:Time};
					this.list.push(newItem); //将上传的文件信息放入文件列表中
				},
	
				//显示所有文件部分
				changeToFile:function(){
					this.showAllFile=this.showAllPic=false;
					this.showAllFile=true;
				},
				//显示图片部分
				changeToPic:function(){
					this.showAllFile=this.showAllPic=false;
					this.showAllPic=true;
				},
				//删除文件
				deletefile:function(index){
					this.list.splice(index,1);
					//接口连上之后要发送请求删除数据库中的内容
				},
				//注销账号
				clearAccount:function(){
					var r=confirm("您确定要注销您的账号吗？");
					if (r==true){
						/*	axios({
								method:'get', 
								url:"http://west2.free.idcfengye/logout" //接口地址
							}).then(res=>{ //请求成功
								console.log(res);
							}).catch(function(error){ //请求失败
								console.log(error);
							})*/
						window.alert("您的账号已注销!");
						window.top.location.href='signin.html';
					}
				},
				//退出登录
				exitSign:function(){
					var r=confirm("您确定退出登录吗？");
					if (r==true){
						window.top.location.href='signin.html';
					}
				}
			}
		})
