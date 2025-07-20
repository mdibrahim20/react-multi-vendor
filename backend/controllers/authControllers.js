const adminModel = require("../models/adminModel");
const { responseReture } = require("../utiles/response");
const bcrypt = require('bcrypt');
const {createToken} = require("../utiles/tokenCreate");
class authControllers {
  admin_login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const admin = await adminModel.findOne({ email }).select("+password");
      console.log("Admin Login Info:", admin);
      if (admin) {
        const match = await bcrypt.compare(password, admin.password);
        console.log("Password Match:", match);
        if(match){
          const token = await createToken({
            id: admin._id,
            role:admin.role,

          })
          res.cookie("accessToken",token,{
            expires: new Date(Date.now()+7*24*60*60*1000), // 7 days
          })
          responseReture(res, 200, {
            success: true,
            message: `Login Successful`,
            userInfo: {
              id: admin._id,
              name: admin.name,
              email: admin.email,
              image: admin.image,
              role: admin.role,
            },
          });
        }
        else{
          responseReture(res, 401, { error: "Invalid Password" });
          return;
        }
      } else {
        responseReture(res, 404, { error: "Email Not Found" });
      }
    } catch (error) {
      responseReture(res, 500, { error: error.message });
    }
  };
}

module.exports = new authControllers();
