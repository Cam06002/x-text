const crypto = require('crypto');

const EncryptEditor = (editorText)=> {
    const secretKey = crypto.randomBytes(32);
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv("aes-256-ccm", secretKey, iv);
    let encryptedEditor = cipher.update(editorText, "utf-8", "hex");
    encryptedEditor += cipher.final("hex");

    const encryptionObj = {
        secretKey,
        iv,
        encryptedEditor
    };

    console.log(encryptedEditor);
    return encryptionObj;
}

exports.Encrypt = EncryptEditor;