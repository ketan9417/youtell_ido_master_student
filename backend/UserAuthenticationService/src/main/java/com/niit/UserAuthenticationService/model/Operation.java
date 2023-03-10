package com.niit.UserAuthenticationService.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Operation {
    @Id
    private String q_id;

    private String firstoperand;
    private String secondoperand;
    private String operation;
    private String currectanswer;
    private String answer;

    private  String email;

}
