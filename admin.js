    var app=new Vue({
				el:"#app",
				data:{
					password:"",
					phoneNum:"",
					testNum:"",
					errorTips1:"",
					errorTips2:"",
					isRightPho:true,
					isRightPas:true
				},
				methods:{
					//检查用户登录信息是否正确
					checkMes: function(e){
						//先将错误判别和错误提示恢复为默认值
						this.isRightPas=this.isRightPho=true;
						this.errorTips1=this.errorTips2="";
						//检查手机号输入框是否为空
						if (this.phoneNum==""){
							this.isRightPho=false;
							this.errorTips1="手机号不能为空";
							e.preventDefault();
							return;
						}
						//检查手机号是否为11位数字
						var reg=/^[0-9]{11}$/;
						if (this.phoneNum&&!reg.test(this.phoneNum)){
							this.isRightPho=false;
							this.errorTips1="手机号格式不正确";
							e.preventDefault();
							return;
						}
						//检查密码输入框是否为空
						if (this.password==""){
							this.isRightPas=false;
							this.errorTips2="密码不能为空";
							e.preventDefault();
							return;
						}
					}
				}
			})
