package com.niit.UserAuthenticationService.service;

import com.niit.UserAuthenticationService.exception.UserNotFoundException;
import com.niit.UserAuthenticationService.model.EmailDetails;
import com.niit.UserAuthenticationService.model.User;
import com.niit.UserAuthenticationService.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.File;

@Service
public class EmailServiceImpl implements EmailService{
    @Autowired
    private UserService userService;
    @Autowired
    private  UserRepository userRepository;
    @Autowired
    private JavaMailSender javaMailSender;
    @Value("${spring.mail.username}")
    private String sender;

    @Override
    public String sendSimpleEmail(User user) {
        System.out.println(user.getEmail());
        try{
            SimpleMailMessage mailMessage = new SimpleMailMessage();
            mailMessage.setFrom(sender);
            mailMessage.setTo(user.getEmail());

            mailMessage.setText("Congratulations...!!! You Have Successfully Registered to studyroom...!!!");
            mailMessage.setSubject("www.studyroom.com Registration...!!!");
            javaMailSender.send(mailMessage);
            return "Mail Sent Successfully...!!!";
        }catch (Exception e){
            return "Error while Sending Mail...!!!";
        }
    }


    @Override
    public String sendForgotEmailLink(String email) {
        System.out.println("hello");
        System.out.println(email);
        if (userRepository.findById(email).isEmpty())
        {
            return  null;
        }
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setFrom(sender);
        mailMessage.setTo(email);
//        String password=userService.getPassword(email);
        String otp="";
        for(int i=0;i<6;i++)
        {
            int i1=(int)(Math.random()*10);
            otp=otp+i1;
        }
        System.out.println(otp);
        mailMessage.setText("Your OTP is : " +otp);
        mailMessage.setSubject("forgot password reset link");
        javaMailSender.send(mailMessage);
        return otp;
    }
}


