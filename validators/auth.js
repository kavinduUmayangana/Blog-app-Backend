const {check}=require('express-validator');
const signupValidator=[
    check('name').notEmpty().withMessage('name is required'),
check('email')
.isEmail()
.withMessage('invalid email')
.notEmpty()
.withMessage('email is required'),

check('password')
.isLength({min:6})
.withMessage('password should be 6 char long')
.notEmpty()
.withMessage('password is required'),
];
const signinValidator=[
    check('email')
    .isEmail()
    .withMessage('invalid email')
    .notEmpty()
    .withMessage('email is required'),
    check('password').notEmpty().withMessage('passsword is required')
];
const emailValidator=[
    check('email')
    .isEmail()
    .withMessage('Invalid email')
    .notEmpty()
    .withMessage('Email is required')
];


const verifyUserValidator=[
    check('email')
    .isEmail()
    .withMessage('Invalid email')
    .notEmpty()
    .withMessage('Email is required'),

    check('code').notEmpty().withMessage('code is required')
]
const recoverPasswordValidator=[
    check('email')
    .isEmail()
    .withMessage('Invalid email')
    .notEmpty()
    .withMessage('Email is required'),
    check('code').notEmpty().withMessage('code is required'),

    
check('password')
.isLength({min:6})
.withMessage('password should be 6 char long')
.notEmpty()
.withMessage('password is required'),
]
const changePasswordValidator=[
    check('oldPassword').notEmpty().withMessage('Old password is required'),
    check('newPassword').notEmpty().withMessage('New password is required'),
];
module.exports={signupValidator,signinValidator,changePasswordValidator,recoverPasswordValidator,emailValidator,verifyUserValidator};