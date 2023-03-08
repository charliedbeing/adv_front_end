/**
 * login: logic
 *  
 * login step:
 *   1: get user
 *   2: authenticate 
 * 
 *  login data:  username, password
 */
class LoginTemplate{
   constructor(){
     this.authenticateUser = this.authenticateUser.bind(this)
   }

   login(username, password){
    
        const user = this.getUser(username)

        const authenticated = this.authenticateUser(user,password)

        if(authenticated){
            this.redirectToDashborad(user,password)
        }else{
            this.showErrorMessage()
        }
   }
   getUser(username){
        // must be implemented by subclass
   }
   authenticateUser(user,password){
     // must be implemented by subclass
   }

    redirectToDashborad(){
        console.log(`Redirecting to ${user.role} dashborad....`)
    }
    showErrorMessage(){
        console.log('Invalid user')
    }
}

class EmailAndPasswordLogin extends LoginTemplate{
    getUser(){

        return {username,password:'abc123',role:'admin'}
    }
    authenticateUser(user,password){

        return user.password == password
    }

}

class GoogleLogin extends LoginTemplate{

    getUser(usename){
        // Getting user with google id : username
        return {username,role:'admin'}
    }

    authenticateUser(user){
       // 
        return true
    }
}