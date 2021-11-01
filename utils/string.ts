const mailRegExp = new RegExp(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/);

export const validateEmail = (str: string): boolean => mailRegExp.test(str);
