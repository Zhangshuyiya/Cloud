var app=new Vue({
			el:"#app",
			data:{
				username:"",
				phoneNum:"",
				password1:"",
				password2:"",
				isRightName:true,
				isRightPho:true,
				isRightPas:true,
				isSamePas:true,
				errorTips0:"",
				errorTips1:"",
				errorTips2:"",
				errorTips3:""
			},
			computed:{
				isSet(){ //判断输入数据是否为空
					return (this.username&&this.phoneNum&&this.password1&&this.password2)&&(this.isRightName&&this.isRightPas&&this.isRightPho&&this.isSamePas);
				}
			},
			methods:{
				//检查用户输入的用户名格式是否正确
				checkName:function(){
					//先将错误判别变量和错误提示恢复为默认值
					this.isRightName=true;
					this.errorTips0="";
					//检查用户名格式是否正确
					var reg=/^[\u4e00-\u9fa5_0-9]{1,12}$/;
					var reg1=/[\u4e00-\u9fa5]/;
					if (this.username&&(!reg.test(this.username))){
						this.isRightName=false;
						this.errorTips0="用户名格式不正确";
					}
					else if (this.username&&(!reg1.test(this.username))){
						this.isRightName=false;
						this.errorTips0="用户名不能是纯数字";
					}
					else  ;
				},
				
				//检查用户输入的手机号格式是否正确
				checkPho: function(){		
					//先将错误判别变量和错误提示恢复为默认值
					this.isRightPho=true;
					this.errorTips1="";
					//检查手机号是否为11位数字
					var reg=/^[0-9]{11}$/;
					if (this.phoneNum&&!reg.test(this.phoneNum)){
						this.isRightPho=false;
						this.errorTips1="手机号格式不正确";
					}
				},
				
				//检查用户输入的密码格式是否正确
				checkPass: function(){
					//先将错误判别变量和错误提示恢复为默认值
					this.isSamePas=this.isRightPas=true;
					this.errorTips3=this.errorTips2="";
					//检查密码格式是否正确
					reg=/^[a-zA-Z0-9]{8,14}$/;
					cha=/[a-zA-Z]/;
					dig=/[0-9]/;
					if ((!reg.test(this.password1)||!cha.test(this.password1)||!dig.test(this.password1))&&this.password1){
						this.isRightPas=false;
						this.errorTips2="密码设置不符合要求";
					}
					//检查用户先后输入的密码是否一致
					if (this.password1!=this.password2&&this.password2&&this.password1){
						this.isSamePas=false;
						this.errorTips3="两次密码不一致";
					}
				},
				
				//检查用户先后输入的密码是否一致
				checkSame:function(){
					//先将错误判别变量和错误提示恢复为默认值
					this.isSamePas=true;
					this.errorTips3="";
					if (this.password1!=this.password2&&this.password2&&this.password1){
						this.isSamePas=false;
						this.errorTips3="两次密码不一致";
					}
				},
				/*
				//提交用户注册信息
				uploadMes: function(){			
					//提交账号和密码信息到接口保存至数据库中
					console.log("通过接口检查用户是否输入正确!");
					axios.post("http://west2.free.idcfengye/register",{
						uname:this.username,
						pwd:this.password1,
						phone:this.phoneNum
					},
					).then(res=>{
						console.log(res);
					}).catch(err=>{
						console.log(err);
					});
				}*/
			}
		})
