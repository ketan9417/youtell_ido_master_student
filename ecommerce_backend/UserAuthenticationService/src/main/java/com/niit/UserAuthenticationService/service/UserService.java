package com.niit.UserAuthenticationService.service;


import com.niit.UserAuthenticationService.exception.UserAlreadyPresentException;
import com.niit.UserAuthenticationService.exception.UserNotFoundException;
import com.niit.UserAuthenticationService.model.User;
//import com.niit.UserAuthenticationService.rabbitMq.UserDto;

import java.util.List;

public interface UserService {
public User registerUser(User user) throws UserAlreadyPresentException;
    public User loginUser(String email, String password) throws UserNotFoundException;
    List<User> displayAllUser();


    public String getPassword(String email);

    public User changePassword(String email,String password);
//    User updateUser(UserDto userDto) throws UserNotFoundException;

}
