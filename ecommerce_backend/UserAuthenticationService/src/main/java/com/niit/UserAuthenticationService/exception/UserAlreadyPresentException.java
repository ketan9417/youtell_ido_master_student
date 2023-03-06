package com.niit.UserAuthenticationService.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.CONFLICT, reason="User Already Registered With  Our system Please Use Different Email")
public class UserAlreadyPresentException extends Exception {
}
