package com.niit.UserAuthenticationService.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.NOT_FOUND, reason="User Not Found Please Provide Correct Credentials")
public class UserNotFoundException extends Exception {
}
