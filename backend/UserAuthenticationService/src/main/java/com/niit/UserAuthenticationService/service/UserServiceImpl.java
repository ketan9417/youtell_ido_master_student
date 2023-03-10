package com.niit.UserAuthenticationService.service;


import com.niit.UserAuthenticationService.exception.UserAlreadyPresentException;
import com.niit.UserAuthenticationService.exception.UserNotFoundException;
import com.niit.UserAuthenticationService.model.Operation;
import com.niit.UserAuthenticationService.model.User;

import com.niit.UserAuthenticationService.repository.Operationrepo;
import com.niit.UserAuthenticationService.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
private EmailService emailService;
private Operationrepo operationrepo;
    private UserRepository userRepository;
    @Autowired
    public UserServiceImpl(UserRepository userRepository,Operationrepo operationrepo){
        this.userRepository=userRepository;
        this.operationrepo=operationrepo;
    }
    @Override
    public User registerUser(User user) throws UserAlreadyPresentException {
        if(userRepository.findById(user.getEmail()).isPresent())
        {
            throw new UserAlreadyPresentException();
        }
        emailService.sendSimpleEmail(user);
        return userRepository.save(user);
    }

    @Override
    public User loginUser(String email, String password) throws UserNotFoundException {
        User userdata=userRepository.findByEmailAndPassword(email,password);
//        System.out.println(userdata);
        if(userdata==null)
        {
            throw new UserNotFoundException();
        }
        return userdata;
    }

    @Override
    public List<User> displayAllUser() {
        return userRepository.findAll();
    }

    @Override
    public List<User> findstudent() {
        List<User> userObj = userRepository.findAll();
        List<User> userObj2= userObj.stream().filter((x)->x.getProfile().equals("Student")).collect(Collectors.toList());

        return userObj2;
    }

    @Override
    public String getPassword(String email){

        Optional<User> userObj = userRepository.findById(email);
        if(userObj.isPresent()){
            return userObj.get().getPassword();
        }
        return "this email id is not registered";}

    @Override
    public Operation savequestion(Operation operation) {
        return   operationrepo.save(operation);
    }

    @Override
    public Operation saveanswer(String answer, String id) {
        Operation operation=operationrepo.findById(id).get();
       operation.setAnswer(answer);
        operationrepo.save(operation);
        return operation;
    }



    @Override
    public List<Operation> fetchquestion(String email) {
        List<Operation>  operations=  operationrepo.findAll();

        List<Operation>  operation2=operations.stream().filter((x)->x.getEmail().equals(email)).collect(Collectors.toList());
        System.out.println(operations);
        System.out.println(operation2);
        return operation2;
    }

    @Override
    public User changePassword(String email, String password) {
        User userObj = userRepository.findById(email).get();
            userObj.setPassword(password);
            return userRepository.save(userObj);
    }

//    @Override
//    public User updateUser(UserDto userDto) throws UserNotFoundException {
//        Optional<User> user= userRepository.findById(userDto.getEmail());
//        if(user.isPresent()){
//            User user1= new User();
//
//            user1.setEmail(userDto.getEmail());
//            user1.setPassword(userDto.getPassword());
//            user1.setUserName(user.get().getUserName());
//            userRepository.save(user1);
//            return  user1;
//        }
//        else {
//            throw new UserNotFoundException();
//        }
//    }




}
