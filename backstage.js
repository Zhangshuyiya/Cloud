			var app=new Vue({
				el:"#app",
				data:{		
					lists:[],//列表数据
					totalPage:1, //总页数
					totalRow:1,//总条数
					showAllpic:true,
					showUnchecked:false
				},
				methods:{
					/*  获取文件列表
						getLists:function(){
						axios({
							method:'get', 
							url:"http://west2.free.idcfengye/findUnApproveImgByPage" //接口地址
						}).then(res=>{ //请求成功
							console.log(res);
						}).catch(function(error){ //请求失败
							console.log(error);
						})
					},*/
					//显示所有图片
					changeToAllPic:function(){
						this.showAllpic=this.showUnchecked=false;
						this.showAllpic=true;
					},
					//显示未审核图片
					changeToUnchecked:function(){
						this.showAllpic=this.showUnchecked=false;
						this.showUnchecked=true;
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
