export const CheckValidation=(email,password,confirmPassword)=>
{
     const IsvalidEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
     const IsvalidPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);


     if(!IsvalidEmail) return "Email ID is not valid"
     if(!IsvalidPassword) return "Password is not valid"


     if (confirmPassword !== undefined) {
         
          if (confirmPassword === '') {
            return 'Confirm password cannot be empty.';
          } else if (confirmPassword !== password) {
            return  'Passwords do not match.';
          }
        }
     return null;
}