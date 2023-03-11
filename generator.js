var rdlength = document.getElementsByName('pwdlength');
var passwordText = document.getElementById('password');
var setPassword = '';
var chkSetting = document.getElementsByName('pwdsetting');

const _numbers = "0123456789";
const _symbol ="[~!@#$%^&*()_+-=;:',./\|`?<>{}]";
const _lwrcase = "abcdefghijklmnopqrstuvwxyz";
const _uppcase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";



function btnSubmit() {
    setPassword = '';

    if (!settingValidate()) {
        return alert('The password generator must at least one setting to be checked');
    }else{
        for(i = 0; i < rdlength.length; i++) {

            if(rdlength[i].checked) passwordText.value = generatePassword(rdlength[i].value);
            
        }
    }
    return;
}

function generatePassword(length) {
    var charset = "";
    let password = "";

    for (let i = 0; i < chkSetting.length; i++) {
        if (chkSetting[i].checked) 
            charset += setCharset(chkSetting[i].value);  
    }

    // for (let i = 0; i < length; i++) {
    //     const randomIndex = Math.floor(Math.random() * charset.length);
    //     password += charset[randomIndex];
    // }
    for (let i = 0; i < length; i++) {
        const randIndex = Math.floor(Math.random() * charset.length);
        password += charset[randIndex]
    }

    return password;
}

function setCharset(chr){
    if (chr=='numbers')
        return _numbers.toString();
    else if (chr=='lowercase')
        return _lwrcase.toString();
    else if (chr=='uppercase')
        return _uppcase.toString();
    else if(chr=='symbols')
        return _symbol.toString();
}


function settingValidate() {
    let buttonEnable = false;
    chkSetting.forEach(sub_checkbox=>{
        if (sub_checkbox.checked){
            //console.log('checkbox checked:',sub_checkbox.value);
            buttonEnable = true;
        }
    })
    return buttonEnable;
}