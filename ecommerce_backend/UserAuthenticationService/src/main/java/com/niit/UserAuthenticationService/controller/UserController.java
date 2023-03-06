package com.niit.UserAuthenticationService.controller;



import com.niit.UserAuthenticationService.exception.UserAlreadyPresentException;
import com.niit.UserAuthenticationService.exception.UserNotFoundException;
import com.niit.UserAuthenticationService.model.User;
//import com.niit.UserAuthenticationService.rabbitMq.UserDto;
import com.niit.UserAuthenticationService.service.EmailService;
import com.niit.UserAuthenticationService.service.ProductService;
import com.niit.UserAuthenticationService.service.SecurityTokenGenerator;
import com.niit.UserAuthenticationService.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/user/")
public class UserController {
    @Autowired
    private EmailService emailService;
    private UserService userService;
    private ProductService productService1;
    private SecurityTokenGenerator securityTokenGenerator;
    private ResponseEntity responseEntity;

    @Autowired
    public UserController(UserService userService,SecurityTokenGenerator securityTokenGenerator,ProductService productService)
    {
        this.productService1=productService;
        this.userService=userService;
        this.securityTokenGenerator = securityTokenGenerator;
    }

    @PostMapping("register")
    public ResponseEntity<?> registerFunction(@RequestBody User user) throws UserAlreadyPresentException {
        return new ResponseEntity<>(userService.registerUser(user), HttpStatus.CREATED);
    }

    @PostMapping("login")
    public ResponseEntity loginFunction(@RequestBody User user) throws UserNotFoundException {
        Map<String,String> map=null;
        try {
            User userObj = userService.loginUser(user.getEmail(),user.getPassword());
            if (userObj.getEmail().equals(user.getEmail())) {
                map = securityTokenGenerator.generateToken(user);
            }
            responseEntity = new ResponseEntity(map, HttpStatus.OK);
        }
        catch(UserNotFoundException e){
            throw new UserNotFoundException();
        }
        catch (Exception e){
            responseEntity = new ResponseEntity("Try after sometime!!!", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }

    @GetMapping("fetchAll")
    public ResponseEntity<?> displayAllFunction()
    {
        return new ResponseEntity<>(userService.displayAllUser(), HttpStatus.OK);
    }
    @GetMapping("fetchAllproduct")
    public ResponseEntity<?> displayAllproduct()
    {
        return new ResponseEntity<>(productService1.displayAllproduct(), HttpStatus.OK);
    }
    @PutMapping("update-password")
    public ResponseEntity<?> changepassword(@RequestBody User user)
    {
        return new ResponseEntity<>(userService.changePassword(user.getEmail(), user.getPassword()), HttpStatus.OK);
    }

    @GetMapping("forgot-password/{userEmail}")
    public ResponseEntity<?> getPassword(@PathVariable String userEmail) throws UserNotFoundException{
        try{
            System.out.println("called");
//            String msg=emailService.sendForgotEmailLink(userEmail);
            responseEntity=new ResponseEntity(emailService.sendForgotEmailLink(userEmail),HttpStatus.OK);
        }
        catch (Exception e)
        {
            responseEntity=new ResponseEntity("Error!!! Try after sometime",HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }



}
