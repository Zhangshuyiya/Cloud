var app=new Vue({
				el:"#app",
				data:{
					password:"",
					userName:"",
					errorTips1:"",
					errorTips2:"",
					isRightName:true,
					isRightPas:true
				},
				methods:{
					//检查用户登录信息是否正确
					checkMes: function(e){
						//先将错误判别和错误提示恢复为默认值
						this.isRightPas=this.isRightName=true;
						this.errorTips1=this.errorTips2="";
						//检查用户名输入框是否为空
						if (this.userName==""){
							this.isRightName=false;
							this.errorTips1="请您输入用户名";
							e.preventDefault();
							return;
						}
						//检查密码输入框是否为空
						if (this.password==""){
							this.isRightPas=false;
							this.errorTips2="请您输入密码";
							e.preventDefault();
							return;
						}
					/*	
						axios.post("http://west2.free.idcfengye/signin",{
							uname:this.userName,
							pwd:this.password,
						},
						).then(res=>{
							console.log(res);
						}).catch(err=>{
							console.log(err);
						});*/
					}
				}
			})
