package com.niit.UserAuthenticationService.service;

import com.niit.UserAuthenticationService.model.User;

public interface EmailService {
    String sendSimpleEmail(User user);


   public String sendForgotEmailLink(String userEmail);
}
