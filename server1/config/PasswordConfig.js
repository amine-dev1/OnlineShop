const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    const saltRound = 10;
    try{    const salt = await bcrypt.genSalt(saltRound);
            const hashedPassword = await bcrypt.hash(password,salt);
            return hashedPassword;
    }catch(error){
        throw new Error('Error hashing password: ' + error);
    }
    
}

const comparePassword = async (password, hashedPassword) => {
    try{
        return await bcrypt.compare(password, hashedPassword);
    }catch(error){
        throw new Error('Error comparing passwords: ' + error);
    }
}

module.exports = {hashPassword , comparePassword};