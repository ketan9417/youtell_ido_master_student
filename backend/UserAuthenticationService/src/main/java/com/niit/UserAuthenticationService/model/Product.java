package com.niit.UserAuthenticationService.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    @Id
    private String p_id;
    private  String p_name;
    private  String p_description;
    private int p_price;
    private String p_imgurl;

}
