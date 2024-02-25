import { AES, enc } from "crypto-js";

export function Encrypt(editorText) {
    const secretKey = 'thisISmyTESTsecretKEY';
    const encryptedEditor = AES.encrypt(editorText, secretKey);

    console.log(encryptedEditor);
    return encryptedEditor;
}

export function Decrypt(ecryptedEditor){
    const secretKey = 'thisISmyTESTsecretKEY';

    try{
        const decryptedCipher = AES.decrypt(ecryptedEditor, secretKey);
        const decryptedEditor = decryptedCipher.toString(enc.Utf8);
        console.log(decryptedEditor);
    } catch (err) {
        console.log('Unable to decipher', err);
    }
}